<template>
  <WrappersBackgroundColorWrapper bannerClass="bg-blue-cerulean">
    <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
      <div class="flex flex-col md:flex-row items-center justify-center md:justify-between">
        <!-- Title Column -->
        <div class="w-full md:w-auto mb-4 md:mb-0 md:mr-4">
          <GenericH2Title :title="title" title-class="text-white text-center md:text-start" />
        </div>

        <!-- Search Bar Column -->
        <div class="w-auto sm:w-96">
          <div class="relative">
            <form class="max-w-md mx-auto">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >Search</label
              >
              <div class="relative">
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                >
                  <img src="/icons/mail.svg" alt="mail icon" class="w-4 h-4" />
                </div>
                <input
                  type="email"
                  id="default-search"
                  class="block w-full p-4 xl:ps-10 ps-8 sm:mr-0 mr-12  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Email"
                  v-model="searchQuery"
                  required
                />
                <button
                  type="submit"
                  @click="clearSearch"
                  class="text-white absolute end-2.5 bottom-2.5  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-cerulean font-medium rounded-lg text-sm px-4 py-2"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
  </WrappersBackgroundColorWrapper>
</template>

<script setup>
const searchQuery = ref("");
const title = "Want To Be Part Of Our Team Careers";

function clearSearch() {
  searchQuery.value = "";
}
</script>
