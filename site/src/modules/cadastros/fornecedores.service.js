import { db } from '../../config/firebase.js';
import { collection, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";

export const FornecedoresService = {
    list: async () => {
        const snap = await getDocs(collection(db, 'fornecedores'));
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    },
    create: async (data) => {
        await addDoc(collection(db, 'fornecedores'), data);
    },
    update: async (id, data) => {
        await updateDoc(doc(db, 'fornecedores', id), data);
    }
};
