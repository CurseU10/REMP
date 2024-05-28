import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2KbC2nO89uCMOYDqSfRI0jEVild9o-c4",
  authDomain: "majorproject-bfb88.firebaseapp.com",
  projectId: "majorproject-bfb88",
  storageBucket: "majorproject-bfb88.appspot.com",
  messagingSenderId: "590562285933",
  appId: "1:590562285933:web:8a39cb1866d4874c09e264",
  measurementId: "G-EME5RVK9LR"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()