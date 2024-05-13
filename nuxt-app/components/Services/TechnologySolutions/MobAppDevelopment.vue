<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
      <div class="flex flex-col items-center justify-center">
        <div class="mb-12 md:mb-36">
          <GenericH2Title class="text-center" title="TECHNOLOGY OFFERINGS" />
        </div>
      </div>
      <GenericReversibleImageCard
        :image-src="imageSrc"
        :flex-direction-reverse="true"
        :title="title"
        :paragraphText="paragraph"
      />
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const title = "Mobile Application Development";
const imageSrc = "/images/servicesPage/technologySolutions/mobile.webp";
const paragraph =
  "Design, integration, and management services are all part of our full-service offering for application development. Suppose it is a consumer app or a transformative enterprise solution. In that case, the company manages the entire mobile app development process, from ideation and concept to delivery, and ongoing support, from conception to delivery. Our extensive experience working with all major technologies will delight your users with expressive and feature-rich native iOS/Android, cross-platform, or Progressive Web Apps. While providing your users with an app that fits their operating system, you can get top-notch mobile applications that run on multiple platforms for a reasonable price. To reduce costs and time-to-market and reach more users without sacrificing quality, turn to this alternative solution.";
</script>
