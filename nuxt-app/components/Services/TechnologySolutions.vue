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
const title = "Technology Solutions";
const imageSrc = "/images/servicesPage/technology.webp";
const route = "/services/technology-solutions";
const navigationText = "Learn more";
const paragraph =
  "Technology offerings Mobile Application Development Design, integration, and management services are all part of our full-service offering for application development. Suppose it is a consumer app or a transformative enterprise solution. In that case, the company manages the entire mobile app development process, from ideation and concept to delivery, and ongoing support, from conception to...";
</script>
