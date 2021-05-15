import firebase from 'firebase'


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

const messaging=firebase.messaging();

export const getNotification=() =>{
    Notification.requestPermission().then((permission) =>{
      console.log(permission);
      if(permission === "granted"){
        messaging.getToken().then((currentToken) => {
            if (currentToken) {
          console.log("Token",currentToken);
            } else {
              // Show permission request.
              console.log('No registration token available. Request permission to generate one.');
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
          
          });
      }
    }).catch((err)=>{
        console.log("Error of getting permission", err);

    })
}
