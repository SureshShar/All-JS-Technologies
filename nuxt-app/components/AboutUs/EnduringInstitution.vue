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
const title = "An Enduring Institution";
const imageSrc = "/images/aboutUs/img2.webp";
const paragraph =
  "We are building a firm that will endure for years to come. So while our thinking is constantly evolving, our values are constant and our actions are always grounded in a long-term outlook.";
</script>
