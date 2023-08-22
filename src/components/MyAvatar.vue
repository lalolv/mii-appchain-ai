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
  <a class="h-auto w-auto rounded-2xl overflow-hidden cursor-pointer hover:drop-shadow-2xl" 
    :href="`${quUrl}/${qnkey}`" target="_blank">
    <img
      class="w-full h-full object-cover transition ease-in-out 
        hover:scale-125 transform-gpu"
      :src="`${quUrl}/${qnkey}-avatar_thumb`"
      alt="Modern building architecture"
      loading="lazy"
    />
  </a>
</template>
