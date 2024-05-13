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
const title = "Banking & Financial Services";
const imageSrc = "/images/servicesPage/industrySolutions/banking.webp";
const paragraph =
  "For India’s Banking and Financial Services sector to reach its full potential, it must hire highly skilled professionals with extensive experience and appropriate skills. In addition to recruiting for different companies, we also act as consultants and advisors to our clients, assisting them in addressing critical talent issues. Apart from executive recruitment, we also help them with succession planning and other matters. We are the recruiter of choice with our industry knowledge, proactive approach, and long-term relationships with leading companies.";
</script>
