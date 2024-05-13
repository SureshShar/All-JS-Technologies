<template>
  <div
    class="sectionWrapper paddingY flex flex-col justify-center items-center"
  >
    <h2 class="h2Heading text-center mb-8">Recruitment Verticals</h2>

    <div class="flex flex-row justify-center items-center flex-wrap gap-6 w-full">
      <div v-for="card in cards" :key="card.name" class="my-5 md:my-0">
        <img class="w-44" :src="card.imageSrc" :alt="card.name" />
        <p class="paragraph text-center mt-3">{{ card.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    name: "Information Technology",
    imageSrc: "/images/corporateDeck/IT.webp",
  },
  {
    name: "Healthcare",
    imageSrc: "/images/corporateDeck/healthCare.webp",
  },
  {
    name: "Medical Devices",
    imageSrc: "/images/corporateDeck/medicalDevice.webp",
  },
  {
    name: "Engineering",
    imageSrc: "/images/corporateDeck/engineering.webp",
  },
  {
    name: "Allied Health",
    imageSrc: "/images/corporateDeck/AlliedHealth.webp",
  },
];
</script>
