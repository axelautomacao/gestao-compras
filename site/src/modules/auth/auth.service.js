import { auth, db } from '../../config/firebase.js';
import {
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    onAuthStateChanged
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Store } from '../../core/store.js';

export const Auth = {
    init: () => {
        return new Promise((resolve) => {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    try {
                        // Fetch user profile from Firestore
                        const userDoc = await getDoc(doc(db, "usuarios", user.uid));
                        if (userDoc.exists()) {
                            const profile = { uid: user.uid, email: user.email, ...userDoc.data() };
                            Store.setUser(profile);
                        } else {
                            // Fallback if no profile exists
                            Store.setUser({ uid: user.uid, email: user.email, role: 'obra', nome: user.email.split('@')[0] });
                        }
                    } catch (error) {
                        console.warn("Erro ao buscar perfil (usando fallback):", error.message);
                        // Fallback em caso de erro de permissão
                        Store.setUser({ uid: user.uid, email: user.email, role: 'obra', nome: user.email.split('@')[0] });
                    }
                } else {
                    Store.setUser(null);
                }
                resolve(Store.state.currentUser);
            });
        });
    },

    login: async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const userDoc = await getDoc(doc(db, "usuarios", user.uid));
            if (userDoc.exists()) {
                const profile = { uid: user.uid, email: user.email, ...userDoc.data() };
                Store.setUser(profile);
                return profile;
            } else {
                throw new Error("Perfil de usuário não encontrado.");
            }
        } catch (error) {
            throw error;
        }
    },

    logout: async () => {
        await signOut(auth);
        Store.setUser(null);
    },

    recoverPassword: async (email) => {
        await sendPasswordResetEmail(auth, email);
    }
};
