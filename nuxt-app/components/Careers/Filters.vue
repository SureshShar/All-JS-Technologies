<template>
  <div
    class="p-7 md:mr-5 bg-white border border-gray-100 rounded-md shadow-md"
  >
    <div v-for="filter in filters" :key="filter.name" class="flex flex-col justify-center md:justify-start items-center md:items-start">
      <h3 class="text-blue-500 font-medium my-2">{{ filter.name }}</h3>
      <div
        v-for="categorie in filter.categories"
        :key="categorie"
        class="flex justify-between text-blue-midnight my-2 w-full md:w-48 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md border border-gray-100 shadow-md text-base px-5 py-2.5 text-center inline-flex items-center"
      >
        <span>
          {{ categorie }}
        </span>
        <svg
          class="w-2.5 h-2.5 ms-3 text-blue-midnight"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center">
      <button
        type="submit"
        class="text-white my-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Refine Results
      </button>
      <button
        class="text-blue-midnight hover:font-semibold font-medium text-base w-full sm:w-auto px-5 text-center"
      >
        Clear Filters
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  filters: {
    type: Array,
    default: () => [],
  },
});
</script>
