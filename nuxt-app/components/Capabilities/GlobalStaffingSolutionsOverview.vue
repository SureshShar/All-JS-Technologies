<template>
  <div
    class="sectionWrapper paddingY flex flex-col md:flex-row items-center justify-center md:justify-between"
  >
    <div class="md:w-1/2">
      <p class="paragraph text-center md:text-start">
        VIR Consultant LLC is a Newark, DE based staffing agency that
        specializes in providing Permanent and Contractual hiring solutions to
        Direct Clients, MSP's, Implementation Partners, and Marketplaces.
        Established in 2021, we have expanded our services globally in just 2
        years, serving clients in USA, India, UK, and Colombia. As a global
        staffing solution provider, our mission is to help our clients find the
        best talents by delivering flexible, innovative, and cost-effective
        staffing solutions to meet their diverse workforce needs. Offices in:
      </p>
      <GenericListRenderer
        :itemsList="listItems"
        imgSrc="/icons/circleCheckIcon.svg"
        class="py-3 grid grid-cols-1 md:grid-cols-2"
      />
    </div>
    <div class="md:w-1/2 relative">
      <img
        src="/icons/capabilities/wedgeCard.svg"
        alt="wedgeCard"
        class="w-[512px]"
      />
      <div class="absolute top-12 right-10 xs:top-20 xs:right-12 md:top-20 md:right-10">
        <h2
          class="md:text-3xl text-2xl font-bold text-center md:text-start"
        >
          COMPANY DATA
        </h2>
        <p class="paragraph text-gray-600 font-extrabold mt-1 md:mt-2">
          UEI: <span class="pl-2">EZF5J5CN24B9</span>
        </p>
        <p class="paragraph text-gray-600 font-extrabold mt-1">
          CAGE-NCAGE: <span class="pl-2">9L8E3</span>
        </p>
        <p class="paragraph text-gray-600 font-extrabold mt-1">
          DUNS: <span class="pl-2">118723297</span>
        </p>

        <!-- Social media links -->
        <GenericSocialMediaLinks
          class="flex gap-3 mt-4"
          :socialMediaLinks="socialMediaLinks"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const listItems = [
  "Delaware, United  States",
  "Medellin,Columbia",
  "Ontario, California",
  "Uttar Pradesh,India",
];
const socialMediaLinks = [
  {
    name: "Facebook",
    logoIdentifier: "/icons/capabilities/fb.svg",
    route: "https://www.facebook.com/virconsultant?mibextid=LQQJ4d",
  },
  {
    name: "Instagram",
    logoIdentifier: "/icons/capabilities/insta.svg",
    route: "https://www.instagram.com/virconsultant/",
  },
  {
    name: "Linkdin",
    logoIdentifier: "/icons/capabilities/linkdin.svg",
    route: "https://www.linkedin.com/company/vir-consultants-llc",
  },
  {
    name: "X",
    logoIdentifier: "/icons/capabilities/twitter.svg",
    route: "https://twitter.com/VirConsultant",
  },
];
</script>
