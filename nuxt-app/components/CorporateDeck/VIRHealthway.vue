<template>
  <div
    class="sectionWrapper paddingY flex flex-col justify-center items-center"
  >
    <h2 class="h2Heading text-center mb-7">VIR Healthway</h2>

    <div class="grid grid-col-1 md:grid-cols-2 gap-10">
      <GenericCardWithThreeColors
        class="justify-self-center"
        v-for="cardData in cardsData"
        :name="cardData.name"
        :items="cardData.items"
      />
    </div>

    <div
      class="flex flex-col md:flex-row items-center justify-center gap-4 mt-8"
    >
      <img
        src="/icons/corporateDeck/locationIcon.svg"
        alt="location icon"
        class="w-9"
      />
      <h3 class="h3Heading text-center">
        1131 W 6th ST Suite 210, Ontario, CA 91762 , USA
      </h3>
    </div>
  </div>
</template>

<script setup>
const cardsData = [
  {
    name: "Clients",
    items: [
      "CoreCivic",
      "Memorial Hermann",
      "Health System",
      "LifePoint Health",
      "Novo Health Services",
      "Boston Medical",
      "Center",
      "Cipla",
      "Fauquier Health",
      "Castleview Hospital",
      "Kindred Hospital",
      "Rehabilitation",
      "Services",
      "Providence Health & Services",
      "Protective",
      "Anthem",
      "Cigna",
    ],
  },
  {
    name: "Positions",
    items: [
      "Registered Nurse (RN)",
      "Registered Nurse (RN) - Correctional Facility",
      "Registered Nurse – Hospice",
      "Licensed Practical Nurse",
      "Licensed Practical Nurse - Correctional Facility",
      "Risk Manager (RN)",
      "Clinical Manager (RN)",
      "Central Processing Technician II",
      "Clinical Lab Technologist",
      "Health Equity Analyst",
      "Pharmacy Patient Liaison - Specialty Pharmacy",
      "Respiratory Therapist",
      "Human Resource Director",
      "Chief Engineer",
      "Treatment Counselor",
    ],
  },
];
</script>
