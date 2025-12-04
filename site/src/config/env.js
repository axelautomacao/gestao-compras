// Helper to centralize environment/config loading.
// Priority: window globals (para compatibilidade com legado) -> variáveis Vite -> fallback/erro.

const readGlobal = (key) => {
    if (typeof window !== 'undefined' && window[key]) return window[key];
    if (typeof globalThis !== 'undefined' && globalThis[key]) return globalThis[key];
    return null;
};

// Fallback público (como no dist/env.js legado). Use apenas para evitar crash se nada for fornecido.
const DEFAULT_FIREBASE_CONFIG = {
    apiKey: "AIzaSyAuJIZeL0ipjVAdoSjH5Wq5IIwdjWexoaE",
    authDomain: "controle-de-obras-axel.firebaseapp.com",
    projectId: "controle-de-obras-axel",
    storageBucket: "controle-de-obras-axel.firebasestorage.app",
    messagingSenderId: "438724917414",
    appId: "1:438724917414:web:cb9674cdc557bdf2a7dc67"
};

export const getFirebaseConfig = () => {
    const fromGlobal = readGlobal('__FIREBASE_CONFIG');
    if (fromGlobal) return fromGlobal;

    const env = (import.meta && import.meta.env) || {};
    const fromEnv = {
        apiKey: env.VITE_FIREBASE_API_KEY,
        authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: env.VITE_FIREBASE_APP_ID,
    };

    const hasEnv = Object.values(fromEnv).every(Boolean);
    if (hasEnv) return fromEnv;

    console.warn('[Config] Firebase config não encontrada em globals/ENV; usando fallback padrão legado.');
    return DEFAULT_FIREBASE_CONFIG;
};

export const getRdoConfig = () => {
    const fromGlobal = readGlobal('__RDO_API_CONFIG');
    if (fromGlobal) {
        return {
            TOKEN: fromGlobal.TOKEN,
            BASE_URL: fromGlobal.BASE_URL,
            HOLIDAYS: Array.isArray(fromGlobal.HOLIDAYS) ? fromGlobal.HOLIDAYS : []
        };
    }

    const env = (import.meta && import.meta.env) || {};
    const token = env.VITE_RDO_API_TOKEN || env.VITE_RDO_TOKEN;
    const base = env.VITE_RDO_API_BASE || 'https://rdo.axelindustrial.com.br/api';
    const holidays = (env.VITE_RDO_HOLIDAYS || '').split(',').map(s => s.trim()).filter(Boolean);

    if (token) return { TOKEN: token, BASE_URL: base, HOLIDAYS: holidays };

    // Opcional: retornar objeto vazio para chamadas opcionais
    return { TOKEN: '', BASE_URL: base, HOLIDAYS: holidays };
};
