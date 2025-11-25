// js/firebase-config.js

// --- 1. CONFIGURAÇÃO DE AMBIENTES / CREDENCIAIS ---
// Ordem de precedência:
// 1) window.__FIREBASE_CONFIG__ (arquivo local em runtime, ex: firebase-config.local.js)
// 2) import.meta.env (quando houver build que injete variáveis)
// 3) fallback embedado (dev) ou placeholders (prod)

const firebaseConfigFromWindow = (typeof window !== 'undefined' && window.__FIREBASE_CONFIG__) ? window.__FIREBASE_CONFIG__ : null;

const firebaseConfigEnvDev = {
  apiKey: import.meta?.env?.VITE_FIREBASE_API_KEY,
  authDomain: import.meta?.env?.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta?.env?.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta?.env?.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta?.env?.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta?.env?.VITE_FIREBASE_APP_ID
};

const firebaseConfigEnvProd = {
  apiKey: import.meta?.env?.VITE_FIREBASE_PROD_API_KEY,
  authDomain: import.meta?.env?.VITE_FIREBASE_PROD_AUTH_DOMAIN,
  projectId: import.meta?.env?.VITE_FIREBASE_PROD_PROJECT_ID,
  storageBucket: import.meta?.env?.VITE_FIREBASE_PROD_STORAGE_BUCKET,
  messagingSenderId: import.meta?.env?.VITE_FIREBASE_PROD_MESSAGING_SENDER_ID,
  appId: import.meta?.env?.VITE_FIREBASE_PROD_APP_ID
};

// Fallback de desenvolvimento (chaves já públicas do projeto dev)
const firebaseConfigDevFallback = {
  apiKey: "AIzaSyAuJIZeL0ipjVAdoSjH5Wq5IIwdjWexoaE",
  authDomain: "controle-de-obras-axel.firebaseapp.com",
  projectId: "controle-de-obras-axel",
  storageBucket: "controle-de-obras-axel.firebasestorage.app",
  messagingSenderId: "438724917414",
  appId: "1:438724917414:web:cb9674cdc557bdf2a7dc67"
};

const firebaseConfigProdFallback = {
  apiKey: "AIzaSyAuJIZeL0ipjVAdoSjH5Wq5IIwdjWexoaE",
  authDomain: "controle-de-obras-axel.firebaseapp.com",
  projectId: "controle-de-obras-axel",
  storageBucket: "controle-de-obras-axel.firebasestorage.app",
  messagingSenderId: "438724917414",
  appId: "1:438724917414:web:cb9674cdc557bdf2a7dc67"
};

const isProd = import.meta?.env?.PROD || false;

let firebaseConfig =
  firebaseConfigFromWindow ||
  (isProd ? firebaseConfigEnvProd : firebaseConfigEnvDev);

if (!firebaseConfig || !firebaseConfig.apiKey) {
  firebaseConfig = isProd ? firebaseConfigProdFallback : firebaseConfigDevFallback;
  console.warn("[firebase-config] Configuração vazia; usando fallback embutido ", isProd ? "(prod placeholders)" : "(dev)");
}

// --- 2. INICIALIZAÇÃO DO FIREBASE ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, doc, getDoc, setDoc, updateDoc, deleteDoc, query, where, writeBatch, runTransaction, orderBy, startAt, endAt, Timestamp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const app = initializeApp(firebaseConfig);

// --- 3. EXPORTAÇÃO DOS SERVIÇOS ---
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

console.log(`Sistema carregado em modo: ${isProd ? 'PRODUÇÃO' : 'DESENVOLVIMENTO'}`);
