<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <h1 class="font-bold text-3xl">
    Page not found...
  </h1>
  <button 
    v-ripple
    class="bg-slate/20 py-3 px-5 m-x-auto"
    @click="router.push('/')"
  >
    Go Back
  </button>
</template>
