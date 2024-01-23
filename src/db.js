import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDtuWcAYzsIJB_-wG_EyUbSjeVH8s3jhhM",
  authDomain: "contact-book-9a1a1.firebaseapp.com",
  databaseURL: "https://contact-book-9a1a1.firebaseio.com",
  projectId: "contact-book-9a1a1",
  storageBucket: "contact-book-9a1a1.appspot.com",
  messagingSenderId: "636175664801",
  appId: "1:636175664801:web:f70e740ba10c26283bd2e0"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();