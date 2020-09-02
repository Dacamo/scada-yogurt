import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD7Er_v2wB1eG4wZFkgJ3ziWdOSx8W0Q0c",
  authDomain: "scada-yogurt.firebaseapp.com",
  databaseURL: "https://scada-yogurt.firebaseio.com",
  projectId: "scada-yogurt",
  storageBucket: "scada-yogurt.appspot.com",
  messagingSenderId: "131860087442",
  appId: "1:131860087442:web:5206e58657544e40529c4b",
  measurementId: "G-3Z4KWGE0E4"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
