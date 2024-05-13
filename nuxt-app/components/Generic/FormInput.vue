<template>
  <div>
    <label
      :for="label"
      class="w-full block mb-2 text-base font-medium text-blue-midnight"
      >{{ label }}</label
    >
    <input
      :type="type"
      :id="label"
      v-model="model"
      class="w-full bg-gray-50 border border-gray-300 text-blue-midnight text-sm rounded-md focus:ring-blue-100 focus:border-blue-300 p-2.5"
      :placeholder="placeholder"
    
    />
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,

  },
  type: {
    type: String,
   
  },
  placeholder: {
    type: String,
    default: "",
  },
  modelValue:{
    type: String,
    default: "",
  }
});

const model = defineModel();
</script>
