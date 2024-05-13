<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
      <GenericReversibleImageCard
        :image-src="imageSrc"
        :flex-direction-reverse="false"
        :title="title"
        :paragraphText="paragraph"
        :route="route"
        :button-label="navigationText"
      />
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const title = "Talent";
const imageSrc = "/images/servicesPage/talent.webp";
const route = "/services/talent";
const navigationText = "Learn more";
const paragraph =
  "Talent management isn’t just a human resources buzzword that you’ll hear from time to time. Additionally, the company is dedicated to attracting and retaining the best and brightest employees in the industry. Even though talent management is an important part of its business strategy, it is also one of the most difficult to implement...";
</script>
