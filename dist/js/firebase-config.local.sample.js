// firebase-config.local.sample.js
// Copy this file to `firebase-config.local.js` (in the same folder)
// and fill the values. This file MUST NOT be committed to git.
// It will set `window.__FIREBASE_CONFIG__` so the app reads credentials
// at runtime without exposing them in source control.

window.__FIREBASE_CONFIG__ = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_AUTH_DOMAIN_HERE",
  projectId: "YOUR_PROJECT_ID_HERE",
  storageBucket: "YOUR_STORAGE_BUCKET_HERE",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE",
  appId: "YOUR_APP_ID_HERE"
};

// Usage:
// 1) Copy this file to `dist/js/firebase-config.local.js`
// 2) Fill the fields above with your Firebase project's credentials
// 3) Ensure `firebase-config.local.js` is ignored by git (.gitignore updated)
