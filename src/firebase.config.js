import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAeMtMqyaHU3APF0jgnZ5HCT8V0v3BPYzA",
  authDomain: "netflix-react-mock.firebaseapp.com",
  projectId: "netflix-react-mock",
  storageBucket: "netflix-react-mock.appspot.com",
  messagingSenderId: "96365999334",
  appId: "1:96365999334:web:8400843d10df5e9b4db727",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
