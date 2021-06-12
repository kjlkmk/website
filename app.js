// InitiaLize Firebase
var config = {
    apiKey: "AIzaSyCdcy2XcmSM9j9eEYJxlUYHYJg6xXZX3dk",
    authDomain: "app-notification-28b89.firebaseapp.com",
    projectId: "app-notification-28b89",
    storageBucket: "app-notification-28b89.appspot.com",
    messagingSenderId: "768170390606",
    appId: "1:768170390606:web:bf280a47c1a3be3daaff1f",
    measurementId: "G-9T5QR70CTJ"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.requestPermission()
.then(function(){
    console.log('Have permission');
})
.catch(function(err){
    console.log('Error Occured.');
})

