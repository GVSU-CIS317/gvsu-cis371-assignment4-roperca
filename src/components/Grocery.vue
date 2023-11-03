<template>
    <div>
      <h1>Grocery</h1>
      <div class="items-container">
        <StoreItem v-for="item in grocery" :key="item.id" :item="item" />
      </div>
    </div>
  </template>
  
  <script>
  import StoreItem from './StoreItem.vue';
  import { onMounted, ref } from 'vue';
  import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
  
  export default {
    components: {
      StoreItem
    },
    setup() {
      const grocery = ref([]);
      const db = getFirestore();
  
      onMounted(async () => {
        const q = query(collection(db, 'items'), where('category', '==', 'Grocery'));
        const querySnapshot = await getDocs(q);
        grocery.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      });
  
      return {
        grocery
      };
    }
  };
  </script>