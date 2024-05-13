<template>
  <div
    class="sectionWrapper paddingY flex flex-col items-center justify-center md:justify-between md:items-start"
  >
    <h2 class="h2Heading text-center md:text-start">What Sets VIR Apart</h2>
    <GenericListRenderer
      :itemsList="listItems"
      imgSrc="/icons/circleCheckIcon.svg"
      class="py-3 grid grid-cols-1 md:grid-cols-2"
    />
  </div>
</template>

<script setup>
const listItems = [
  "Comprehensive Industry Knowledge: IT, Engineering, Healthcare, and Allied Health industries",
  "Ethical and Regulatory Compliance Standards",
  "Ethical and Regulatory Compliance Standards",
  "Diversity and Inclusion Focus",
  "Effective Talent Acquisition Strategies",
  "Continuous Improvement Mindset",
  "Rigorous Screening Processes",
  "Client-Centric Approach",
  "Clear Communication and Collaborative Team Efforts",
];
</script>
