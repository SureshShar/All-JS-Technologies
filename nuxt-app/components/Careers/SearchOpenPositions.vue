<template>
  <!-- TODO custom margin top in rem should be made standard -->
  <WrappersPaddingYWrapper class="mt-[35rem] md:mt-36 lg:mt-36 2xl:mt-28">
    <WrappersSectionWrapper>
      <div class="flex md:flex-row flex-col">
        <div class="md:w-1/4"></div>
        <div
          class="md:w-3/4 flex flex-col gap-2 md:gap-5 items-center justify-center md:items-start md:justify-start"
        >
          <!-- Title Column -->
          <div class="w-full md:w-auto mb-4 md:mb-0 md:mr-4 my-3">
            <GenericH2Title :title="title" titleClass="text-center md:text-start"/>
          </div>

          <!-- Search Bar Column -->
          <div class="w-full">
            <div class="relative">
              <form class="mx-0 md:mx-auto" @submit.prevent="submitForm">
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
      <input
        type="email"
        id="default-search"
        class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search Positions"
        v-model="searchQuery"
      />
      <button
        type="submit"
        class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-cerulean font-medium rounded-lg text-sm px-4 py-2"
      >
        Search
      </button>
    </div>
    <!-- Display error messages only if the form is submitted and the email field is empty -->
    <span v-if="submitted && searchQuery.trim() === '' && !isFormSubmittedSuccessfully" class="text-red-500 mt-2 text-sm">Email field is required.</span>
    <!-- Display error messages only if the form is submitted, the email field is not empty, and the email is invalid -->
    <span v-else-if="submitted && !isValidEmail && searchQuery.trim() !== '' && !isFormSubmittedSuccessfully" class="text-red-500 mt-2 text-sm">Please enter a valid email address.</span>
    <!-- Display success message if the form is submitted successfully -->
    <span v-else-if="submitted && isFormSubmittedSuccessfully" class="text-green-500 mt-2 text-sm">Form submitted successfully!</span>
  </form>
            </div>
          </div>
        </div>
      </div>
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
</template>

<!-- <script setup>
const searchQuery = ref("");
const title = "Let’s find you an open position.";

function clearSearch() {
  searchQuery.value = "";
}
</script> -->
<script setup>
import { ref, computed } from 'vue';

const searchQuery = ref('');
const submitted = ref(false);
const isFormSubmittedSuccessfully = ref(false);

// Validate email format
const isValidEmail = computed(() => /\S+@\S+\.\S+/.test(searchQuery.value));

// Function to submit the form
const submitForm = () => {
  submitted.value = true;

  // Check if the email is valid and not empty
  if (!isValidEmail.value || searchQuery.value.trim() === '') {
    return; // Don't submit if the email is invalid or empty
  }

  // Simulate form submission (replace this with your actual form submission code)
  setTimeout(() => {
    isFormSubmittedSuccessfully.value = true;
    setTimeout(() => {
      isFormSubmittedSuccessfully.value = false;
      searchQuery.value = ''; // Clear the input field after 2 seconds
    }, 2000); // Clear input field after 2 seconds
  }, 1000); // Simulate form submission delay
}
</script>
