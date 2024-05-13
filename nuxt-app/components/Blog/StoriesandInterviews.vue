<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
      <div class="flex flex-col justify-center items-center">
        <h3 class="text-blue-500 font-medium my-2">Our blog</h3>

        <GenericH2Title
          :title="title"
          titleClass="text-center md:text-start text-blue-midnight mb-5"
        />

        <GenericParagraph
          :paragraphText="paragraph"
          paragraphClass="text-center py-2"
        />
        <div class="flex flex-col md:flex-row gap-3 justify-center items-center">
          <input
            type="email"
            id="default-search"
            class="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            @click="clearSearch"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-cerulean font-medium rounded-lg text-sm px-5 py-3"
          >
            Subscribe
          </button>
        </div>
      </div>
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const title = "Stories and Interviews";
const paragraph =
  "Subscribe to learn about new product features, the latest in technology, solutions, and updates.";
</script>
