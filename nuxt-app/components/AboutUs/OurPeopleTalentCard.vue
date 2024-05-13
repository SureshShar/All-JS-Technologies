<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper class="relative flex justify-center items-center">
      <div
        class="flex gap-9 md:gap-12 flex-col md:flex-row justify-start items-start p-7 bg-white border border-gray-100 shadow-md"
      >
        <!-- Cards -->
        <GenericIconWithTitleCard
          v-for="card in cards"
          :key="card.title" 
          :title="card.title"
          :description="card.description"
          :imgSrc="card.imgSrc"
        />
      </div>
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const cards = [
  {
    title: "Invested in your success.",
    description:
      "When you work with our people you aren’t just working with highly skilled consultants, you’re also collaborating with owners and entrepreneurs, whose long-term professional progress is intimately linked to your business success.",
    imgSrc: "/icons/aboutUs/circle1.svg",
  },
  {
    title: "Diversity of talent.",
    description:
      "Our wider view of talent brings a diversity of backgrounds, experiences and perspectives to our teams, helping foster a culture of critical thinking and discussion. So you can rest assured that our strategic recommendations have been tested from every angle.",
    imgSrc: "/icons/aboutUs/circle2.svg",
  },
  {
    title: "Global perspective.",
    description:
      "Our international team brings experience from markets, businesses and leading universities around the world. Combining a global perspective with our deep India expertise.",
    imgSrc: "/icons/aboutUs/circle3.svg",
  },
];
</script>
