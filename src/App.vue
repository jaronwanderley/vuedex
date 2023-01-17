<script setup lang="ts">
const root = document.querySelector(':root')
const isDark = useStorage('dark-mode', platform().isDark)
if(isDark.value) 
  setClass(root, 'dark')
</script>

<template>
  <BackgroundPattern />
  <RouterView />
  <NotificationArea />
</template>
