// firebase.js（非模組語法，v9 compatibility）
const firebaseConfig = {
  apiKey: "AIzaSyCyBhpl_IBBLrcTY9ky48kKfhTem0QzSG8",
  authDomain: "plli-tickettraing.firebaseapp.com",
  projectId: "plli-tickettraing",
  storageBucket: "plli-tickettraing.firebasestorage.app",
  messagingSenderId: "191830693744",
  appId: "1:191830693744:web:84511cf3c1b30b172fe1b5",
  measurementId: "G-M41613HPD1"
};

// 初始化 Firebase（使用 compat 模式）
firebase.initializeApp(firebaseConfig);
db = firebase.firestore(); // ✅ 設為全域變數，讓其他檔案可使用
