<template>
  <ul>
    <li v-for="link in socialMediaLinks" :key="link.name">
      <a :href="link.route" target="_blank">
        <img :src="link.logoIdentifier" :key="link.name" class="h-10 w-10" />
      </a>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  socialMediaLinks: {
    type: Array,
    required: true,
  },
});
</script>
