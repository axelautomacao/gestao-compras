import { db } from '../../config/firebase.js';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, query, where } from 'firebase/firestore';
import { COST_PER_HOUR, COST_PER_OVERTIME_HOUR } from '../../constants/costs.js';

export const ObrasService = {
    getObras: async () => {
        const snapshot = await getDocs(collection(db, 'obras'));
        return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    },

    getObraById: async (id) => {
        const snapshot = await getDocs(collection(db, 'obras'));
        const obra = snapshot.docs.find(d => d.id === id);
        return obra ? { id: obra.id, ...d.data() } : null;
    },

    createObra: async (data) => {
        const docRef = await addDoc(collection(db, 'obras'), {
            ...data,
            created_at: new Date().toISOString()
        });
        return docRef.id;
    },

    updateObra: async (id, data) => {
        await updateDoc(doc(db, 'obras', id), data);
    },

    deleteObra: async (id) => {
        await deleteDoc(doc(db, 'obras', id));
    }
};