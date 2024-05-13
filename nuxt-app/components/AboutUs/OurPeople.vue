<template>
  <WrappersSectionWrapper>
    <div class="flex md:justify-between items-center flex-col md:flex-row my-8">
      <!-- First column -->
      <div class="flex justify-center md:justify-start w-full md:w-2/5">
        <div class="text-center md:text-start mb-3 md:mb-0">
          <GenericH2Title :title="title" />
        </div>
      </div>

      <!-- Second column -->
      <div class="md:text-left text-center w-full md:w-6/12">
        <GenericParagraph :paragraphText="paragraph" />
      </div>
    </div>
  </WrappersSectionWrapper>
</template>

<script setup>
const title = "Our People";
const paragraph =
  "We believe that the quality of our advice is rooted in the diversity of our people, their commitment to your success, and their passion for overcoming your toughest challenges.";
</script>
