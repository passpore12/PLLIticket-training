// firebase.js（compat 非模組寫法）
const firebaseConfig = {
  apiKey: "AIzaSyCkFJqLLJRt8PBL7001ZxoLtIYtDoLFPfw",
  authDomain: "plli-tickettraining.firebaseapp.com",
  projectId: "plli-tickettraining",
  storageBucket: "plli-tickettraining.appspot.com",
  messagingSenderId: "954271429129",
  appId: "1:954271429129:web:df6ca28e3437d3d7853ed8"
};

firebase.initializeApp(firebaseConfig);
db = firebase.firestore(); // ✅ 設為全域變數
