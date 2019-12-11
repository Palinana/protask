import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCNPRuLEkgNYQBpQhP-PsVt-tnXuUlpbDo",
    authDomain: "pro-task-b01f6.firebaseapp.com",
    databaseURL: "https://pro-task-b01f6.firebaseio.com",
    projectId: "pro-task-b01f6",
    storageBucket: "pro-task-b01f6.appspot.com",
    messagingSenderId: "291902377806",
    appId: "1:291902377806:web:d0796e6303d1c45a51181f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;