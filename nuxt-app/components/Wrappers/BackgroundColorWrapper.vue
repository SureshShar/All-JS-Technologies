<template>
  <!-- banner -->
  <div :class="[bannerClass, 'w-full py-8']">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  bannerClass: {
    type: String,
    default: "bg-blue-periwinkle",
  },
});
</script>
