<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
      <div v-if="showFilters" class="block md:hidden mb-7">
        <CareersFilters :filters="filters" />
      </div>

      <div class="flex flex-col-reverse md:flex-row">
        <!-- Column one -->
        <div>
          <!--  Filters are here -->
          <CareersFilters :filters="filters" class="hidden md:block"/>

          <!--  Not Ready to Apply card here -->
          <div
            class="flex flex-col justify-center items-center text-blue-midnight mt-5 md:mt-0 p-7 md:mt-4 md:mr-5 bg-white border border-gray-100 rounded-md shadow-md"
          >
            <h5 class="font-semibold">Not Ready to Apply?</h5>
            <p class="md:w-52 text-center mt-1">
              Join our talent pool and we'll reach out when a job fits your
              skills
            </p>
            <button
              type="submit"
              class="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit Resume
            </button>
          </div>
        </div>

        <!-- Column two -->
        <div class="md:w-2/3 px-3 md:px-0 flex flex-col gap-4">
          <div class="flex justify-between items-center">
            <h3 class="text-blue-midnight font-semibold">
              4815 Current Openings
            </h3>
            <button @click="() => (showFilters = !showFilters)">
              <img
                src="/images/careers/filters.webp"
                alt="filter"
                class="block md:hidden h-10 w-10 mr-1"
              />
            </button>
          </div>
          <div
            v-for="position in positions"
            :key="position"
            class="flex justify-between items-center w-full bg-white p-3 border border-gray-100 rounded-md shadow-md"
          >
            <div>
              <NuxtLink
                to="/careers/job_id"
                class="py-2 cursor-pointer text-blue-500 font-medium"
              >
                {{ position }}
              </NuxtLink>
              <div class="flex gap-5 text-base text-blue-midnight mb-2">
                <span>New York, USA</span>
                <span>2024-02-20 17:43:22</span>
                <span>Full time</span>
              </div>
            </div>

            <img src="\icons\rightIcon.svg" alt="right Icon" class="h-3 w-3" />
          </div>
          <!-- Paginations -->
          <div class="mx-auto pt-5">
            <img
              src="/images/careers/pagination.webp"
              alt="right Icon"
              class="h-7"
            />
          </div>
        </div>
      </div>
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const showFilters = ref(false);
const filters = [
  { name: "Filters", categories: ["Sort Order", "Work Model", "Industry"] },
  { name: "Location", categories: ["Select Country", "Select State", "City"] },
  { name: "Zip/Postal Code", categories: ["Zip/Postal Code"] },
  { name: "Within", categories: ["Radius"] },
];
const positions = [
  "Licensed Nursing Home Administrators",
  "CT Supervisor",
  "Registered Nurse",
  "Certified Nursing Assistant",
  "Physical Therapist",
  "Physical Therapisttwo",
  "Emergency Department RN Sinai Hospital",
];
</script>
