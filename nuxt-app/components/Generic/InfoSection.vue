<template>
  <div :class="containerClass">
    <!-- First column -->
    <div class="flex justify-center md:justify-start w-full md:w-2/5">
      <div class="text-center md:text-start mb-3 md:mb-0">
        <GenericH2Title v-if="title != ''" :title="title" />
        <div v-if="injectedTitle" v-html="injectedTitle"></div>
      </div>
    </div>

    <!-- Second column -->
    <div class="md:text-left text-center w-full md:w-3/5">
      <GenericParagraph :paragraphText="paragraph" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  injectedTitle: {
    type: String,
    default: "",
  },
  paragraph: {
    type: String,
    required: true,
  },
  containerClass:{
    type: String,
    default: "flex items-center flex-col md:flex-row my-8",
  }
});
</script>
