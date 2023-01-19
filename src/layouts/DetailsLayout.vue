<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <nav class="flex justify-between items-start sticky top-8 z-100">
    <Btn @click="router.push('/')">
      <div class="i-tabler-arrow-left"></div>
      <span class="hidden sm:block">Back</span>
    </Btn>
    <VuedexLogo :size="120"/>
    <FavoriteList />
  </nav>
  <RouterView />
</template>
