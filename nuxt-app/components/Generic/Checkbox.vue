<template>
  <div class="flex items-center mb-4">
    <input
      :id="label"
      type="checkbox"
      v-model="modal"
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
    />
    <label :for="label" class="ms-2 text-sm font-semibold text-blue-midnight">{{
      label
    }}</label>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
});

const modal = defineModel();
</script>
