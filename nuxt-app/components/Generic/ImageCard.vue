<template>
  <div class="flex justify-center items-center">
    <div
      class="flex flex-col md:flex-row justify-between w-full"
    >
      <!-- First Column with Image -->
      <div class="flex justify-center md:justify-start items-center">
        <img :src="imageSrc" alt="Card image" class="md:h-96 md:w-96  lg:h-108 lg:w-112" />
      </div>
      <!-- Second Column with Paragraph -->
      <div
        class="md:w-1/2 p-8 flex flex-col justify-center items-center md:items-start"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
});
</script>
