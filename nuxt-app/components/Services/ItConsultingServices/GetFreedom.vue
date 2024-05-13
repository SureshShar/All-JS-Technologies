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
const title = "Get freedom from:";
const paragraph = "We strive to redefine the standard of excellence.";
const cardsData = [
  {
    imageSrc: "/icons/servicesPage/img1.svg",
    name: "Onboarding & Training.",
    paragraph:
      "Collaboration is the process of two or more people or organizations working together to complete a task or achieve a goal.",
  },
  {
    imageSrc: "/icons/servicesPage/img2.svg",
    name: "Compliances",
    paragraph:
      "Transparency, as used in science is operating in such a way that it is easy for others to see what actions are performed.",
  },
  {
    imageSrc: "/icons/servicesPage/img3.svg",
    name: "Payroll Management",
    paragraph:
      "Trust will help us foster a positive and productive environment that delivers value to our users and customers.",
  },
  {
    imageSrc: "/icons/servicesPage/img4.svg",
    name: "Overstaffing",
    paragraph:
      "Integrity is the practice of showing a consistent and uncompromising adherence to strong moral and ethical principles.",
  },
];
</script>
