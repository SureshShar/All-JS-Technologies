<template>
  <WrappersBackgroundImageWrapper
    bannarClass="bg-[url('/images/servicesPage/getFreedomComponentBackground.webp')] max-w-screen-lg md:max-w-none bg-top md:bg-bottom"
  >
    <WrappersPaddingYWrapper>
      <WrappersSectionWrapper>
        <div class="flex flex-col md:flex-row justify-between">
          <div class="md:w-1/3 p-4">
            <GenericInfoSection
              :title="title"
              :paragraph="paragraph"
              containerClass="flex flex-col"
            />
          </div>
          <div class="md:w-2/3 p-4">
            <ServicesItConsultingServicesGetFreedomCards
              :cardsData="cardsData"
            />
          </div>
        </div>
      </WrappersSectionWrapper>
    </WrappersPaddingYWrapper>
  </WrappersBackgroundImageWrapper>
</template>

<script setup>
const title = "What We Are Looking For";
const paragraph =
  "We seek out candidates from diverse backgrounds and disciplines. Successful applicants demonstrate five key attributes.";
const cardsData = [
  {
    imageSrc: "/icons/servicesPage/img1.svg",
    name: "Entrepreneurial instinct",
    paragraph:
      "We expect everyone in our team to think like owners and act at start-up speed. Hence, we seek out individuals who have an instinct for spotting opportunities, quickly building relevant capabilities and executing effectively.",
  },
  {
    imageSrc: "/icons/servicesPage/img2.svg",
    name: "Learning orientation",
    paragraph:
      "We strive to be at the cutting-edge in everything we do. Therefore we look for candidates with a thirst for continuous learning and self-improvement who are highly motivated to push the boundaries of knowledge in their field.",
  },
  {
    imageSrc: "/icons/servicesPage/img3.svg",
    name: "Logical thinking",
    paragraph:
      "A rigorous and structured approach is essential to identifying the root causes of our clients’ problems. As a result, we require candidates who can demonstrate a high level of logical reasoning.",
  },
  {
    imageSrc: "/icons/servicesPage/img4.svg",
    name: "Collaborative mindset",
    paragraph:
      "We are able to deliver unparalleled impact in our clients’ organisations thanks to our unique combination of skill-sets and intensely collaborative approach. Consequently, we always look for people who can demonstrate a high level of emotional intelligence and a strong team ethic.",
  },
];
</script>
