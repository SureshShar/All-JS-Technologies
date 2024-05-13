<template>
  <div
    class="sectionWrapper paddingY flex flex-col justify-center items-center"
  >
    <h2 class="h2Heading text-center mb-7">Differentiator</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4">
        <div
          v-for="(item, index) in listItems"
          :key="index"
          class="bg-white rounded-md p-1 h-full"
        >
          <div class="bg-blue-cerulean py-2 h-full">
            <h4 class="text-base font-semibold text-white text-center px-5 py-1">
              {{ item }}
            </h4>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
const listItems = [
  "In-depth understanding of the industries",
  "Team collaboration",
  "Talent acquisition strategies",
  "Compliance and regulations",
  "Thorough screening process",
  "Commitment to diversity and inclusion",
  "Strong industry connections",
  "Commitment to continuous improvement",
  "Effective communication",
  "Client-focused approach",
];
</script>
