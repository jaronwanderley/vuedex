<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    required: true,
  }
})

const colors = typeColors().badgeColors
</script>

<template>
  <div 
    class="text-white p-[3px_8px_4px_8px] tracking-wide rounded-lg text-sm"
    :style="{backgroundColor: colors[type] || '#a8a878'}"
  >
    {{ type }}
  </div>
</template>