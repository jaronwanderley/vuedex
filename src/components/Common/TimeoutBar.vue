<script setup lang="ts">
const props = defineProps({
  timeout: {
    type: Number,
    default: Infinity,
  },
  type: {
    type: String,
    default: 'default',
  },
})

const bar = ref(null)

watchEffect(() => {
  if (bar.value === null)
    return
  if (props.timeout >= Infinity)
    return
  animate(bar.value, props.timeout * 1000,
    { transform: { scaleX: '100%' } },
    { transform: { scaleX: '0%' } })
})
</script>

<template>
  <div class="w-full h-1 rounded-lg bg-slate-5/20 overflow-hidden">
    <div
      ref="bar"
      :class="{
        'bg-blue': type === 'default',
        'bg-white/80': type === 'error',
      }"
      class="w-full h-full origin-left"
    />
  </div>
</template>
