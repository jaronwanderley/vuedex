<script setup lang="ts">
const props = defineProps({
  id: {
    type: Number,
    required: true,
  }
})
</script>

<template>
  <div 
    @click="emit('click')"
    class="bg-none p-1 rounded-full cursor-pointer min-h-8 w-8 hover:bg-red/50 hover:color-white transition duration-300 ease-out pointer-events-auto z-1"
  >
    <svg 
      viewBox="0 0 24 24" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      class="min-w-6 min-h-6 stroke-current stroke-2 fill-none mt-.5"
    >
      <path 
        :class="{'fill-red': true}"
        d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
      >
      </path>
    </svg>
  </div>
</template>