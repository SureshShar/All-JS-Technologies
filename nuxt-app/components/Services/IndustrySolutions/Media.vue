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
const title = "Media";
const imageSrc = "/images/servicesPage/industrySolutions/media.webp";
const paragraph =
  "It’s a fact that the digital revolution and the accompanying explosion of social media have fundamentally changed the way people consume content around the world, making the global audience more homogeneous. To stay one step ahead of the competition, companies are increasingly focusing on the quality of their employees. When it comes to identifying the right mix of skills needed to meet these challenges, VIR brings innovative solutions to the table. Because of our unique position, we can provide our clients with customized talent solutions that assist them in identifying talent.";
</script>
