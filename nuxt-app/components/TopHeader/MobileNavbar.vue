<template>
  <nav
    id="mobNavBar"
    class="bg-gray-200 divide-y divide-gray-200 rounded-l-md shadow w-60"
  >
    <ul class="py-2">
      <li id="mobNavBar" v-for="link in navLinks" :key="link.name">
        <div
          id="mobNavBar"
          class="px-4 text-base text-blue-midnight py-2"
          @click="toggleServicesLinksVisibility(link)"
        >
          <!-- <span> -->
          {{ link.name }}
          <!-- </span> -->
          <!-- <svg
            v-if="link.name === 'SERVICES'"
            class="my-auto text-blue-midnight"
            xmlns="http://www.w3.org/2000/svg"
            width="1.8rem"
            height="1.8rem"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="m7 10l5 5l5-5z" />
          </svg> -->
        </div>
        <Transition name="slide-fade">
          <GenericNavigationDropDown
            v-if="link.name === 'SERVICES' && isVisible"
            :nav-links="servicesLinks"
            @closeDropDown="$emit('closeDropDown')"
            class="w-60 bg-gray-100"
          />
        </Transition>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  navLinks: {
    type: Array,
    default: () => [],
  },
  servicesLinks: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["closeDropDown"]);

// Define reactive data
const isVisible = ref(false);

/**
 * Toggles the visibility state of the navigation card for services links.
 */
const toggleServicesLinksVisibility = async (link) => {
  if (link.name === "SERVICES") {
    isVisible.value = !isVisible.value;
    await navigateTo(link.route);
  } else {
    emit("closeDropDown");
    await navigateTo(link.route);
  }
};
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
