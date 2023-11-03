<template>
  <div id="app" class="grid-container">
    <header class="header">
      <h1>coolstuff.com</h1>
    </header>
    <nav class="nav">
      <a href="#" class="nav-item">Home</a>
    </nav>
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="shrink-explode">
          <!-- Single root element inside the transition -->
          <div>
            <!-- Check if Component is not null -->
            <component :is="Component" v-if="Component" />

            <!-- If no component is matched, show the fallback grid -->
            <div class="grid" v-else>
              <StoreItem
                v-for="(item, index) in items"
                :key="index"
                :name="item.name"
                :description="item.description"
                :price="item.price"
                :rating="item.rating"
                :stock="item.stock"
                :image="item.image"
                :category="item.category"
              />
            </div>
          </div>
        </transition>
      </router-view>
    </main>
    <footer class="footer">© 2023 My Online Store. All rights reserved.</footer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import StoreItem from "./components/StoreItem.vue";

// List of products in different categories
const items = ref([
  {
    name: "Laptop",
    description: "High-end gaming laptop",
    price: 1200,
    rating: 4,
    stock: 5,
    //a fake image
    image:
      "https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA",
    category: "Electronics",
  },
  // More Electronics
  {
    name: "Smartphone",
    description: "Latest model smartphone",
    price: 800,
    rating: 5,
    stock: 10,
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/sn8MOkAAAAASUVORK5CYII=",
    category: "Electronics",
  },
  // ... Add more electronics items ...

  // Clothing
  {
    name: "T-shirt",
    description: "100% cotton t-shirt",
    price: 20,
    rating: 4,
    stock: 25,
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/sn8MOkAAAAASUVORK5CYII=",
    category: "Clothing",
  },
  {
    name: "Jeans",
    description: "Slim fit jeans",
    price: 45,
    rating: 3,
    stock: 15,
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/sn8MOkAAAAASUVORK5CYII=",
    category: "Clothing",
  },
  // ... Add more clothing items ...

  // Groceries
  {
    name: "Apple",
    description: "Fresh red apples",
    price: 0.5,
    rating: 4,
    stock: 100,
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/sn8MOkAAAAASUVORK5CYII=",
    category: "Groceries",
  },
  {
    name: "Bread",
    description: "Whole grain bread",
    price: 2,
    rating: 4,
    stock: 20,
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/sn8MOkAAAAASUVORK5CYII=",
    category: "Groceries",
  },
  // ... Add more groceries items ...
]);
</script>

<style scoped>
/* TODO: Insert your CSS code to style the header, nav, main content, and footer */

.grid-container {
  display: grid;
  grid-template-rows: auto auto 1fr auto; /* 4 rows with specified heights */
  grid-template-columns: 1fr; /* Single column layout */
  min-height: 100vh; /* Full viewport height */
}

.header {
  /* Styles for the header (narrow and at the top) */
  grid-row: 1;
  grid-column: 1;
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}

.nav {
  /* Styles for the navigation (narrow and below the header) */
  grid-row: 2;
  grid-column: 1;
  background-color: #444;
  color: #fff;
  padding: 10px;
  text-align: center;
}

.main-content {
  /* Styles for the main content area (takes up most of the space) */
  grid-row: 3;
  grid-column: 1;
  background-color: #f0f0f0;
  padding: 20px;
  overflow: auto; /* Add scrollbars if content overflows */
}
.grid {
  /* Styles for the grid layout */
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Adjust number of columns as needed */
  gap: 20px; /* Adjust the gap between items */
}

.footer {
  /* Styles for the footer (small and at the bottom) */
  grid-row: 4;
  grid-column: 1;
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}

/* Transition styles */
.shrink-explode-enter-active,
.shrink-explode-leave-active { /* ... */ }
.shrink-explode-enter,
.shrink-explode-leave-to { /* ... */ }
</style>

