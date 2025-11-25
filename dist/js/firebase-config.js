// js/firebase-config.js
// Carrega configuração do Firebase apenas de fontes de ambiente (sem chaves hardcoded).
// Fontes suportadas (ordem): import.meta.env, window.__ENV/ENV/__APP_ENV, window.__FIREBASE_CONFIG/firebaseConfig,
// e meta tags <meta name="VITE_FIREBASE_API_KEY" content="..."> (opcional).

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, doc, getDoc, setDoc, updateDoc, deleteDoc, query, where, writeBatch, runTransaction, orderBy, startAt, endAt, Timestamp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const loadEnvConfig = () => {
  const metaContent = (name) => {
    if (typeof document === 'undefined') return null;
    const meta = document.querySelector(`meta[name="${name}"]`);
    return meta?.content || null;
  };

  const sources = [
    (typeof import.meta !== 'undefined' ? import.meta.env : null),
    globalThis.__ENV,
    globalThis.ENV,
    globalThis.__APP_ENV,
    globalThis.__FIREBASE_CONFIG,
    globalThis.__FIREBASE_CONFIG__,
    globalThis.firebaseConfig,
    {
      VITE_FIREBASE_API_KEY: metaContent('VITE_FIREBASE_API_KEY'),
      VITE_FIREBASE_AUTH_DOMAIN: metaContent('VITE_FIREBASE_AUTH_DOMAIN'),
      VITE_FIREBASE_PROJECT_ID: metaContent('VITE_FIREBASE_PROJECT_ID'),
      VITE_FIREBASE_STORAGE_BUCKET: metaContent('VITE_FIREBASE_STORAGE_BUCKET'),
      VITE_FIREBASE_MESSAGING_SENDER_ID: metaContent('VITE_FIREBASE_MESSAGING_SENDER_ID'),
      VITE_FIREBASE_APP_ID: metaContent('VITE_FIREBASE_APP_ID')
    }
  ];

  const pick = (variants) => {
    for (const source of sources) {
      if (!source) continue;
      for (const key of variants) {
        if (source[key]) return source[key];
      }
    }
    return null;
  };

  return {
    apiKey: pick(['VITE_FIREBASE_API_KEY', 'apiKey']),
    authDomain: pick(['VITE_FIREBASE_AUTH_DOMAIN', 'authDomain']),
    projectId: pick(['VITE_FIREBASE_PROJECT_ID', 'projectId']),
    storageBucket: pick(['VITE_FIREBASE_STORAGE_BUCKET', 'storageBucket']),
    messagingSenderId: pick(['VITE_FIREBASE_MESSAGING_SENDER_ID', 'messagingSenderId']),
    appId: pick(['VITE_FIREBASE_APP_ID', 'appId'])
  };
};

const firebaseConfig = loadEnvConfig();

const missingKeys = Object.entries(firebaseConfig)
  .filter(([, val]) => !val)
  .map(([key]) => key);

if (missingKeys.length > 0) {
  console.error(
    `[firebase-config] Variáveis de ambiente ausentes: ${missingKeys.join(', ')}. ` +
    'Inicialização bloqueada. Defina as chaves em import.meta.env (Vite) ou exponha ' +
    'window.__FIREBASE_CONFIG = { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId } antes de carregar os módulos.'
  );
  throw new Error('Firebase config inválido: variáveis ausentes');
}

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export {
  collection, addDoc, getDocs, onSnapshot, doc, getDoc, setDoc, updateDoc, deleteDoc,
  query, where, writeBatch, runTransaction, orderBy, startAt, endAt, Timestamp,
  ref, uploadBytes, getDownloadURL, deleteObject,
  signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut,
  sendPasswordResetEmail, sendEmailVerification
};

const mode = (typeof import.meta !== 'undefined' && import.meta?.env?.PROD) ? 'PRODUÇÃO' : 'DESENVOLVIMENTO';
console.log(`Sistema carregado em modo: ${mode}`);
