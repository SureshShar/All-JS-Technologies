<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
      <GenericInfoSection :title="title" :paragraph="paragraph" />

      <GenericResponsiveImages
        :imgSrcDesktop="imgSrcDesktop"
        :imgSrcMobile="imgSrcMobile"
        imgClass="my-5 mx-auto "
      />

      <div class="md:flex ">
        <!-- Left Column -->
        <div class="md:w-1/2 md:pr-4 mb-4 md:mb-0 ">
          <GenericParagraph
            paragraphClass="text-center md:text-start"
            :paragraphText="paragraphLeft"
          />
        </div>

        <!-- Right Column -->
        <div class="md:w-1/2 md:pl-4">
          <GenericParagraph
            paragraphClass="text-center md:text-start"
            :paragraphText="paragraphRight"
          />
        </div>
      </div>

      <ul class="flex flex-row flex-wrap justify-center gap-5 my-6 ">
        <ServicesItConsultingServicesItemCard class="transform  hover:bg-gray-300 transition duration-500 hover:scale-90"
          v-for="item in itemsData"
          :key="item.name"
          :name="item.name"
          :imageSrc="item.imageSrc"
          :paragraph="item.paragraph"
        />
      </ul>

      <GenericParagraph
        paragraphClass="text-center md:text-start my-6 "
        :paragraphText="paragraphBottom1"
      />
      <GenericParagraph
        paragraphClass="text-center md:text-start"
        :paragraphText="paragraphBottom2"
      />
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const title = "What Should You Look for in an IT Staffing Firm?";
const paragraph =
  "We equip our staff with the tools they need to succeed! To achieve success, our culture encourages cooperation, teamwork, inventive thinking, and the exchange of new ideas. Taking the time to help others is equally vital to our employees. We provide our time to ";
const paragraphLeft =
  "If you're seeking IT Staffing Services in the United States, keep these items in mind.";
const paragraphRight =
  "Workflow. Make sure you understand your provider’s procedures and that they ensure clear and fluid communication.";
const paragraphBottom1 =
  "Offering  IT consulting services, we help IT professionals figure out what they want to do with their lives. Our staffing experts collaborate with our customers to dig deep into role requirements to locate the finest personnel to satisfy their business objectives. To assist our prospects in finding good employment possibilities, we ask the right questions.";
const paragraphBottom2 =
  "We can help you reach your objective whether you’re looking for your next IT job, competent personnel to suit your IT Staffing needs, or joining a highly energetic and enthusiastic team of staffing specialists. Allow VIR Consultant to assist you in locating the best personnel to meet your technological requirements.";
const imgSrcDesktop = "/images/servicesPage/itStaffing.webp";
const imgSrcMobile = "/images/servicesPage/itStaffingMob.webp";
const itemsData = [
  {
    imageSrc: "/icons/page.svg",
    name: "Security",
    paragraph:
      "Priority is given to safety. It’s critical to have standardized procedures and security policies in place.",
  },
  {
    imageSrc: "/icons/page.svg",
    name: "Talent",
    paragraph:
      "The greatest IT partners collaborate with the industry’s most qualified IT engineers.",
  },
  {
    imageSrc: "/icons/page.svg",
    name: "Time Zone",
    paragraph:
      " Nearshore outsourcing is a solid choice for allowing your team to communicate with outsourced labor in real-time.",
  },
  {
    imageSrc: "/icons/page.svg",
    name: "Experience",
    paragraph:
      " Look for case studies that have been published, completed projects, and client testimonials.",
  },
  {
    imageSrc: "/icons/page.svg",
    name: "Potential",
    paragraph:
      "The top IT Staffing firms will provide a diverse set of services to meet the demands of all your future initiatives.",
  },
];
</script>
