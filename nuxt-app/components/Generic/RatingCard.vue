<template>
  <div
    v-for="(card, index) in cards"
    :key="index"
    class="max-w-96 bg-white border border-gray-100 rounded-lg shadow-md p-4 mb-5"
  >
    <div class="flex">
      <!-- First row with image -->
      <img :src="card.imageUrl" alt="Image" class="w-7 h-7" />

      <!-- Second row with title and paragraph -->
      <div class="pl-3 -pt-1 text-blue-midnight">
        <div class="flex justify-between gap-5">
          <div>
            <h4 class="text-md font-semibold">{{ card.name }}</h4>
            <GenericRatingStars class="mb-2" />
          </div>
          <span class="text-gray-500 text-xs mt-1">{{card.date}}</span>
        </div>
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
