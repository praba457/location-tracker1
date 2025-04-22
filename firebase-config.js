// Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDY_kmYpJs5EDexvf2nPSWrLaOYoiF8H10",
  authDomain: "trackablelinks-9b3df.firebaseapp.com",
  projectId: "trackablelinks-9b3df",
  storageBucket: "trackablelinks-9b3df.firebasestorage.app",
  messagingSenderId: "824869195870",
  appId: "1:824869195870:web:937e99332966ea3a0d64cf"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
