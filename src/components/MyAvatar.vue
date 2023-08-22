<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  qnkey: String
})
const quUrl = ref('')

// 初始化
onMounted(()=>{
  quUrl.value = import.meta.env.VITE_QN_URL
})

</script>

<template>
  <div>
    <img
      class="md:h-96 md:w-96 object-cover"
      :src="`${quUrl}/${qnkey}-avatar_thumb`"
      alt="Modern building architecture"
      loading="lazy"
    />
  </div>
</template>
