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
  imageSrc: "/images/wedgeDesktopImg3.webp",
  imgSrcMobile: "/images/industryMobImg.webp",
  title: "Industry Solutions",
  route: "/services/industry-solutions",
  navigationText: "Learn more",
  paragraphText:
    "To meet our clients’ changing needs and expectations, we at VIR Consultant work as a seamless unit across various sectors, helping them recruit appropriate candidates with the right set of skills and experience.",
};
</script>
