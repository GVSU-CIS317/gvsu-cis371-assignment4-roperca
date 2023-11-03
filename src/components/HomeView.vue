<template>
    <div class="home">
      <h2>This is the main page. I got here via {{ byWayOf }}</h2>
      <p>{{ userInfo }}</p>
      <img :src="userPhotoURL" v-if="userPhotoURL.length > 0" width="64" />
      <button @click="outtahere">Logout</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import {
    getAuth,
    onAuthStateChanged,
    User,
    Auth,
    signOut,
  } from "firebase/auth";
  
  const route = useRoute();
  
  const byWayOf = route.params.byWayOf;
  const userPhotoURL = ref("");
  const userInfo = ref("");
  
  const auth: Auth | null = getAuth();
  onMounted(() => {
    onAuthStateChanged(auth, (user: User | null) => {
      console.log("Auth changed", user);
      if (user) {
        userPhotoURL.value = user.photoURL ?? "";
        userInfo.value = `${user.displayName ?? "No Name"}`;
      }
    });
  });
  
  const outtahere = () => {
    if (auth) signOut(auth);
    history.back();
  };
  </script>
  
  <style scoped>
  .home {
    max-width: 600px;
    margin: 2em auto;
    padding: 2em;
    border-radius: 8px;
    background-color: hsl(210, 60%, 98%);
    box-shadow: 0px 4px 6px hsl(210, 20%, 80%);
  }
  
  h2 {
    font-size: 1.5em;
    color: hsl(210, 40%, 30%);
    margin-bottom: 1.5em;
    border-bottom: 1px solid hsl(210, 20%, 85%);
    padding-bottom: 0.5em;
  }
  
  p {
    font-size: 1.1em;
    color: hsl(210, 20%, 40%);
    margin-bottom: 1.5em;
  }
  
  img {
    border-radius: 50%;
    box-shadow: 0px 2px 4px hsl(210, 20%, 80%);
    margin-right: 1em;
  }
  
  button {
    padding: 0.6em 1.2em;
    font-size: 0.9em;
    background-color: hsl(0, 80%, 60%);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: hsl(0, 80%, 50%);
  }
  </style>