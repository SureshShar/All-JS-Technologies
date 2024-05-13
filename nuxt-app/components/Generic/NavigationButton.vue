<template>
  <NuxtLink
    :to="route"
    :class="[headingClass, 'text-start px-3 py-2 border rounded-lg shadow-md hover:drop-shadow-2xl']"
  >
    {{ headingText }}
  </NuxtLink>
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
    default: "bg-transparent text-base md:text-lg",
  },
});
</script>
