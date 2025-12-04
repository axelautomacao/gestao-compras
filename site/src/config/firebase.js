import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirebaseConfig } from './env.js';

// Configuração Firebase (carregada de window.__FIREBASE_CONFIG ou variáveis Vite)
const firebaseConfig = getFirebaseConfig();

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// Função de inicialização (mantida para compatibilidade)
export const initializeFirebase = async () => {
    console.log('[Firebase] Configuração carregada com sucesso');
    return app;
};

export { app, db, storage, auth };
