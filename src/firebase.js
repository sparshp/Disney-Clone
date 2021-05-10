import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCjLAEVtADxLe3wcPzogN7kgTydAqEg5eU",
    authDomain: "diseny-clone.firebaseapp.com",
    projectId: "diseny-clone",
    storageBucket: "diseny-clone.appspot.com",
    messagingSenderId: "738954569872",
    appId: "1:738954569872:web:f64638240f39bb2476d015",
    measurementId: "G-K2C9J7SBKT"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// google login popup window//
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
