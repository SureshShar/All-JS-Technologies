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
const title = "Recruitment Process Outsourcing";
const imageSrc = "/images/servicesPage/workforce/outSourcing.webp";
const paragraph =
  "Because of the need to access talent in a sustainable, well-regulated manner, recruitment outsourcing services emerged as an industry. As an alternative to traditional hiring methods, this type of recruitment assistance uses available talent databases and innovative technologies to select the most suitable candidates based on the different preferences and needs of the employers involved in the hiring process.";
</script>
