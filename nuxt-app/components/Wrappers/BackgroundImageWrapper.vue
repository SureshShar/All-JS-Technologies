<template>
  <div class="bg-cover bg-no-repeat" :class="bannarClass">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  bannarClass: {
    type: String,
    default: "",
  },
});
</script>
