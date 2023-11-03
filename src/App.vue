<template>
  <div id="app" class="grid-container">
    <header class="header">
      <h1>coolstuff.com</h1>
    </header>
    <nav class="nav">
      <router-link to="/" class="nav-item">Home</router-link>
      <!-- Add more router-links for other categories here -->
    </nav>
    <main class="main-content">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>
    <footer class="footer">© 2023 My Online Store. All rights reserved.</footer>
  </div>
</template>

<script lang="ts" setup>
// The router is used in main.ts to set up the application and doesn't need to be imported here
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

