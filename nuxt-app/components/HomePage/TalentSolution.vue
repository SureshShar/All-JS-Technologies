<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
      <GenericWedgeImageCard
        :title="data.title"
        :image-direction-reverse="true"
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
  imageSrc: "/images/wedgeDesktopImg1.webp",
  imgSrcMobile: "/images/talentMobImg.webp",
  title: "Talent Solutions",
  route: "/services/talent",
  navigationText: "Learn more",
  paragraphText:
    "Talent management isn’t just a human resources buzzword that you’ll hear from time to time. Additionally, the company is dedicated to attracting and retaining the best and brightest employees in the industry.",
};
</script>
