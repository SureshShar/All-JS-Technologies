<template>
  <div class="sectionWrapper paddingY">
    <div class="flex flex-col items-center justify-center">
      <div class="flex flex-col md:flex-row text-center md:text-start">
        <GenericContentBlock
          v-for="cardData in cardsData"
          class="md:w-1/3"
          :key="cardData.name"
          :title="cardData.name"
          :imageSrc="cardData.imageSrc"
          :topParagraphText="cardData.topParagraphText"
          :bottomParagraphText="cardData.bottomParagraphText"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const cardsData = [
  {
    name: "IT Staffing",
    imageSrc: "/images/servicesPage/talentSolutions/itStaffing.webp",
    topParagraphText:
      "Talent management isn’t just a human resources buzzword that you’ll hear from time to time.",
    bottomParagraphText:
      "Additionally, the company is dedicated to attracting and retaining the best and brightest employees in the industry. Even though talent management is an important part of its business strategy, it is also one of the most difficult to implement. To make things easier for companies, we are here delivering valuable solutions and the right talent. Even the most experienced recruiters have trouble filling IT staffing positions with the best candidates. The growing competition among businesses for top candidates drains the company’s internal resources. Suppose you’re looking for help finding qualified IT staff. In that case, a staffing agency with experience in IT staffing can save your time, effort, and money while providing access to a pool of available, pre-screened talent.",
  },
  {
    name: "BFSI Staffing",
    imageSrc: "/images/servicesPage/talentSolutions/bfsi.webp",
    topParagraphText:
      "We have been recruiting for many years, which allows us to learn more about local market trends and needs.",
    bottomParagraphText:
      "Your next great hire can be found with us, whether you’re a large multinational corporation or an early-stage tech start-up. Our recruitment consultants come from the banking and financial services industry, so we have a deep understanding of the needs of banks and financial services roles and easy insight into which professionals possess the hard and soft skills necessary for their success in the sector.",
  },
  {
    name: "Engineering Staffing",
    imageSrc: "/images/servicesPage/talentSolutions/engineering.webp",
    topParagraphText:
      "To get the best results from its building teams, any engineering association must partner with",
    bottomParagraphText:
      "a high-performance workforce partner with the required integrity and specialization. The recruiting team of these engineering companies helps our clients find and hire high-quality candidates or technical talent from a variety of industries, including manufacturing and aerospace to defence and energy as well as hardware and pharmaceuticals devices. Business owners can take advantage of our flexible services to access highly skilled and hard-to-find engineering professionals that will help them stand out from the crowd.",
  },
];
</script>
