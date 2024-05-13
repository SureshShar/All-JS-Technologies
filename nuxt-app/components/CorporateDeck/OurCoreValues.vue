<template>
  <div
    class="sectionWrapper paddingY flex flex-col justify-center items-center"
  >
    <h2 class="h2Heading text-center mb-7">Our Core Values</h2>

    <div class="flex flex-col md:flex-row gap-10 md:gap-6 justify-between w-full mt-5">
      <div v-for="value in coreValues" :key="value.name" class="flex flex-col justify-center items-center gap-4">
        <img :src="value.imgSrc" alt="internet" class="w-44" />
        <h3 class="h3Heading">
          {{ value.name }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
const coreValues = [
  {
    name: "Value",
    imgSrc: "/icons/corporateDeck/value1.svg",
  },
  {
    name: "Intergrity",
    imgSrc: "/icons/corporateDeck/value2.svg",
  },
  {
    name: "Results",
    imgSrc: "/icons/corporateDeck/value3.svg",
  },
];
</script>
