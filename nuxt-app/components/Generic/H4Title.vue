<template>
  <div class="text-lg archivo-black-regular mt-2 text-blue-cerulean ">
    <h4 :class="titleClass">{{ title }} </h4>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  titleClass: {
    type: String,
    default: "",
  },
});
</script>
