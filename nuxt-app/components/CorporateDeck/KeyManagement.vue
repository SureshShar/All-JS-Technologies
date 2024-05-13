<template>
  <div
    class="sectionWrapper paddingY flex flex-col justify-center items-center"
  >
    <h2 class="h2Heading text-center mb-7">Key Management</h2>

    <div class="max-w-screen-md flex flex-col gap-6 mx-auto">
      <div v-for="individual in managementTeam" :key="individual.name" class="flex flex-col md:flex-row justify-center items-center gap-4">
        <img
          :src="individual.imgSrc"
          alt="internet"
          class="w-20 h-20"
        />
        <p class="paragraph text-center md:text-start">
          <span class="font-bold">{{individual.name}}</span>
          {{ individual.paragraph }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const managementTeam = [
  {
    name: "Vaseem Ahmed",
    paragraph:
      "is an actuary number cruncher who manages the financial planning of the company, deciding on investment strategies by considering cash and liquidity risks, ensuring the cash flow, controlling and evaluating the company’s capital structure, supervising all finance personnel, and managing vendor relationships of the Company.",
    imgSrc: "/images/corporateDeck/vaseemAhmed.webp",
  },
  {
    name: "Ishant Jaggi",
    paragraph: "is a Jack of all trades and is overseeing every happening in the company by  developing high-quality business plans and strategies ensuring their alignment  with long term and short-term objectives, making high quality investing decisions  to increase profits and advance business, and suggesting improvements or  solutions as per the need, building trust relations in the Company",
    imgSrc: "/images/corporateDeck/ishantJaggi.webp",
  },
  {
    name: "Ranjit Raj",
    paragraph: "is an even-tempered, competent, confident, and reliable executive with the  required expertise in the field being a pioneer Staffing Entrepreneur with polished  skill set of Talen Hunt & Talent Vision, People Management & Driving Projects across  the Globe who has been in the staffing business for over a decade playing varied  roles of Employee, Employer, Supplier & Clients and handles End-to-End Staff  Augmentation in the Company",
    imgSrc: "/images/corporateDeck/ranjitRaj.webp",
  },
];
</script>
