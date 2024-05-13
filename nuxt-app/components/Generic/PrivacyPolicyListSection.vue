<template>
  <h4 class="h4Heading text-center md:text-start py-3">
    {{ title }}
  </h4>

  <div class="flex flex-row">
    <svg
      class="hidden md:block"
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2"
      />
    </svg>
    <div class="w-full">
      <p class="paragraph text-center md:text-start" v-html="paragraph"></p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  paragraph: {
    type: String,
    default: "",
  },
});
</script>
