import { db } from '../../config/firebase.js';
import { collection, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";

export const CompradoresService = {
    list: async () => {
        const snap = await getDocs(collection(db, 'compradores'));
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    },
    create: async (data) => {
        await addDoc(collection(db, 'compradores'), data);
    },
    update: async (id, data) => {
        await updateDoc(doc(db, 'compradores', id), data);
    }
};
