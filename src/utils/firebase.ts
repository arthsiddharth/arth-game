// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import functions from 'firebase-functions';
import admin from 'firebase-admin';

// The Firebase Admin SDK to access Firestore.

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

	apiKey: "AIzaSyCpPA7IE1f0fpdeWD5VtmbjL42y4Wi3Mcs",

	authDomain: "arth-game-d3db9.firebaseapp.com",

	projectId: "arth-game-d3db9",

	storageBucket: "arth-game-d3db9.appspot.com",

	messagingSenderId: "971190416335",

	appId: "1:971190416335:web:40cd56c9465ca018bd58ba"

};


// Initialize Firebase

admin.initializeApp();
const app = initializeApp(firebaseConfig);