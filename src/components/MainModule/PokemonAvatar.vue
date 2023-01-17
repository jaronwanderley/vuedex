<script setup lang="ts">
defineProps({
  id: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
    default: '',
  }
})
</script>

<template>
  <img 
    :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`" 
    :alt="`image of ${name}`" 
  />
</template>