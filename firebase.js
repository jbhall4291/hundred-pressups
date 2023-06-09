import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjbFxE7d3AuTpGXr2YUZM3sxcmQHMTIoo",
  authDomain: "hundred-pressups.firebaseapp.com",
  projectId: "hundred-pressups",
  storageBucket: "hundred-pressups.appspot.com",
  messagingSenderId: "658608999168",
  appId: "1:658608999168:web:7ab71126be364fb542c1e5",
  measurementId: "G-QS95Z42SNH",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
