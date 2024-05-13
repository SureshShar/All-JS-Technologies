<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
    <li
      v-for="cardData in cardsData"
      :key="cardData.name"
      class="md:text-left text-center"
    >
      <div class="max-w-xs mx-auto overflow-hidden">
        <div class="p-4">
          <img
            class="w-10 h-10 mx-auto md:mx-0 mb-2"
            :src="cardData.imageSrc"
            :alt="cardData.name"
          />
          <GenericH3Title
            class="justify-center md:justify-start"
            :title="cardData.name"
          />
          <GenericParagraph
            :paragraphText="cardData.paragraph"
            paragraphClass="text-center md:text-start"
          />
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  cardsData: {
    type: Array,
    required: () => [],
  },
});
</script>
