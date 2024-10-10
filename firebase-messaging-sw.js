// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging.js');

// Initialize Firebase app
const firebaseConfig = {
    apiKey: "AIzaSyBe1nnzEVZdI0aovRXQ78gWyfdKKsXHRI4",
    authDomain: "mysente-3ae15.firebaseapp.com",
    projectId: "mysente-3ae15",
    storageBucket: "mysente-3ae15.appspot.com",
    messagingSenderId: "462534406115",
    appId: "1:462534406115:web:0294ae9d0aa9e65213bad6",
    measurementId: "G-BGM1Y5PFJE"
};
firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging object
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('Received background message: ', payload);

    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png' // Adjust icon path
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
