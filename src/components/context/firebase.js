import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey:"AIzaSyDSdiXT-pPD3sPCiGZp5zR4EjQnjzZ3fog",
  authDomain:"netflix-yt-4d3b4.firebaseapp.com",
  projectId: "netflix-yt-4d3b4",
  storageBucket: "netflix-yt-4d3b4.appspot.com",
  messagingSenderId: "552055416088",
  appId:"1:552055416088:web:b549c1fa35f6c7f044ea6d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app;
export { auth };
export const db = getFirestore(app)