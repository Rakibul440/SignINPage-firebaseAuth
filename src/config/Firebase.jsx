// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth ,GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMIe_8OeP8I_Wjn28xZzllt0Wjzt17fmo",
  authDomain: "fir-course-4069c.firebaseapp.com",
  projectId: "fir-course-4069c",
  storageBucket: "fir-course-4069c.appspot.com",
  messagingSenderId: "41790282518",
  appId: "1:41790282518:web:0b173ff078fb7192e08e37",
  measurementId: "G-VCM5HW14B2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();