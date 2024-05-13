<template>
  <div class="flex flex-col sectionWrapper paddingY">
    <div class="flex flex-col-reverse md:flex-row-reverse gap-5">
      <div class="md:w-1/2 flex flex-col justify-ceneter md:pt-20">
        <h2 class="h2Heading text-center md:text-start pb-3">Recruitment <br/> Source</h2>
        <h4
          v-for="(source, index) in sources"
          :key="index"
          class="h4Heading text-center md:text-start pb-3 md:w-96"
        >
          {{ source }}
        </h4>
      </div>

      <div class="md:w-1/2 flex justify-center">
        <img
          src="/images/corporateDeck/recruitmentSources.webp"
          alt="vision paragraph banner"
          class="w-96 pr-0"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const sources = [
  "Internal DatabaseSearch",
  "Voluntary Applicants",
  "Advertisements",
  "Employee Referrals",
];
</script>
