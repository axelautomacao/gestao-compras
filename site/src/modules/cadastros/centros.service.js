import { db } from '../../config/firebase.js';
import { collection, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";

export const CentrosService = {
    list: async () => {
        const snap = await getDocs(collection(db, 'centrosCusto'));
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    },
    create: async (data) => {
        await addDoc(collection(db, 'centrosCusto'), data);
    },
    update: async (id, data) => {
        await updateDoc(doc(db, 'centrosCusto', id), data);
    }
};
