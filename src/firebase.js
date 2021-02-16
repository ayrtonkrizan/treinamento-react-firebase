
import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA7bZwc6PzdM3fkVsmrtIpr_UGUCuVj-to",
  databaseURL: "https://treinamento-63a80.firebaseio.com",
  authDomain: "treinamento-63a80.firebaseapp.com",
  projectId: "treinamento-63a80",
  storageBucket: "treinamento-63a80.appspot.com",
  messagingSenderId: "1019039945525",
  appId: "1:1019039945525:web:af7278164582b3a717727c"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {
    db,
    firebase
}

