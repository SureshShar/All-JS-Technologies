<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
      <GenericReversibleImageCard
        :image-src="imageSrc"
        :flex-direction-reverse="false"
        :title="title"
        :paragraphText="paragraph"
      />
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const title = "Retail Services";
const imageSrc = "/images/servicesPage/industrySolutions/retail.webp";
const paragraph =
  "It appears that in the near future, Retailers will have a high demand for workforce. At VIR Consultants, we keep abreast of changes in the industry. An expert team of consultants who understand the operational structures and the specific needs of our clients is available to us at all hours of the day and night. To this end, we assist our clients in identifying, assessing, and recruiting highly qualified professionals with outstanding track records. We have extensive experience in a wide range of industries, from the highest to the lowest levels of management.";
</script>
