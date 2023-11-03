<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import StoreItem from './StoreItem.vue';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

interface GroceryItem {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  image: string;
  category: string;
}

export default defineComponent({
  components: {
    StoreItem
  },
  setup() {
    const grocery = ref<GroceryItem[]>([]);
    const db = getFirestore();

    onMounted(async () => {
      const q = query(collection(db, 'items'), where('category', '==', 'Clothing'));
      const querySnapshot = await getDocs(q);
      grocery.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as GroceryItem[];
    });

    return {
      grocery
    };
  }
});
</script>