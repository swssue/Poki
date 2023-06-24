importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCM06te35Tjgkuur7cgf04Snqzy5WUnu6s",
  authDomain: "poki-c90ad.firebaseapp.com",
  projectId: "poki-c90ad",
  storageBucket: "poki-c90ad.appspot.com",
  messagingSenderId: "313209790307",
  appId: "1:313209790307:web:23aa00b8b71edac4aa3d56",
  measurementId: "G-J2QB8LKF0P"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js");

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("../firebase-messaging-sw.js")
//     .then(function (registration) {
//       console.log("Registration successful, scope is:", registration.scope);
//     })
//     .catch(function (err) {
//       console.log("Service worker registration failed, error:", err);
//     });
// }

// firebase.initializeApp({
//   messagingSenderId: "815592199870",
// });

// const initMessaging = firebase.messaging();
