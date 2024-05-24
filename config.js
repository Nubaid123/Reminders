import * as React from 'react';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCJyT5Ul_sxYL8mngk99RNnfPeUli25Nnk",
  authDomain: "reminder-c2a87.firebaseapp.com",
  databaseURL: "https://reminder-c2a87-default-rtdb.firebaseio.com",
  projectId: "reminder-c2a87",
  storageBucket: "reminder-c2a87.appspot.com",
  messagingSenderId: "647145314002",
  appId: "1:647145314002:web:b9ac58dafe86818023ff0b"
};

if (!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.database;