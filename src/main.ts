import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import './style.css';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  // Your Firebase config
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

// Function to initialize Firestore data
async function initializeFirestoreData() {
  const itemsCollection = collection(db, "items");
  const itemsSnapshot = await getDocs(itemsCollection);

  if (itemsSnapshot.empty) {
    // Array of items to initialize in Firestore
    const itemsToInitialize = [
      // Your items array
      {
        name: "Laptop",
        description: "High-end gaming laptop",
        price: 1200,
        rating: 4,
        stock: 5,
        image: "https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA",
        category: "Electronics",
      },
      {
        name: "Smartphone",
        description: "Latest model smartphone",
        price: 800,
        rating: 5,
        stock: 10,
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/sn8MOkAAAAASUVORK5CYII=",
        category: "Electronics",
      },
      // ... other electronics items ...
      {
        name: "T-shirt",
        description: "100% cotton t-shirt",
        price: 20,
        rating: 4,
        stock: 25,
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/sn8MOkAAAAASUVORK5CYII=",
        category: "Clothing",
      },
      // ... other clothing items ...
      {
        name: "Apple",
        description: "Fresh red apples",
        price: 0.5,
        rating: 4,
        stock: 100,
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/sn8MOkAAAAASUVORK5CYII=",
        category: "Groceries",
      },
      // ... other groceries items ...
    ];

    // Firestore is empty, populate it with the initial data
    for (const item of itemsToInitialize) {
      await addDoc(itemsCollection, item);
    }
    console.log('Firestore has been initialized with store items.');
  } else {
    console.log('Firestore already contains items, initialization skipped.');
  }
}

// Initialize the data
initializeFirestoreData();

// Create and mount the Vue application
createApp(App)
  .use(router)
  .mount('#app');