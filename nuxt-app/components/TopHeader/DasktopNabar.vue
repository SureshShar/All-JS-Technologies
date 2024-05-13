<template>
  <nav>
    <ul class="flex justify-center items-center gap-7 p-4 max-h-5">
      <li
        v-for="link in navLinks"
        :key="link.name"
        :class="link.name === 'SERVICES' ? 'group relative' : ''"
      >
        <NuxtLink
          :to="link.route"
          class="flex text-base font-semibold text-white md:text-blue-midnight"
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
        </NuxtLink>
        <div
          class="group-hover:block dropdown-menu absolute left-0 hidden h-auto"
        >
          <GenericNavigationDropDown
            v-if="link.name === 'SERVICES'"
            :nav-links="servicesLinks"
            class="bg-gray-background rounded-lg shadow top-0 w-60"
          />
        </div>
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
</script>
