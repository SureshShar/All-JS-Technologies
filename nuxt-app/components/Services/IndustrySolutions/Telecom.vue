<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
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
const title = "Telecom";
const imageSrc = "/images/servicesPage/industrySolutions/telecome.webp";
const paragraph =
  "One of our dedicated teams is focused on the Telecom sector and is responsible for providing customized solutions for a wide range of industries, including Telecom operators and OEM’s as well as providers of devices and handsets, etc. Our goal is to provide our clients with the best talent possible by utilizing our team of qualified Telecommunications experts who have worked in the industry. As a result of a strong network, the team has access to the best talent in the industry. Having a well-versed team also allows us to screen candidates at our end, which reduces the time it takes for companies to hire new employees.";
</script>
