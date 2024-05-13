<template>
  <div class="bg-transparent">
    <div class="md:pr-5 pt-6 md:pt-auto">
      <GenericH3Title
        v-if="title"
        class="justify-center md:justify-start py-2"
        :title="title"
      />

      <GenericParagraph
        v-if="topParagraphText"
        :paragraphText="topParagraphText"
        paragraphClass="text-center md:text-start py-2"
      />
      <img
        :src="imageSrc"
        :alt="title"
        class="w-full h-auto md:w-80 md:h-44 my-4"
      />

      <GenericParagraph
        :paragraphText="bottomParagraphText"
        paragraphClass="text-center md:text-start py-2"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  imageSrc: {
    type: String,
    required: true,
  },
  topParagraphText: {
    type: String,
    default: "",
  },
  bottomParagraphText: {
    type: String,
    default: "Paragraph text comes here",
  },
});
</script>
