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
  <div class="h-auto w-auto rounded-2xl overflow-hidden hover:drop-shadow-2xl">
    <img
      class="w-full h-full object-cover transition ease-in-out 
        hover:scale-125 transform-gpu"
      :src="`${quUrl}/${qnkey}-avatar_thumb`"
      alt="Modern building architecture"
      loading="lazy"
    />
  </div>
</template>
