<template>
  <div class="w-full">
    <label
      for="small"
      class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
      >{{ label }}</label
    >
    <select
      id="small"
      v-model="modal"
      class="block w-full p-3 mb-6 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: () => [],
  },
});

const modal = defineModel();
</script>
