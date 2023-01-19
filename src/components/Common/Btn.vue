<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: 'md',
  }
})
</script>

<template>
  <button
    v-ripple
    :class="{
      'p-3 sm:py-3 sm:px-5 h-13 min-w-13': size === 'md',
      'p-2 sm:py-2 sm:px-2 h-9 min-w-9': size === 'sm',
    }"
    class="bg-base rounded-full flex justify-center sm:justify-start gap-2 items-center"
  >
    <slot></slot>
  </button>
</template>