import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAOD71J0RWnNiPM9ly9GxqeUdzKfLfgYTA",
    authDomain: "artisans-774fd.firebaseapp.com",
    projectId: "artisans-774fd",
    storageBucket: "artisans-774fd.appspot.com",
    messagingSenderId: "93179578940",
    appId: "1:93179578940:web:b8cbf8431c9cd6ba241139",
    measurementId: "G-T6LZ472YEY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
