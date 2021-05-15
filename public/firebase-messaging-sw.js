importScripts('https://www.gstatic.com/firebasejs/8.4.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.2/firebase-messaging.js');


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzrOkW0pCvlGYOWbPrwDEFLq_ISRDBBpI",
    authDomain: "quiz-web-app-ae7f7.firebaseapp.com",
    projectId: "quiz-web-app-ae7f7",
    storageBucket: "quiz-web-app-ae7f7.appspot.com",
    messagingSenderId: "787224245989",
    appId: "1:787224245989:web:408a72a3850fe0f43a060c",
    measurementId: "G-8MZFVG9H1P"
  };
 firebase.initializeApp(firebaseConfig);
//  we need firebase messaging function to retriew the instance of firebase messaging
 firebase.messaging();
