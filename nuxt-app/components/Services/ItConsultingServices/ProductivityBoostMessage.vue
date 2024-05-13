<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
      <GenericHeadingImageParagraph 
      :title="title"
      :imgSrcDesktop="imgSrcDesktop"
      :paragraph="paragraph"
      pragraphClass="md:flex-row md:flex-row-reverse md:gap-10"
      imageClass="hidden md:block"
      />
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const title = "Boost your productivity while lowering your costs.";
const imgSrcDesktop = "/images/servicesPage/boostYourSkill.webp";
const paragraph =
  "<p> Our recruiters and account managers work with customers to find the most qualified and dependable IT experts in various countries. We have technical experience, but we also have experience in a variety of critical sectors and business disciplines. </p><p>Few firms have the internal staff resources to address all day-to-day issues and unusual circumstances or initiatives that arise from time to time in today’s demanding workplace. Staff augmentation enables clients to make greater use of their existing personnel while utilizing a temporary workforce for difficult projects or one-time requirements. Improved internal staff utilization results in happier users, more production, and cheaper expenses. </p> <p>Our professionals IT consulting services recognize that each business is unique and its operating structure. Consequently, we look for people with skills that match the job function and the organization’s environment. It has a huge impact on retention rates, and businesses gain greatly.</p>";
</script>
