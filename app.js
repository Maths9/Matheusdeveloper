// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWVKEcSVlobAHqN5ilEKdLCu-7_wAqZWs",
  authDomain: "landingpage-a4808.firebaseapp.com",
  projectId: "landingpage-a4808",
  storageBucket: "landingpage-a4808.appspot.com",
  messagingSenderId: "1037689818497",
  appId: "1:1037689818497:web:b04b9b691a91a8f865ec80",
  measurementId: "G-62V9HQ02Y6"
};

  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const menu = document.querySelector("#menu-icon");
const navBar = document.querySelector(".navbar");


menu.onclick = () => {
  navBar.classList.toggle("active");
};

window.onscroll = () => {
  navBar.classList.remove("active");
};

// Dark Mode
const darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

// Scroll Reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 1000,
  reset: true,
});

sr.reveal(
  `.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`,
  {
    interval: 100,
  }
);
