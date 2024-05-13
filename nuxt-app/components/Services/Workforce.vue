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
const title = "Workforce";
const imageSrc = "/images/servicesPage/workforce.webp";
const route = "/services/workforce/";
const navigationText = "Learn more";
const paragraph =
  "Human resource management (HRM) concentrates on a person’s ability to grow their skills and develop the tools they need to succeed in the business world. As a result of this, both employers and employees benefit from workforce development.  Contingent Workforce Management Manage these risks and seize the opportunity requires an enterprise-wide approach based on broad collaboration ...";
</script>
