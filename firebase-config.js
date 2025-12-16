// firebase-config.js

// 1. 貼上你剛剛複製的設定內容
const firebaseConfig = {
  apiKey: "AIzaSyD-apVIyVlEJIjCXgLfwt2DQIED1agwLik",
  authDomain: "running-log-v1.firebaseapp.com",
  projectId: "running-log-v1",
  storageBucket: "running-log-v1.firebasestorage.app",
  messagingSenderId: "130647485684",
  appId: "1:130647485684:web:89ff9b68aeaf044eb802a1",
  measurementId: "G-YXDJWRFZNN"
};

// 2. 初始化 Firebase
// (注意：因為我們是在 HTML 引入 SDK，這裡直接用全域變數 firebase 即可)
firebase.initializeApp(firebaseConfig);

// 3. 建立並匯出常用的變數
// 這樣在其他 HTML 裡，我們就可以直接使用 db, auth, analytics 這三個字
const db = firebase.firestore();
const auth = firebase.auth();
const analytics = firebase.analytics();

console.log("🔥 Firebase 設定檔已載入，連線成功！");
