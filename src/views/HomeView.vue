<script setup>
import MyAvatar from '@/components/MyAvatar.vue'
import { getAvatars } from '@/api/api'
import { ref, onMounted } from 'vue'

// 头像列表
const avatars = ref('')

onMounted(async () => {
  let res = await getAvatars(0, 24)
  if (res['status'] == 200) {
    avatars.value = res['data']
  }
})
</script>

<template>
  <!-- 主体内容 -->
  <div class="mx-auto max-w-3xl py-32">
    <div class="hidden sm:mb-8 sm:flex sm:justify-center">
      <div
        class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
      >
        {{ $t('Home.subtitle') }}
        <a href="#" class="font-semibold text-indigo-600"
          ><span class="absolute inset-0" aria-hidden="true" />{{ $t('Home.more') }}
          <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    </div>
    <div class="text-center">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        {{ $t('Home.title') }}
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        {{ $t('Home.desc') }}
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#"
          class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >{{ $t('Home.btn_started') }}</a
        >
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
          >{{ $t('Home.more') }} <span aria-hidden="true">→</span></a
        >
      </div>
    </div>
  </div>
  <!-- 图片列表 -->
  <div class="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 gap-4 my-10 justify-items-center">
    <template v-for="item in avatars">
      <my-avatar :qnkey="item.key"></my-avatar>
    </template>
  </div>
</template>
