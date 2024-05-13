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
const title = "A Firm Of The Future";
const imageSrc = "/images/aboutUs/img1.webp";
const paragraph =
  "Providing advice may be one of the oldest professions but the demands of today’s world require a very different kind of consultant. We are building a consulting firm that combines the unique spark of human ingenuity and the incredible potential of technology, in order to meet our clients’ rapidly evolving needs.";
</script>
