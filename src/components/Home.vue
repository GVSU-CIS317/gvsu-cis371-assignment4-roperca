<template>
    <div class="home">
      <!-- Home page content here -->
      <div class="grid">
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
  </template>
  
  <script lang="ts" setup>
  import StoreItem from './StoreItem.vue';
  import { ref } from 'vue';
  
  const items = ref([
    // ... your items array ...
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
  ]);
  </script>