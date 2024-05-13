<template>
  <div class="w-full" :class="cardCss">
    <div class="flex flex-col gap-2 ">
      <!-- First row with image -->
      <div class="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-2 ">
        <img :src="imgSrc" :alt="title" class="w-7 h-7" />
        <GenericH3Title :title="title" />
      </div>
      <!-- Second row with paragraph -->
      <GenericParagraph class="text-center md:text-start" :paragraphText="description" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  cardCss: {
    type: String,
    default: "",
  },
  imgSrc: {
    type: String,
    default: "",
  },
});
</script>
