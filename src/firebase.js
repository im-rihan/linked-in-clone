import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDorlTFOSQoFxkjPgRVszLMRlVWNxcafWU",
  authDomain: "linkedin-clone-1c1a6.firebaseapp.com",
  projectId: "linkedin-clone-1c1a6",
  storageBucket: "linkedin-clone-1c1a6.appspot.com",
  messagingSenderId: "881900584881",
  appId: "1:881900584881:web:a29f840b3f6d857010c790",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
// const auth = firebase.auth();

export { db };
