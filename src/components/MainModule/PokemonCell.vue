<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    required: true
  } 
})
const emit = defineEmits(['click'])
const { id, name } = toRefs(props.data)

const backgroundColors = typeColors().backgroundColors
const mainColors = typeColors().badgeColors
const types = computed(() => props.data.types.map(({type}) => type.name))
</script>

<template>
  <div 
    class="relative p-[20px_16px_16px_16px] mt-13% pointer-events-none z-2"
  >
    <div 
      v-ripple
      class="back-cell absolute cursor-pointer top-0 bottom-0 left-0 right-0 bg-red rounded-xl pointer-events-auto overflow-hidden -z-1"
      :style="{
        backgroundColor: backgroundColors[types[0]] || '#a8a878',
        boxShadow: `0 0 20px -5px ${backgroundColors[types[0]] || '#a8a878'}`
      }"
      @click="emit('click')"
    ></div>
    <PokemonAvatar
      :id="id"
      :name="name" 
      class="absolute bottom-1 right-1 w-[clamp(50px,50%,160px)] translate-x-5"
    />
    <div
      class="text-left text-gray-6 font-black text-lg leading-3 pl-.2 mix-blend-color-burn tracking-wider"
    >
      {{ formatIndexNumber(id) }}
    </div>
    <div class="text-left font-bold text-2xl text-slate-9/80">{{ formatProperName(name) }}</div>
    <div class="flex gap-2 mt-1">
      <TypeBadge
        v-for="type in types"
        :key="type"
        :type="type"
      />
    </div>
  </div>
</template>

<style>
.back-cell span {
  background-color: v-bind(mainColors[types[0]]);
}
</style>