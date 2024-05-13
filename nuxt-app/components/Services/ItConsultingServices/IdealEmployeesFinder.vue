<template>
  <WrappersPaddingYWrapper>
    <WrappersPaddingYWrapper class="max-w-screen-2xl mx-auto">
      <div class="max-w-screen-2xl mx-auto md:ml-0 ">
        <div class="flex flex-col md:flex-row  justify-center items-center">
          <!-- First Column with Image -->
          <div class="w-1/2">
            <img
              :src="imageSrc"
              alt="Card image"
              class="w-full xl:px-6 md:h-108 md:w-[42rem]"
            />
          </div>

          <!-- Second Column with Paragraph -->
          <div
            class="md:w-1/3 p-8 flex flex-col justify-center items-center md:items-start"
          >
            <GenericH2Title
              class="justify-center text-center md:text-start md:justify-start mb-4"
              :title="title"
            />
            <GenericParagraph
              paragraphClass="text-center md:text-start py-2"
              :paragraphText="paragraph"
            />
          </div>
        </div>
      </div>
    </WrappersPaddingYWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const imageSrc = "/images/servicesPage/employFinder.webp";
const title = "Let's Find Your Ideal Employees";
const paragraph =
  "We connect them with opportunities based on a candidate’s experience, competence, and interpersonal abilities. We supply the ideal personnel to transfer easily into your business thanks to a rigorous interviewing process and input from our internal Technical and Non-Technical teams. VIR Consultant always aims to do right by our clients: their reputation is as important to us as our own. This is due to a combination of professional pride and personal principles. For us, doing a decent job is important.";
</script>
