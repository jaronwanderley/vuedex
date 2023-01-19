<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    required: true,
  }
})
const emit = defineEmits(['click'])
</script>

<template>
  <div class="flex gap-3 items-center">
    <PokemonAvatar :id="data.id" :name="data.name"/>
    <div class="flex-1">
      <h3 class="font-semibold text-xs opacity-70">{{ formatIndexNumber(data.id) }}</h3>
      <h2 class="font-bold text-base pb-.5">{{ formatProperName(data.name) }}</h2>
      <div class="flex gap-2">
        <TypeBadge
          v-for="type in data.types" 
          :key="type"
          :type="type"
        />
      </div>
    </div>
    <Btn 
      size="sm"
      @click="emit('click')"
      class="color-red hover:bg-red hover:color-white transition duration-300 ease-out"
    >
      <div class="i-tabler-trash"></div>
    </Btn>
  </div>
</template>