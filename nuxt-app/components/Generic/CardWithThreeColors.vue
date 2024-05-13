<template>
  <div class="flex flex-col bg-gray-300 rounded-3xl w-56 p-3">
    <h3 class="h3Heading my-4 text-center mx-2 h-16">{{ name }}</h3>
    <div class="bg-white rounded-3xl p-1 h-full">
      <ul class="bg-blue-cerulean rounded-3xl py-2 h-full">
        <li
          v-for="item in items"
          :key="item"
          class="text-base text-white text-center my-2 px-2"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: "",
  },
  items: {
    type: Array,
    default: () => [],
  },
});
</script>
