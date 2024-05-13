<template>
  <div class="flex justify-center items-center">
    <div
      class="flex flex-col justify-between md:gap-5 bg-cover w-full md:border md:border-transparent md:rounded-lg"
      :class="flexDirectionReverse ? 'md:flex-row-reverse' : 'md:flex-row'"
    >
      <!-- First Column with Image -->
      <div
        class="md:w-1/2 flex justify-center"
        :class="flexDirectionReverse ? 'md:justify-end' : 'md:justify-start'"
      >
        <img :src="imageSrc" alt="Card image" class="h-72 md:h-96" />
      </div>

      <!-- Second Column with Paragraph -->
      <div
        class="md:w-1/2 md:h-96 flex flex-col justify-center items-center gap-5 md:items-start py-3 md:py-8"
      >
        <GenericH2Title
          class="text-center md:text-start"
          :title="title"
        />
        <GenericParagraph
          :paragraphText="paragraphText"
          paragraphClass="text-center md:text-start py-2"
        />
        <GenericOutlineRedirectButton
          v-if="route"
          :route="route"
          :button-label="buttonLabel"
          button-class="justify-center md:justify-start"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  flexDirectionReverse: {
    type: Boolean,
    default: false,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "Wellcome",
  },
  paragraphText: {
    type: String,
    default: "Paragraph text comes here",
  },
  buttonLabel: {
    type: String,
    default: "View More",
  },
  route: { type: String, default: "" },
});
</script>
