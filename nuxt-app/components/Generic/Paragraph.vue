<template>
  <p class="font-normal text-base text-blue-midnight" :class="paragraphClass">
    {{ paragraphText }}
    <slot></slot>
  </p>
</template>

<script setup>
const props = defineProps({
  paragraphText: {
    type: String,
    default: "",
  },
  paragraphClass: {
    type: String,
    default: "",
  },
});
</script>
