<template>
  <div class="bg-blue-cerulean my-8">
    <div
      class="sectionWrapper paddingY flex flex-col-reverse md:flex-row items-center justify-center md:justify-between"
    >
      <p class="text-center md:text-start md:w-1/2 py-2 font-semibold text-white">
        {{ paragraph }}
      </p>
      <h2 class="h2Heading text-white text-center md:text-start">{{ title }}</h2>
    </div>
  </div>
</template>

<script setup>
const title = "Capability Statement";
const paragraph =
  "IT, Healthcare, Allied Health, And Engineering Staffing Solutions";
</script>
