<template>
  <div class="flex flex-col justify-center items-center sectionWrapper paddingY">
    <h2 class="h2Heading text-center my-5">
      MSP Service Model
    </h2>

    <div class="max-w-screen-md bg-blue-cerulean p-6 md:p-16">
      <div v-for="service in mspServices" :key="service.heading" class="pt-3">
        <h4 class="h4Heading text-center md:text-start py-3 text-white">
          {{ service.heading }} :
        </h4>

        <ul class="md:list-disc">
          <li
            v-for="(listText, index) in service.listData"
            :key="index"
            class="paragraph text-center md:text-start text-white md:ml-4 mb-2"
          >
            {{ listText }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const mspServices = [
  {
    heading: "Account Management",
    listData: [
      "A focus on efficiency, quality, risk, and cost is emphasized while meeting program  metrics is incentivized.",
    ],
  },
  {
    heading: "Recruitment",
    listData: [
      "Adjusted to fulfill the staffing requirements of global clients.",
      "Arranged according to the geographic location and skill-related categories.",
      "Anticipatory Channel contingent on the program's specific areas of expertise.",
    ],
  },
  {
    heading: "Onboarding & Contractor Care",
    listData: [
      "There is an emphasis on mitigating risks.",
      "For the entire assignment lifecycle, contractors have a single point of contact.",
      "Oriented towards both resolving issues and fostering relationships.",
    ],
  },
  {
    heading: " Tools",
    listData: [
      "Our technology is compatible with major VMS and talent search platforms.",
      "Detailed reporting is available for tracking metrics.",
    ],
  },
];
</script>
