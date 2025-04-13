// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, signInWithPopup , signOut} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMhty27t_i1xJLaNF0Zq-OcRPFoKldPqY",
  authDomain: "login-26701.firebaseapp.com",
  projectId: "login-26701",
  storageBucket: "login-26701.firebasestorage.app",
  messagingSenderId: "1042781035032",
  appId: "1:1042781035032:web:152598e9e445adce0d016d",
  measurementId: "G-305MYE7FYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, facebookProvider, githubProvider, signInWithPopup , signOut};