import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCtPcJWT7MxCjQgpb7PyZx2M2fUtIE2A5E",
  authDomain: "facebook-react-c1e89.firebaseapp.com",
  projectId: "facebook-react-c1e89",
  storageBucket: "facebook-react-c1e89.appspot.com",
  messagingSenderId: "69273529099",
  appId: "1:69273529099:web:12f4ae4aa6ac13c452100e",
  measurementId: "G-X2EVHS3CH8",
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const database = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
