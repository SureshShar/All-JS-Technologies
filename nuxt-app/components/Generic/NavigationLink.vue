<template>
  <nuxt-link :to="route" class="flex items-center space-x-2 py-2">
    <span :class="headingClass">{{ headingText }}</span>
    <img src="/icons/AerrowIcon.svg" alt="Image" class="w-3 h-3" />
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  route: {
    type: String,
    required: true,
  },
  headingText: {
    type: String,
    required: true,
  },
  headingClass: {
    type: String,
    default: "",
  },
});
</script>
