// js/auth.js
import { auth, db, doc, getDoc, setDoc, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, sendEmailVerification, Timestamp } from './firebase-config.js';
import { state } from './state.js';
// import { UI } from './ui.js'; // <-- REMOVIDO!
import { logAuditoria } from './logger.js';

export const Auth = {

    /**
     * Retorna uma Promise que resolve com o perfil do usuário se estiver logado,
     * ou null se estiver deslogado.
     */
    // init aceita um changeHandler opcional que será chamado em TODAS as mudanças
    // de estado de autenticação após a inicialização. A Promise retornada
    // resolve apenas com o estado inicial (primeiro evento).
    init: (changeHandler) => {
        return new Promise((resolve, reject) => {
            let resolved = false;
            const timeoutId = setTimeout(() => {
                if (!resolved) {
                    resolved = true;
                    console.warn('[Auth.init] Timeout ao aguardar onAuthStateChanged; prosseguindo sem usuário.');
                    resolve(null);
                    if (typeof changeHandler === 'function') {
                        changeHandler(null);
                    }
                }
            }, 10000);
            // 'unsubscribe' pode ser usado para parar de ouvir, se necessário
            const unsubscribe = onAuthStateChanged(auth, async (user) => {
                const loadingMessage = document.getElementById('loading-message');

                if (user) {
                    clearTimeout(timeoutId);
                    loadingMessage.textContent = 'Carregando perfil...';
                    const userProfile = await Auth.getUserProfile(user);

                    if (userProfile) {
                        state.currentUser = userProfile;
                        if (!resolved) {
                            resolved = true;
                            resolve(userProfile); // resolve inicial
                        } else if (typeof changeHandler === 'function') {
                            changeHandler(userProfile); // mudanças subsequentes
                        }
                    } else {
                        // Usuário autenticado mas sem perfil no Firestore (erro grave)
                        loadingMessage.textContent = 'Erro: Perfil não encontrado.';
                        await signOut(auth); // Força o logout
                        state.currentUser = null;
                        if (!resolved) {
                            resolved = true;
                            resolve(null);
                        } else if (typeof changeHandler === 'function') {
                            changeHandler(null);
                        }
                    }
                } else {
                    clearTimeout(timeoutId);
                    // Usuário está deslogado
                    state.currentUser = null;
                    if (!resolved) {
                        resolved = true;
                        resolve(null);
                    } else if (typeof changeHandler === 'function') {
                        changeHandler(null);
                    }
                }
            }, (error) => {
                // Erro na própria autenticação
                console.error("Erro no onAuthStateChanged:", error);
                reject(error);
            });
        });
    },

    getUserProfile: async (user) => {
        try {
            const uid = user.uid;
            const userDoc = await getDoc(doc(db, "usuarios", uid));
            if (userDoc.exists()) {
                return { uid, ...userDoc.data() };
            }
            // Perfil não existe ou sem permissão: usa fallback mínimo
            return { uid, email: user.email, nome: user.email || 'Usuário', role: 'obra' };
        } catch (err) {
            console.error("Erro ao buscar perfil:", err);
            // Fallback mínimo para não travar login
            return { uid: user.uid, email: user.email, nome: user.email || 'Usuário', role: 'obra' };
        }
    },

    handleLogin: async (email, password) => {
        // A lógica de try/catch foi movida para app.js
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        // Lógica do "Lembrar-me"
        const rememberCheck = document.getElementById('check-remember-me');
        if (rememberCheck && rememberCheck.checked) {
            localStorage.setItem('rememberedEmail', email);
        } else {
            localStorage.removeItem('rememberedEmail');
        }

        // UI.hideLoginModal(); // <-- REMOVIDO!
        await logAuditoria('login', { email }, { uid: userCredential.user.uid, email });
        // Sucesso! (onAuthStateChanged fará o resto)
    },

    handleSignUp: async (nome, email, password) => {
        // A lógica de try/catch foi movida para app.js
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const uid = userCredential.user.uid;

        // M3.3: Enviar email de verificação
        try {
            await sendEmailVerification(userCredential.user);
            console.log('[M3.3] Email de verificação enviado para:', email);
        } catch (err) {
            console.warn('[M3.3] Aviso ao enviar email de verificação:', err.message);
            // Continua mesmo se email não for enviado
        }

        // Cria o perfil no Firestore com flag de não verificado
        const userProfile = {
            uid: uid,
            nome: nome,
            email: email,
            role: 'obra', // Perfil padrão
            emailVerified: false, // M3.3: Flag de verificação
            createdAt: Timestamp.now() // Timestamp de criação
        };
        await setDoc(doc(db, "usuarios", uid), userProfile);

        // UI.hideLoginModal(); // <-- REMOVIDO!
        await logAuditoria('signup', { email }, userProfile);
        // Sucesso! (onAuthStateChanged fará o resto)
    },

    handleSignOut: async () => {
        if (state.currentUser) {
            await logAuditoria('logout', { email: state.currentUser.email }, state.currentUser);
        }
        await signOut(auth);
        // onAuthStateChanged será disparado, e o app.js tratará de mostrar o login
    },

    handleForgotPassword: async (email) => {
        // A lógica de try/catch foi movida para app.js
        await sendPasswordResetEmail(auth, email);
        await logAuditoria('password-reset-sent', { email }, null);
        // Sucesso! O app.js mostrará a mensagem
    },

    playLoginAnimation: () => {
        return new Promise((resolve) => {
            const loader = document.getElementById('loader');
            const logoContainer = document.getElementById('logo-container');
            // O main-layout é o container principal que tem a classe dashboard-content
            const appContent = document.getElementById('main-layout');

            if (!loader || !logoContainer || !appContent) {
                console.warn('Elementos da animação não encontrados.');
                // Fallback: garante que o app apareça
                if (appContent) {
                    appContent.classList.remove('hidden');
                    appContent.classList.add('dashboard-visible');
                }
                if (loader) loader.classList.add('hidden');
                resolve();
                return;
            }

            // Resetar estados
            loader.classList.remove('loader-hidden', 'hidden');
            appContent.classList.remove('dashboard-visible');
            // Garante que hidden esteja lá inicialmente se o CSS não cobrir
            // appContent.classList.add('hidden'); 

            logoContainer.classList.remove('anim-enter', 'anim-pulse', 'anim-exit');
            logoContainer.style.opacity = '0';

            // FASE 1: Entrada
            setTimeout(() => {
                logoContainer.classList.add('anim-enter');
            }, 100);

            // FASE 2: Pulsar
            setTimeout(() => {
                logoContainer.classList.remove('anim-enter');
                logoContainer.classList.add('anim-pulse');
            }, 900);

            // FASE 3: Saída
            setTimeout(() => {
                logoContainer.classList.remove('anim-pulse');
                logoContainer.classList.add('anim-exit');
            }, 2500);

            // FASE 4: Finalizar
            setTimeout(() => {
                loader.classList.add('loader-hidden');

                setTimeout(() => {
                    loader.classList.add('hidden');
                    appContent.classList.remove('hidden'); // Remove hidden do layout
                    appContent.classList.add('dashboard-visible'); // Fade in
                    resolve();
                }, 500);

            }, 3000);
        });
    }
};
