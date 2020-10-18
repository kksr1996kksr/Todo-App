  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyActcudWmz0N6zOcKVwd9QGFTJaiYHcUrA",
    authDomain: "todo-app-cp-4c04d.firebaseapp.com",
    databaseURL: "https://todo-app-cp-4c04d.firebaseio.com",
    projectId: "todo-app-cp-4c04d",
    storageBucket: "todo-app-cp-4c04d.appspot.com",
    messagingSenderId: "564459439434",
    appId: "1:564459439434:web:a024fb0ccaada26919adb3",
    measurementId: "G-DQB24SF2HH"
  });

  const db = firebaseApp.firestore();

  export default db;
