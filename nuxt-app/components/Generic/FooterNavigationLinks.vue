<template>
  <ul class="space-y-2">
    <li v-for="link in links" :key="link.name">
      <NuxtLink
        :to="link.route"
        class="hover:underline transition duration-300"
        >{{ link.name }}</NuxtLink
      >
    </li>
  </ul>
</template>

<script setup>
defineProps({
    links: {
        type: Array,
        default: () => [],
    }
})
</script>
