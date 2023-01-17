<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
  }
})
const details = ref(null)
const summary = ref(null)
const content = ref(null)

const isOpen = $ref(false)

const onToggle = () => {
  const wrapper = details.value
  const summaryHeight = summary.value.offsetHeight
  const contentHeight = content.value.offsetHeight
  const start = !isOpen ? summaryHeight : summaryHeight + contentHeight
  const end = !isOpen ? summaryHeight + contentHeight : summaryHeight
  const duration = -(.999415 ** (contentHeight - 11800)) + 1220
  setStyle(wrapper, {
    overflow: 'hidden',
  })
  const animation = wrapper.animate({
    height: [`${start}px`, `${end}px`]
  }, {
    duration,
    easing: 'ease-in-out'
  })
  if (start < end) 
    isOpen = true
  animation.onfinish = () => {
    if (start > end) 
      isOpen = false
    wrapper.style.removeProperty('overflow')
  }
}
</script>

<template>
  <details
    ref="details"
    :open="isOpen"
    v-auto-animate
    class="bg-base text-left shadow shadow-xl inline-block w-full rounded-xl"
  >
    <summary 
      ref="summary"
      class="relative cursor-pointer font-bold px-4 py-3 list-none box-border rounded-xl"
      @click.prevent="onToggle"
    >
      <div>
        {{ title }}
      </div>
      <div class="icon i-tabler-chevron-right absolute top-3 right-3 w-6 h-6 text-blue"></div>
    </summary>
    <div 
      ref="content"
      class="content px-4 pt-2 pb-4"
    >
      <slot></slot>
    </div>
  </details>
</template>

<style scoped>
summary > .icon {
  transition: all .2s;
}
details[open] > summary > .icon {
    transform: rotate(90deg);
}
</style>