<template>
  <nav class="relative z-10">
    <ul class="py-2">
      <li
        id="mobNavBar"
        v-for="link in navLinks"
        :key="link.name"
        class="pl-8 md:pl-auto hover:font-semibold hover:bg-gray-100 block px-4 text-base text-blue-midnight py-2 cursor-pointer"
        :class="
          link.name === 'Healthcare services' && showHealthwayService
            ? 'md:bg-gray-100'
            : ''
        "
        @click="navigateToPage(link)"
      >
        {{ link.name }}
      </li>

      <!-- navigate to our healthway page -->
      <a
        v-if="showHealthwayService"
        class="absolute w-52 left-8 -bottom-8 shadow-lg rounded-l-md md:rounded-md pl-4 md:pl-auto border border-gray-300 hover:font-semibold bg-gray-200 block px-4 text-base text-blue-midnight py-2 cursor-pointer"
        target="_blank"
        href="https://virhealthway.com/"
        @click="() => (showHealthwayService = false)"
      >
        Healthway
      </a>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  navLinks: {
    type: Array,
    default: () => [],
  },
});

const showHealthwayService = ref(false);

const emit = defineEmits(["closeDropDown"]);

async function navigateToPage(link) {
  if (link.name === "Healthcare services") {
    // await navigateTo(link.route, {
    //   external: true,
    //   open: {target: '_blank'},
    // });
    showHealthwayService.value = !showHealthwayService.value;
    return;
  }

  emit("closeDropDown");
  await navigateTo(link.route);
}
</script>
