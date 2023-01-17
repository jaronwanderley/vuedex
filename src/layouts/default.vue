<script setup lang="ts">
const root = document.querySelector(':root')

const isOpenSide = $ref(false)
const isDark = useStorage('dark-mode', platform().isDark)
const toggleDark = () => {
  isDark.value = !isDark.value
  if(isDark.value)
    setClass(root, 'dark')
  else
    removeClass(root, 'dark')
}
</script>

<template>
  <nav class="flex justify-between items-start sticky top-8 z-100">
    <Btn @click="toggleDark">
      <div>
        <div v-if="isDark" class="i-tabler-brightness-up"></div>
        <div v-else class="i-tabler-moon"></div>
      </div>
      <span class="hidden sm:block">Lights {{ isDark ? 'On': 'Off'}}</span>
    </Btn>
    <RightDrawer
      v-model="isOpenSide"
      title="Favorites"
    >
      <template #button>
        <div class="i-tabler-list-details"></div>  
        <span class="hidden sm:block">Favorites</span>
      </template>
    </RightDrawer>
  </nav>
  <div class="flex flex-col gap-8">
    <div class="flex justify-center">
      <VuedexLogo :size="240" />
    </div>
    <RouterView />
  </div>
</template>
