import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOmd9JM9oBIlsWPfaiInuCaOtjDirqfew",
  authDomain: "react-native-images-c37e0.firebaseapp.com",
  projectId: "react-native-images-c37e0",
  storageBucket: "react-native-images-c37e0.appspot.com",
  messagingSenderId: "535865529633",
  appId: "1:535865529633:web:0f740be97cb132c94b1a60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
