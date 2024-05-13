<template>
  <WrappersPaddingYWrapper>
    <WrappersPaddingYWrapper>
      <div class="flex flex-col justify-center items-center px-3 mx-auto">
        <GenericH2Title
          :title="title"
          titleClass="text-blue-midnight text-center"
        />

        <div class="grid md:grid-cols-3 md:gap-3 mt-6 md:mt-9">
          <GenericRatingCard :cards="ratingCardData" />
        </div>
      </div>
    </WrappersPaddingYWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const title = "Our Employees Love Us";
const ratingCardData = [
  {
    totalStars: 5,
    gainedStars: 5,
    name: "Abhishek Sachan",
    description: "I've had the pleasure of working with VIR Consultant LLC",
    imageUrl: "/images/abhishek.webp",
    date: "March 14, 2021",
  },
  {
    totalStars: 5,
    gainedStars: 5,
    name: "Harsita Pawar",
    description: "Highly positive work environment. Good management.",
    imageUrl: "/images/harsita.webp",
    date: "July 19, 2022",
  },
  {
    totalStars: 5,
    gainedStars: 5,
    name: "Ankita Dey",
    description:
      "Their dedication to guiding my career path sets them apart in the industry.",
    imageUrl: "/images/ankita.webp",
    date: "April 24, 2023",
  },
];
</script>
