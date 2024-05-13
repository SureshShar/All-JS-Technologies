<template>
  <div
    class="sectionWrapper paddingY flex flex-col items-center justify-center md:justify-between md:items-start"
  >
    <h2 class="h2Heading text-center md:text-start">
      Core Competencies
    </h2>
    <GenericListRenderer
      :itemsList="listItems"
      imgSrc="/icons/circleCheckIcon.svg"
      class="py-3 grid grid-cols-1 md:grid-cols-2"
    />
  </div>
</template>

<script setup>
const listItems = [
  " Direct-Hire Placements",
  "Recruitment Process Outsourcing (RPO)",
  "Contingent Staffing",
  "Payroll Services",
  "Statement of Work (SOW)",
];
</script>
