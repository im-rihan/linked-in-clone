// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDorlTFOSQoFxkjPgRVszLMRlVWNxcafWU",
  authDomain: "linkedin-clone-1c1a6.firebaseapp.com",
  projectId: "linkedin-clone-1c1a6",
  storageBucket: "linkedin-clone-1c1a6.appspot.com",
  messagingSenderId: "881900584881",
  appId: "1:881900584881:web:a29f840b3f6d857010c790",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export const auth = firebase.auth();
export default db;
