// Импортируйте нужные вам функции из нужных вам SDK
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: добавьте SDK для продуктов Firebase, которые вы хотите использовать
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyAbnVY9-hFfiyd5G-vu9xMrExLwXsmedFE",
  authDomain: "kino-graph.firebaseapp.com",
  projectId: "kino-graph",
  storageBucket: "kino-graph.appspot.com",
  messagingSenderId: "934769779517",
  appId: "1:934769779517:web:614abb60e851b0030e1b54",
  measurementId: "G-YLNSMB8FL1"
};

// Инициализировать Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
