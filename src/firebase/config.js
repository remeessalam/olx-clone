import firebase from 'firebase'

import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCd1d7jgiBPjpJxc1DtmlsylE9DL7oXXJc",
    authDomain: "fir-cdbfe.firebaseapp.com",
    projectId: "fir-cdbfe",
    storageBucket: "fir-cdbfe.appspot.com",
    messagingSenderId: "253319293702",
    appId: "1:253319293702:web:50f2b5e1908067b0894c87",
    measurementId: "G-DXDNBEG5FG"
  };



 export default firebase.initializeApp(firebaseConfig)