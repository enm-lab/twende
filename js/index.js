/* Firebase */
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
firebase.initializeApp({
  "projectId": "twende-14e94",
  "appId": "1:559947871060:web:1409da04d918d319654ec1",
  "databaseURL": "https://twende-14e94.firebaseio.com",
  "storageBucket": "twende-14e94.appspot.com",
  "apiKey": "AIzaSyDszI1axB_uNhJu1QPepDz6QLezrqNZB6A",
  "authDomain": "twende-14e94.firebaseapp.com",
  "messagingSenderId": "559947871060"
});

var ref = new Firebase('https://tutorialsfirebase.firebaseio.com');

var amandaAgeRef = ref.child("users").child("-KGb1Ls-gEErWbAMMnZC").child('age');

amandaAgeRef.transaction(function(currentAge) {
   return currentAge + 1;
});

var usersKey = usersRef.key();
console.log(usersKey);