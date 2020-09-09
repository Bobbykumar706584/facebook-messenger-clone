import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyApOyIxXOGfZjNKBXqxvH3yfYoDQqRc7UQ",
    authDomain: "facebook-messenger-clone-6c2ec.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-6c2ec.firebaseio.com",
    projectId: "facebook-messenger-clone-6c2ec",
    storageBucket: "facebook-messenger-clone-6c2ec.appspot.com",
    messagingSenderId: "1058511351558",
    appId: "1:1058511351558:web:4e74d012bf8859ff6ef887",
    measurementId: "G-2W713CL7D4"
})

const db = firebaseApp.firestore();
export default db;