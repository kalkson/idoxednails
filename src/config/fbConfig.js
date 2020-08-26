import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyC-7d3mfViHV3c0C8Y5jzUxg5rNklAN1CY',
  authDomain: 'idoxed-nails.firebaseapp.com',
  databaseURL: 'https://idoxed-nails.firebaseio.com',
  projectId: 'idoxed-nails',
  storageBucket: 'idoxed-nails.appspot.com',
  messagingSenderId: '1064587691111',
  appId: '1:1064587691111:web:18dcd45dabed96528c00c2',
  measurementId: 'G-DJSWN78XQ1',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
