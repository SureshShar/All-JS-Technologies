<template>
  <div
    class="sectionWrapper paddingY flex flex-col justify-center items-center"
  >
    <h2 class="h2Heading text-center mb-7">VIR Consultant LLC.</h2>

    <div class="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
        {{ ADDRESS }}
      </h3>
    </div>
  </div>
</template>

<script setup>
import { ADDRESS } from "~/helpers/constants";

const cardsData = [
  {
    name: "Clients",
    items: [
      "HCL America DTCC",
      "Tech Mahindra",
      "L3Harrris Technologies",
      "Inc. Extra Space",
      "Storage WiproPARI",
      "Aggreko Southwire",
      "Company Canon",
      "Sonoco CommScope",
      "Aristocrat Technologies",
      "ATI Metals ",
    ],
  },
  {
    name: "Engineering Roles",
    items: [
      "Validation Engineer",
      "CAPA Engineer Quality",
      "Engineer Electrical",
      "Engineer Planview",
      "Administrator Creo",
      "Engineer Packaging",
      "Engineer Sr. Controls",
      "Engineer Manufacturing",
      "Engineer Senior Digital",
      "Design Engineer",
      "Project Engineer",
      "Software Asset",
      "Management",
    ],
  },
  {
    name: "IT Roles",
    items: [
      "Front-end Developer",
      "Java Full Stack",
      "Developer DevOps",
      "Engineer Linux",
      "Administrator SAP CDC",
      "Architect C++ Software",
      "Engineer Sr. BI",
      "Functional Analyst Data",
      "Analyst SQL Developer",
      "SAP Consultant",
      "Software Tester",
      "BigData Engineer",
      "SalesForce Developer",
      "Field Testing Engineer",
      "Principal Data Architect",
    ],
  },
  {
    name: "Non-IT & Functional Roles",
    items: [
      "Buyer/Planner Project",
      "Manager Business",
      "Analyst Certified Public",
      "Accountant District",
      "Manager Maintenance",
      "Technician Regulatory",
      "Affairs Specialist Risk",
      "Manager Desktop",
      "Support Executive",
      "Assistant CNC",
      "Machinist Assembler",
      "Forklift Operator Tax",
      "Manager",
    ],
  },
];
</script>
