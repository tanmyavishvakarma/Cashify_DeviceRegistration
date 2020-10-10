import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB9HKDIN7-x-FfNizDMtBupO2dJPrkEJpc",
    authDomain: "devices-178c9.firebaseapp.com",
    databaseURL: "https://devices-178c9.firebaseio.com",
    projectId: "devices-178c9",
    storageBucket: "devices-178c9.appspot.com",
    messagingSenderId: "855848584529",
    appId: "1:855848584529:web:419f80139072b81e96bf70",
    measurementId: "G-Y8CBTLCS53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export const database = firebase.database().ref('/devices')
