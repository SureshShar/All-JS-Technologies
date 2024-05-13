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
  imageSrc: "/images/wedgeDesktopImg4.webp",
  imgSrcMobile: "/images/techMobImg.webp",
  title: "Technology Solutions",
  route: "/services/technology-solutions",
  navigationText: "Learn more",
  paragraphText:
    "A global network of many suppliers is streamlined and accelerated through our technical expertise and scalability. To help solution providers increase efficiency and gain an edge in the marketplace, we offer various services.",
};
</script>
