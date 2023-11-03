import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import { initializeApp } from "firebase/app"

createApp(App).mount('#app')
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYbTxp5BZQ3P44bOIxZlCtGqS-N-gHryU",
    authDomain: "web-design-hw4.firebaseapp.com",
    projectId: "web-design-hw4",
    storageBucket: "web-design-hw4.appspot.com",
    messagingSenderId: "126286904073",
    appId: "1:126286904073:web:ecad8b490dc1c9181b71d8",
    measurementId: "G-7QM752G5Z2"
  };
  initializeApp(firebaseConfig);
  createApp(App).use(router).mount("#app");