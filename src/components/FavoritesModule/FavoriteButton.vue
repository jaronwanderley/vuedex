<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    required: true,
  }
})
const { isOnList, toggle } = favoritePokemons
const isFavorite = computed(() => isOnList(props.data.id))
</script>

<template>
  <div 
    @click="toggle(data)"
    class="bg-white/20 p-1 rounded-full cursor-pointer min-h-8 w-8 hover:bg-red/50 hover:color-white transition duration-300 ease-out pointer-events-auto backdrop-blur z-1"
  >
    <svg 
      viewBox="0 0 24 24" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      class="min-w-4 min-h-4 stroke-current stroke-2 fill-none mt-.5"
    >
      <g v-if="isFavorite">
        <path class="fill-red stroke-none" d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
        <!-- <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path> -->
        <path d="M13 19l-1 1l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8 6"></path>
        <path d="M14 16h6"></path>
      </g>
      <g v-else>
        <path d="M13 19l-1 1l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.003 5.996"></path>
        <path d="M14 16h6"></path>
        <path d="M17 13v6"></path>
      </g>
    </svg>
  </div>
</template>