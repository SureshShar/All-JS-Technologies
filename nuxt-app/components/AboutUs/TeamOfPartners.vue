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
const title = "A Team Of Partners";
const imageSrc = "/images/aboutUs/img3.webp";
const paragraph =
  "Technological advancements have been making inroads into the development and testing phases of various new drugs in India, disrupting the old processes to create new opportunities and a revised business model, resulting in a gradual shift in the industry. The importance of finding reliable talent who can focus on product innovation, in the long run, is therefore critical for our client’s success. To this end, we offer a wide range of executive and managerial search solutions that are both time-bound and high quality.";
</script>
