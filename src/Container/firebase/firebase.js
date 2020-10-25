import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAwUaf4DZtAuwg2xrphCswcOkBm10PWuqE",
  authDomain: "cyf-hot.firebaseapp.com",
  databaseURL: "#",
  projectId: "cyf-hot",
  storageBucket: "cyf-hot.appspot.com",
  messagingSenderId: "545084235714",
  appId: "#"
});

export const auth = app.auth(); // => Export variables for authentication
export default app;
