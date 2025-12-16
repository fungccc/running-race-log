// 
const firebaseConfig = {
  apiKey: "AIzaSyD-apVIyVlEJIjCXgLfwt2DQIED1agwLik",
  authDomain: "running-log-v1.firebaseapp.com",
  projectId: "running-log-v1",
  storageBucket: "running-log-v1.firebasestorage.app",
  messagingSenderId: "130647485684",
  appId: "1:130647485684:web:89ff9b68aeaf044eb802a1",
  measurementId: "G-YXDJWRFZNN"
};

// 初始化 Firebase
firebase.initializeApp(firebaseConfig);

// 匯出我們會用到的變數，讓其他 HTML 檔案直接使用
const db = firebase.firestore();
const auth = firebase.auth();
const analytics = firebase.analytics();

console.log("🔥 Firebase 設定檔載入成功");
