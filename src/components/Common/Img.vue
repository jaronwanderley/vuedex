<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: Number,
    default: 64,
  },
  height: {
    type: Number,
    default: 64,
  },
  errorImage: {
    type: String,
    default: '/pokemon-shadow.svg',
  }
})

const image = ref(null)

const onError = () => {
  image.value.src = props.errorImage
}
</script>

<template>
<img
  ref="image"
  :src="src" 
  :width="width" 
  :height="height" 
  @error="onError"
>
</template>