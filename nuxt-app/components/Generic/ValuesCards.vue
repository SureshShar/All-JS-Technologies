<template>
  <div
    v-for="(card, index) in cards"
    :key="index"
    class="bg-white border border-gray-100 rounded-lg shadow-md py-6 md:py-4 px-4 mb-5 w-full md:w-80"
  >
    <div class="flex">
      <!-- First row with image -->
      <img
        :src="`/icons/${card.imageIdentifier}.svg`"
        alt="Image"
        class="w-7 h-7"
      />

      <!-- Second row with title and paragraph -->
      <div class="pl-3">
        <GenericH3Title :title="card.title" />
        <GenericParagraph :paragraphText="card.description" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cards: {
    type: Array,
    default: () => [],
  },
});
</script>
