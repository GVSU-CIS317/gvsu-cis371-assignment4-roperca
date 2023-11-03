<template>
    <!-- TODO: Write your HTML structure for the store item here -->
    <div class="store-item">
      <div class="item-image-container">
        <img :src="image" :alt="name" class="item-image" />
      </div>
      <div class="item-info">
        <h2 class="item-name">{{ name }}</h2>
        <p class="item-description">{{ description }}</p>
      </div>
      <div class="item-details">
        <p class="item-price">$ {{ price }}</p>
        <p class="item-rating">Rating: {{ rating }}/5</p>
        <p class="item-stock">In Stock: {{ stock }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  // TODO: Import necessary Vue methods and write your TypeScript logic here
  // Using props to get around a wierd error: ${props}
  const props = defineProps({
    name: String,
    description: String,
    price: Number,
    rating: Number,
    stock: Number,
    image: String,
    category: String,
  });
  // Using props to get around a wierd error: ${props}
  console.log(props);
  </script>
  
  <style scoped>
  /* TODO: Insert your CSS code for styling the store item component here */
  .store-item {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    padding: 16px;
    background-color: #fff;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .item-image-container {
    width: 100%;
    padding-bottom: 100%; /* 1:1 Aspect Ratio */
    position: relative;
  }
  
  .item-image {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-width: 150px;  /* You can set a maximum width to control the image size */
    margin: auto;
    left: 0;
    right: 0;
  }
  
  .item-info {
    padding: 10px 0;
  }
  
  .item-details {
    padding: 10px 0;
  }
  
  .item-name,
  .item-description,
  .item-price,
  .item-rating,
  .item-stock {
    margin: 5px 0;
  }
  </style>
  