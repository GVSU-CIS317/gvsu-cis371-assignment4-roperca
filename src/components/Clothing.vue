<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import StoreItem from './StoreItem.vue';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

interface ClothingItem {
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
    const clothing = ref<ClothingItem[]>([]);
    const db = getFirestore();

    onMounted(async () => {
      const q = query(collection(db, 'items'), where('category', '==', 'Clothing'));
      const querySnapshot = await getDocs(q);
      clothing.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as ClothingItem[];
    });

    return {
      clothing
    };
  }
});
</script>
  