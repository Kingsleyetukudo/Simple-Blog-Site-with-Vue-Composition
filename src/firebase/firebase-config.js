import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBF62ptZlUXRXcjxJ_m755xQtbFGYj9mm4',
  authDomain: 'simple-blog-site-66ba0.firebaseapp.com',
  projectId: 'simple-blog-site-66ba0',
  storageBucket: 'simple-blog-site-66ba0.appspot.com',
  messagingSenderId: '891355423274',
  appId: '1:891355423274:web:677befaeaf0d3e8f331953',
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
