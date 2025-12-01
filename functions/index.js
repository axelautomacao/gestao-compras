/**
 * Cloud Function HTTP para provisionamento de usuários (Auth + Firestore).
 * Substitui os stubs do front. Verifica token do solicitante e role no perfil.
 */
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

const allowCors = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return true;
  }
  return false;
};

const assertDirector = async (idToken) => {
  if (!idToken) throw new Error('UNAUTHENTICATED');
  const decoded = await admin.auth().verifyIdToken(idToken);
  const uid = decoded.uid;
  const doc = await db.collection('usuarios').doc(uid).get();
  const role = doc.exists ? doc.data().role : decoded.role;
  if (role === 'diretor' || role === 'administrador' || role === 'admin') {
    return { uid, role };
  }
  throw new Error('FORBIDDEN');
};

const writeProfile = async (uid, payload) => {
  const profile = {
    uid,
    nome: payload.nome || '',
    email: payload.email || '',
    role: payload.role || 'obra',
    obraPadrao: payload.obraPadrao || null,
    ativo: payload.ativo !== false,
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  };
  await db.collection('usuarios').doc(uid).set(profile, { merge: true });
  return profile;
};

exports.provisionUser = functions.https.onRequest(async (req, res) => {
  try {
    if (allowCors(req, res)) return;
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Método não permitido' });
    }

    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.replace('Bearer ', '') : null;
    await assertDirector(token);

    const {
      action = 'upsert',
      uid,
      email,
      password,
      nome,
      role = 'obra',
      obraPadrao = null,
      ativo = true
    } = req.body || {};

    if (!uid) {
      return res.status(400).json({ error: 'UID obrigatório' });
    }

    if (action === 'upsert') {
      let userRecord;
      try {
        userRecord = await admin.auth().getUser(uid);
        await admin.auth().updateUser(uid, {
          email: email || userRecord.email,
          displayName: nome || userRecord.displayName,
          password: password || undefined,
          disabled: ativo === false
        });
      } catch (err) {
        // se não existir, cria
        userRecord = await admin.auth().createUser({
          uid,
          email,
          displayName: nome,
          password: password || Math.random().toString(36).slice(2, 10),
          disabled: ativo === false
        });
      }
      await admin.auth().setCustomUserClaims(uid, { role });
      const profile = await writeProfile(uid, { nome, email, role, obraPadrao, ativo });
      return res.json({ ok: true, uid: userRecord.uid, profile });
    }

    if (action === 'disable') {
      await admin.auth().updateUser(uid, { disabled: true });
      await writeProfile(uid, { ativo: false, role, nome, email, obraPadrao });
      return res.json({ ok: true, uid, disabled: true });
    }

    if (action === 'delete') {
      try { await admin.auth().deleteUser(uid); } catch (err) { /* ignore if not exists */ }
      await db.collection('usuarios').doc(uid).delete();
      return res.json({ ok: true, uid, deleted: true });
    }

    return res.status(400).json({ error: 'Ação inválida' });
  } catch (err) {
    const code = err.message === 'UNAUTHENTICATED' ? 401 : err.message === 'FORBIDDEN' ? 403 : 500;
    console.error('provisionUser error', err);
    return res.status(code).json({ error: err.message || 'Erro interno' });
  }
});
