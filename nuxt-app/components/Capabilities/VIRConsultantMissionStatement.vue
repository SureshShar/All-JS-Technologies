<template>
  <div
    class="sectionWrapper paddingY flex flex-col items-center justify-center md:justify-between md:items-start"
  >
    <p class="paragraph text-center md:text-start">
      At VIR, we are dedicated to upholding the highest standards of value,
      integrity, and results as we strive to provide exceptional workforce
      solutions for our clients, nurturing professional development and success
      for the diverse talent we represent. Our mission is to contribute
      positively to businesses' growth through seamless talent acquisition and
      foster meaningful, mutually beneficial relationships within the global
      employment landscape.
    </p>

    <h4 class="h4Heading text-center md:text-start py-3">VIR Consultant</h4>

    <GenericListRenderer
      :itemsList="VIRConsultantlistItems"
      imgSrc="/icons/circleCheckIcon.svg"
      class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    />

    <h4 class="h4Heading text-center md:text-start mt-2 py-3">VIR Healthway</h4>

    <GenericListRenderer
      :itemsList="VIRHealthwaylistItems"
      imgSrc="/icons/circleCheckIcon.svg"
      class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4"
    />
  </div>
</template>

<script setup>
const VIRConsultantlistItems = [
  "Southwire",
  "Extra Space Storage",
  "GoodYear",
  "Saint-Gobain",
  "DTCC",
  "Aristocrat Technologies",
  "CommScope",
  "Eaton",
  "L3Harris Technologies",
  "Cipla",
  "ATI Metals",
  "Moog Inc",
  "Cannon",
  "Actalent",
];
const VIRHealthwaylistItems = [
  "NuWest REACH",
  "CareerStaff",
  "Cookeville Regional Medical Center",
  "Froedtert Smith",
  "Swedish Medical Center",
  "ClearView Healthcare Management",
  "Genesis HealthCare",
  "Rite Aid",
  "Memorial Hermann Health System",
  "CoreCivic",
  "LifePoint Health",
  "Kaiser Permanente",
  "YesCare",
  "White Plains Hospital",
  "Jackson Therapy Partners",
];
</script>
