<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  }
})
const emit = defineEmits(['update:modelValue'])

const toggle = () => emit('update:modelValue', !props.modelValue)
const close = () => emit('update:modelValue', false)
watchEffect(() => {
  if(props.modelValue) {
    setClass(document.body, 'overflow-hidden')
  } else {
    removeClass(document.body, 'overflow-hidden')
  }
})
</script>

<template>
  <Btn @click="toggle">
    <slot name="button"></slot>
  </Btn>
  <Transition
    enter-active-class="duration-300 ease-out"
    enter-from-class="transform opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="transform opacity-0"
  >
    <div 
      v-if="modelValue"
      class="fixed top-0 bottom-0 left-0 right-0 bg-gray-9/20 backdrop-blur-xl"
      @click="close"
    ></div>
  </Transition>
  <div 
    :class="{
      'translate-x-110%': !modelValue,
    }"
    class="bg-base fixed top-3 right-3 bottom-3 w-[calc(100%-24px)] max-w-80 rounded-xl p-4 shadow shadow-2xl transition duration-300 ease-out"
  >
    <div class="flex items-center">
      <h2 class="flex-1 font-bold text-lg ml-2">{{ title }}</h2>
      <Btn 
        size="sm"
        @click="close"
      >
        <div class="i-tabler-x"></div>
      </Btn>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

