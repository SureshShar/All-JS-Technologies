<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
      <GenericWedgeImageCard
        :title="data.title"
        :image-direction-reverse="false"
        :paragraphText="data.paragraphText"
        :route="data.route"
        :button-label="data.navigationText"
        :imgSrcDesktop="data.imageSrc"
        :imgSrcMobile="data.imgSrcMobile"
        :defaultImgSrc="data.imageSrc"
      />
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const data = {
  imageSrc: "/images/wedgeDesktopImg2.webp",
  imgSrcMobile: "/images/workforceMobImg.webp",
  title: "Workforce Solutions",
  route: "/services/workforce/",
  navigationText: "Learn more",
  paragraphText:
    "Human resource management (HRM) concentrates on a person’s ability to grow their skills and develop the tools they need to succeed in the business world. As a result of this, both employers and employees benefit from workforce development.",
};
</script>
