<template>
  <h4 class="h4Heading text-center md:text-start py-3">
    {{ title }}
  </h4>

  <div class="flex flex-col">
    <p class="paragraph text-center md:text-start mb-2" v-html="paragraph1"></p>
    <p v-if="!!paragraph2" class="paragraph text-center md:text-start" v-html="paragraph2"></p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  paragraph1: {
    type: String,
    default: "",
  },
  paragraph2: {
    type: String,
    default: "",
  },
});
</script>
