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
    <div class="md:text-left text-center">
      <GenericParagraph :paragraphText="paragraph" />
    </div>
  </div>
  </WrappersSectionWrapper>
</template>

<script setup>
const title = "Our Vision";
const paragraph =
  "We are building a new kind of consulting firm from the ground up.";
</script>
