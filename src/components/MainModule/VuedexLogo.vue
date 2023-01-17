<script setup lang="ts">
const props = defineProps({
  size: {
    type: Number,
    default: 200,
  }
})

const logobase = ref(null) as unknown as { value: HTMLElement }
const logo = ref(null) as unknown as { value: HTMLElement }

const animateHover = () => {
  animate(logobase.value, 400, {}, { transform: { translateZ: '70px' } })
  animate(logo.value, 400, {}, { transform: { translateZ: '50px' } })
}
const animateLeave = () => {
  animate(logobase.value, 400, {}, { transform: { translateZ: '0px', rotateY: '0deg', rotateX: '0deg' } })
  animate(logo.value, 400, {}, { transform: { translateZ: '0px' } })
}
const animateMouseMove = (event: MouseEvent | TouchEvent) => {
  const { posX, posY } = handlePosition(event as PositionEvent)

  if(event.target !== logobase.value) {
    return
  }

  const { x = 0, y = 0, width = 0, height = 0 } = logobase?.value?.getBoundingClientRect() || {}
  const rotateAmount = 45
  animate(
    logobase.value,
    300,
    {},
    {
      transform: {
        rotateY: `${rotateAmount * (((posX - x) / width) - 0.5) * 1}deg`,
        rotateX: `${rotateAmount * (((posY - y) / height) - 0.5) * -1}deg`,
        rotateZ: '0deg',
      },
    },
    easing.easeOutCubic,
  )
}
</script>

<template>
  <a
    href="https://github.com/jaronwanderley"
    target="_blank"
    class="inline-block perspective-400 margin-x-auto"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
    }"
  >
    <div
      ref="logobase"
      class="relative rounded-full preserve-3d"
      @mouseenter="animateHover"
      @mouseleave="animateLeave"
      @mousemove="animateMouseMove"
      @touchstart="animateHover"
      @touchend="animateLeave"
      @touchmove="animateMouseMove"
    >
      <img
        ref="pokeball"
        src="/pokeball.svg"
        class="absolute top-0 opacity-30 animate-[spin_5s_ease-in-out_infinite] pointer-events-none"
        alt="pokeball"
      >
      <img
        ref="shadow"
        src="/vuedex-shadow.svg"
        class="pointer-events-none"
        alt=""
      >
      <img
        ref="logo"
        src="/vuedex-logo.svg"
        class="absolute top-40% pointer-events-none"
        alt="Logo of the creator of this webpage"
      >
    </div>
  </a>
</template>
