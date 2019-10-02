import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = require("./firebaseConfig");

firebase.initializeApp(firebaseConfig.firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

const rooms = db.collection("rooms");
const user_settings = db.collection("user_settings");

export { firebase, db, auth, currentUser, rooms, user_settings };
