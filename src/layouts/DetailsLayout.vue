<script setup lang="ts">
const router = useRouter()

const isOpenSide = $ref(false)
</script>

<template>
  <nav class="flex justify-between items-start sticky top-8 z-100">
    <Btn @click="router.push('/')">
      <div class="i-tabler-arrow-left"></div>
      <span class="hidden sm:block">Back</span>
    </Btn>
    <VuedexLogo :size="120"/>
    <RightDrawer
      v-model="isOpenSide"
      title="Favorites"
    >
      <template #button>
        <div class="i-tabler-list-details"></div>  
        <span class="hidden sm:block">Favorites</span>
      </template>
      <div>
      teste
      </div>
    </RightDrawer>
  </nav>
  <RouterView />
</template>
