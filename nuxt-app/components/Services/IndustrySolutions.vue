<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
      <GenericReversibleImageCard
        :image-src="imageSrc"
        :flex-direction-reverse="true"
        :title="title"
        :paragraphText="paragraph"
        :route="route"
        :button-label="navigationText"
      />
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const title = "Industry Solutions";
const imageSrc = "/images/servicesPage/industry.webp";
const route = "/services/industry-solutions";
const navigationText = "Learn more";
const paragraph =
  "Industry Solutions Pharmaceutical & Healthcare Technological advancements have been making inroads into the development and testing phases of various new drugs in India, disrupting the old processes to create new opportunities and a revised business model, resulting in a gradual shift in the industry. The importance of finding reliable talent who can focus on product...";
</script>
