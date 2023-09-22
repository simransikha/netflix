
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDusFJCDCdTVGey9dvLqTlx4o4awOI2Spo",
  authDomain: "react-netflix-clone-f7496.firebaseapp.com",
  projectId: "react-netflix-clone-f7496",
  storageBucket: "react-netflix-clone-f7496.appspot.com",
  messagingSenderId: "890684093106",
  appId: "1:890684093106:web:d2d9237006860b42384fab",
  measurementId: "G-V37HKSEQZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app;
export {auth};