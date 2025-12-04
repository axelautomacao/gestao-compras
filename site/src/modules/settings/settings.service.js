import { db } from '../../config/firebase.js';
import { collection, getDocs, doc, updateDoc, setDoc } from "firebase/firestore";

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
    }
};
