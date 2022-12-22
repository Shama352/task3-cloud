import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
const firebaseConfig = {
    apiKey: "AIzaSyApVRepiun4mTJ3ISWhDuA8cKZSSRfK-AE",
    authDomain: "my-application-4ee51.firebaseapp.com",
    databaseURL: "https://my-application-4ee51-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "my-application-4ee51",
    storageBucket: "my-application-4ee51.appspot.com",
    messagingSenderId: "474942626423",
    appId: "1:474942626423:web:b83678abc05c3f34278472"
};

firebase.initializeApp(firebaseConfig);
export const dataRef = firebase.database();
export default firebase;

