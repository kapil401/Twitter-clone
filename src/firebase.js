import firebase from "firebase";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDQWD46jcEGw2lXhr8bCac7wj2piFVlV3c",
    authDomain: "twitter-clone-c2a33.firebaseapp.com",
    projectId: "twitter-clone-c2a33",
    storageBucket: "twitter-clone-c2a33.appspot.com",
    messagingSenderId: "337556758430",
    appId: "1:337556758430:web:1d1ed3d896a67597f6808f",
    measurementId: "G-DWZ19NJYZ4"
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

// const storage = firebase.storage();
export default db;