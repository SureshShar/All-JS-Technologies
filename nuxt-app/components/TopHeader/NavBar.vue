<template>
  <div class="sticky md:static top-0 bg-gray-background z-10">
    <WrappersSectionWrapper>
      <div
        class="flex flex-wrap items-center justify-between mx-auto py-1 md:py-1"
      >
        <NuxtLink
          to="/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="~/assets/icons/virLogo.svg"
            alt="vir Top Icon"
            class="w-18 h-10 md:w-32 md:h-20"
          />
        </NuxtLink>

        <!-- Hamburger icon -->
        <button
          id="mobNavBar"
          type="button"
          class="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-blue-midnight rounded-lg md:hidden ring-2 ring-gray-200"
          :class="isVisible ? 'bg-gray-100' : ''"
          @click="toggleVisibility"
        >
          <span class="sr-only">Open main menu</span>
          <img
            id="mobNavBar"
            src="~/assets/icons/hamburger.svg"
            class="h-6 w-6"
            alt="hamburger icon"
          />
        </button>

        <!-- Desktop Nav links -->
        <Transition name="slide-fade">
          <TopHeaderMobileNavbar
            v-if="isVisible"
            :nav-links="navLinks"
            :servicesLinks="servicesLinks"
            @closeDropDown="toggleVisibility"
            class="block md:hidden absolute right-0 top-14 z-10"
          />
        </Transition>

        <!-- Desktop Nav links -->
        <TopHeaderDasktopNabar
          :nav-links="navLinks"
          :servicesLinks="servicesLinks"
          class="hidden w-full md:block md:w-auto"
        />
      </div>
    </WrappersSectionWrapper>
  </div>
</template>

<script setup>
// Define reactive data
const isVisible = ref(false);
const navLinks = [
  {
    name: "HOME",
    route: "/",
  },
  {
    name: "SERVICES",
    route: "/services",
  },
  {
    name: "ABOUT US",
    route: "/about-us",
  },
  {
    name: "CAREERS",
    route: "/careers",
  },
  {
    name: "BLOG",
    route: "/blog",
  },
  {
    name: "CONTACT US",
    route: "/contact-us",
  },
];
const servicesLinks = [
  {
    name: "IT Consulting",
    route: "/services/it-consulting-services",
  },
  {
    name: "Industry Solutions",
    route: "/services/industry-solutions",
  },
  {
    name: "Talent Solutions",
    route: "/services/talent",
  },
  {
    name: "Technology Solutions",
    route: "/services/technology-solutions",
  },
  {
    name: "Workforce",
    route: "/services/workforce/",
  },
  {
    name: "Healthcare services",
    route: "https://virhealthway.com/",
  },
];

/**
 * Toggles the visibility state of the mobile navigation card.
 * on mobile view
 */
const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};

/**
 * Handle outside click to hide mobile navigation dropdown
 */
function closeMobNavBar(event) {
  if (event.target.id !== "mobNavBar") {
    // console.log("Clicked outside");
    isVisible.value = false;
  } else {
    // console.log("Clicked inside");
  }
}

onMounted(() => {
  document.addEventListener("click", closeMobNavBar);
});

onUnmounted(() => {
  document.removeEventListener("click", closeMobNavBar);
});
</script>

<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
