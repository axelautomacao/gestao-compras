import { auth, db } from '../../config/firebase.js';
import { collection, getDocs, doc, updateDoc, setDoc } from "firebase/firestore";

const getFunctionsBaseUrl = () => {
    const env = (import.meta && import.meta.env) || {};
    const fromGlobal = (typeof window !== 'undefined' && (window.__FUNCTIONS_BASE_URL || window.__FUNCTIONS_BASE)) || null;
    const projectId = auth?.app?.options?.projectId || 'controle-de-obras-axel';
    return (
        fromGlobal ||
        env.VITE_FUNCTIONS_BASE_URL ||
        env.VITE_FUNCTIONS_BASE ||
        `https://us-central1-${projectId}.cloudfunctions.net`
    );
};

export const SettingsService = {
    getUsers: async () => {
        const snap = await getDocs(collection(db, 'usuarios'));
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    },

    updateUser: async (id, data) => {
        await updateDoc(doc(db, 'usuarios', id), data);
    },

    // Note: Creating users usually requires Firebase Admin SDK or a Cloud Function to create Auth user.
    // Here we will just simulate saving the profile to Firestore, assuming Auth is handled separately or via Signup.
    createUserProfile: async (id, data) => {
        await setDoc(doc(db, 'usuarios', id), data);
    },

    provisionUser: async (payload) => {
        const baseUrl = getFunctionsBaseUrl();
        const currentUser = auth.currentUser;
        const token = currentUser ? await currentUser.getIdToken() : null;

        const uid = payload.uid || payload.id || (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `user_${Date.now()}`);
        const body = {
            action: 'upsert',
            uid,
            ...payload
        };

        let response;
        try {
            response = await fetch(`${baseUrl}/provisionUser`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token ? { Authorization: `Bearer ${token}` } : {})
                },
                body: JSON.stringify(body)
            });
        } catch (networkErr) {
            throw new Error('Falha na chamada da função (rede/CORS). Verifique a URL da Function e permissões.');
        }

        let data;
        try {
            data = await response.json();
        } catch (err) {
            // ignore JSON parse error to surface generic message
        }

        if (!response.ok) {
            throw new Error(data?.error || 'Não foi possível provisionar o usuário. Confirme se a Cloud Function "provisionUser" está publicada e com CORS liberado.');
        }

        return data;
    }
};
