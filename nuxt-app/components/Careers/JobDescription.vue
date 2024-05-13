<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2">
          <h3 class="text-blue-500 font-medium my-2">
            View All open positions
          </h3>

          <GenericH2Title
            :title="title"
            titleClass="text-center md:text-start text-blue-midnight mb-5"
          />

          <GenericParagraph
            paragraphText="San Francisco, CA · Full time"
            paragraphClass="text-center md:text-start py-2 font-semibold"
          />

          <GenericParagraph
            :paragraphText="paragraph1"
            paragraphClass="text-center md:text-start py-2"
          />

          <GenericH2Title
            title="Who We Are"
            titleClass="text-center md:text-start text-blue-midnight pt-3"
          />
          <GenericParagraph
            :paragraphText="paragraph2"
            paragraphClass="text-center md:text-start py-2"
          />

          <GenericH2Title
            title="Working with us"
            titleClass="text-center md:text-start text-blue-midnight pt-3"
          />
          <GenericParagraph
            :paragraphText="paragraph3"
            paragraphClass="text-center md:text-start py-2"
          />

          <GenericH2Title
            title="Benefits"
            titleClass="text-center md:text-start text-blue-midnight pt-3"
          />
          <GenericListRenderer :itemsList="itemsList1" class="pt-2" />

          <GenericH2Title
            title="About the role"
            titleClass="text-center md:text-start text-blue-midnight pt-3"
          />
          <GenericListRenderer :itemsList="itemsList2" class="pt-2" />
        </div>

        <div class="md:w-1/2 md:ml-16 flex flex-col gap-4">
          <!-- card1 -->
          <div
            class="md:w-1/2 p-7 md:bg-white md:border border-gray-100 rounded-md md:shadow-md"
          >
            <div class="flex flex-col">
              <button
                type="button"
                class="px-5 py-3 text-base font-medium text-center justify-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                <!-- mail svg -->
                <svg
                  class="w-4 h-4 text-white me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path
                    d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
                  />
                  <path
                    d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
                  />
                </svg>
                Apply Now
              </button>

              <button
                type="button"
                class="text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3 text-blue-700 font-bold justify-center inline-flex items-center hover:text-white border-2 border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg"
              >
                Share now
                <img
                  src="/icons/internetIcon.svg"
                  alt="internet"
                  class="ml-2 w-4 h-4 me-2 hover:text-white"
                />
              </button>
            </div>
          </div>
          <!-- card2 -->
          <div
            class="md:w-1/2 p-7 md:bg-white md:border border-gray-100 rounded-md md:shadow-md"
          >
            <GenericParagraph
              paragraphText="9 Aug 2019"
              paragraphClass="text-center md:text-start py-2 font-semibold"
            />

            <div v-for="jobStat in jobStats" :key="jobStat.name" class="pb-2 text-blue-midnight">
              <div class="text-center md:text-start pt-2 pb-1 font-semibold">{{ jobStat.name }}</div>
              <div v-for="value in jobStat.values" :key="value" class="text-center md:text-start">
                {{ value }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const title = "Licensed Nursing Home Administrators";
const paragraph1 =
  "We’re looking for a UX Researcher to help craft the future of our market-leading digital product suite. This is an amazing opportunity to work in a highly collaborative role and requires a creative thinker, a helpful mentor, a team player, and a skilled communicator - all rolled into one!";
const paragraph2 =
  "We’re a team of lifelong learners. We’re equal parts left and right brained. And we’re generally likeable. We won’t bore you with more adjectives. See for yourself.";
const paragraph3 =
  "We’re a global team with a philosophy of encouraging passionate people to be fun and creative. With offices in Melbourne, Oakland, and Berlin we benefit from bringing together the experiences and viewpoints of a wide range of talented people from around the world. We believe a diverse workplace is a healthy workplace.";
const itemsList1 = [
  "Flexible working hours and the opportunity to work from home",
  "Continual training and learning, conference attendance, and in-house mentoring opportunities",
  "Health and wellness programs like yoga, a running club, a fresh towel service and quiet spaces",
  "A fully stocked kitchen, with enough food to make delicious lunch every day, including an industrial-strength coffee machine, free snacks and weekly catered lunches",
  "An active social club, with events for you and your family",
  "Paid parental leave",
];
const itemsList2 = [
  "Passionate about user-centred design and accessibility.",
  "You have at least 2 years of experience working as a UX researcher.",
  "You have an excellent practical understanding of research methodologies and have strong documentation, communication and presentation skills with an ability to effectively input into design critiques.",
  "Ability to work on multiple, simultaneous projects of all sizes and complexity.",
  "Experience with user-centred design methodologies and integrating research in to agile workflows.",
  "Experience in planning and conducting a range of research methods including contextual enquiry, depth interviews, diary studies, remote usability testing, creating/facilitating workshops, and others as required.",
];
const jobStats = [
  { name: "Location", values: ["Melbourne"] },
  { name: "Work Type", values: ["Full-time"] },
  {
    name: "Classification",
    values: ["Design & Architecture", "Web & Interaction Design"],
  },
];
</script>
