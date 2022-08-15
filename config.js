import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDWcOMRtLAIEgj-u_4n_UOt_3g8BYlbsCI",
    authDomain: "biek-6a942.firebaseapp.com",
    projectId: "biek-6a942",
    storageBucket: "biek-6a942.appspot.com",
    messagingSenderId: "182002777243",
    appId: "1:182002777243:web:241aafd8368f6552d21a3e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
