<template>
  <picture>
    <!-- Desktop medium screen image -->
    <source media="(min-width: 768px)" :srcset="imgSrcDesktop" />

    <!-- Mobile screen image -->
    <source media="(max-width: 768px)" :srcset="imgSrcMobile" />

    <!-- Fallback image for browsers that do not support <picture> tag -->
    <img :src="defaultImgSrc" alt="default image" :class="imgClass" />
  </picture>
</template>

<script setup>
const props = defineProps({
  imgSrcDesktop: {
    type: String,
    require: true,
  },
  imgSrcMobile: {
    type: String,
    require: true,
  },
  defaultImgSrc: {
    type: String,
    require: true,
  },
  imgClass: {
    type: String,
    default: "",
  },
});
</script>
