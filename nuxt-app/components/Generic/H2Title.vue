<template>
  <div
    class="md:text-4xl text-3xl archivo-black-regular"
  >
    <h2 :class="titleClass">{{ title }}</h2>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  titleClass: {
    type: String,
    default: '',
  },
});
</script>
