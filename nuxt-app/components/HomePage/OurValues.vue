<template>
  <WrappersPaddingYWrapper>
    <WrappersPaddingYWrapper>
      <WrappersSectionWrapper>
        <ul class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <li class="md:text-left text-center">
            <div class="flex justify-center md:justify-start w-full md:w-2/5">
              <div class="text-center md:text-start mb-3 md:mb-0">
                <GenericH2Title :title="heading" />
              </div>
            </div>
          </li>

          <li
            v-for="cardData in cards"
            :key="cardData.name"
            class="md:text-left text-center"
          >
            <div class="max-w-xs mx-auto overflow-hidden">
              <img
                class="w-10 h-10 mx-auto md:mx-0 mb-2"
                :src="cardData.imageSrc"
                :alt="cardData.name"
              />
              <GenericH3Title
                class="justify-center md:justify-start"
                :title="cardData.name"
              />
              <GenericParagraph
                :paragraphText="cardData.paragraph"
                paragraphClass="text-center md:text-start"
              />
            </div>
          </li>
        </ul>
      </WrappersSectionWrapper>
    </WrappersPaddingYWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const heading = "Our Five Foundational Values";
const cards = [
  {
    name: "Striving For Excellence",
    paragraph:
      "We strive for excellence in everything we do. Every time we deliver high-quality leadership development experiences, we’ll become the disruptive organisation we’re always talking about.",
    imageSrc: "/icons/valueSvg1.svg",
  },
  {
    name: "Understanding Client’s Needs",
    paragraph:
      "An understanding of a client’s needs and business details is essential for a consulting company. Every delivered system or service, work as a means to enhance processes, drive innovation, and initiate changes that offer business growth in the future.",
    imageSrc: "/icons/valueSvg2.svg",
  },
  {
    name: "Customer-Centric Team",
    paragraph:
      "All our employees are empowered to make the best decisions for both the customer and the company by creating a culture that encourages them to do so.",
    imageSrc: "/icons/valueSvg3.svg",
  },
  {
    name: "Result-Driven Technology & Techniques",
    paragraph:
      "We bring in experts to help us better understand your challenges so that we can make the right decisions. As a result, we use industry-proven tools and techniques to help you get on the right track.",
    imageSrc: "/icons/valueSvg4.svg",
  },
  {
    name: "Trusted Expertise",
    paragraph:
      "To empower our clients, people and communities to achieve more by providing them with trusted and industry-proven expertise.",
    imageSrc: "/icons/valueSvg5.svg",
  },
];
</script>
