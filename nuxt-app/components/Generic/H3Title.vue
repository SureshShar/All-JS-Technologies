<template>
  <div class="text-ourpeople font-semibold text-blue-midnight">
    <h3 :class="titleClass">{{ title }}</h3>
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
    default: "",
  },
});
</script>
