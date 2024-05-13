<template>
  <WrappersBackgroundColorWrapper>
    <WrappersBackgroundImageWrapper
      bannarClass="max-w-screen-2xl mx-auto bg-[url('/images/aboutUsComponentBackgroundImg.webp')] bg-left-bottom"
    >
      <WrappersPaddingYWrapper>
        <WrappersSectionWrapper>
          <GenericImageCard :image-src="data.imageSrc">
            <GenericH2Title
              class="justify-center md:justify-start mb-4"
              title="About Us"
            />
            <GenericParagraph
              :paragraphText="data.paragraph"
              paragraphClass="text-center md:text-start py-2"
            />
            <GenericNavigationLink
              :route="data.route"
              :heading-text="data.navigationText"
              headingClass="text-blue-midnight font-semibold"
            />
          </GenericImageCard>
        </WrappersSectionWrapper>
      </WrappersPaddingYWrapper>
    </WrappersBackgroundImageWrapper>
  </WrappersBackgroundColorWrapper>
</template>

<script setup>
const data = {
  imageSrc: "/images/aboutUsImage.webp",
  route: "/about-us",
  navigationText: "Learn more",
  paragraph:
    "A global strategy consulting brand that aims to connect the right human talent to the right resources. A trusted digital solution for all your recruitment-related needs and requirements. We are a company with technical visionaries to achieve high-quality professional excellence and perfection in delivering valuable solutions. Working effectively and efficiently, we help you to grow by offering the right resources.",
};
</script>
