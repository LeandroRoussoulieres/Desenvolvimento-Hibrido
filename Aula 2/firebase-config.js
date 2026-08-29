// ============================================================
// MODELO de configuração do Firebase (valores fictícios)
// ============================================================
// Este é o arquivo que DEVE ser versionado no Git/GitHub.
// Copie-o para "firebase-config.js" e preencha com os dados reais
// do seu projeto, e então ignore o firebase-config.js real,
// como ensinado na Seção 2 da apresentação e no Exercício 7.
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXzURhp5OwIJSgpFjasH6VlA0oXGqsYQc",
  authDomain: "desenvolvimento-hibrido-1c16f.firebaseapp.com",
  projectId: "desenvolvimento-hibrido-1c16f",
  storageBucket: "desenvolvimento-hibrido-1c16f.firebasestorage.app",
  messagingSenderId: "438681930234",
  appId: "1:438681930234:web:a5132bd49dba918af77c43",
  measurementId: "G-RW4TQQKGK9"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const rtdb = getDatabase(app);
export const storage = getStorage(app);
