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
const title = "It Consulting Services";
const imageSrc = "/images/servicesPage/consulting.webp";
const route = "/services/it-consulting-services";
const navigationText = "Learn more";
const paragraph =
  "IT Consulting Services Newark, DE IT Consulting Services can assist you in overcoming your technological challenges. With one of India’s best IT Staffing Company; you can create a future-ready team. Reduce your workforce administration costs and double the speed you can grow your staff. VIR Consultant is one of India’s fastest-growing staffing firms, offering permanent, temporary, and temp-to-hire solutions to businesses...";
</script>
