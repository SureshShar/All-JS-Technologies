<template>
  <ul>
    <li
      v-for="(item, index) in itemsList"
      :key="index"
      class="flex flex-col md:flex-row justify-start items-center md:justify-start md:items-start space-x-2 py-1 text-base text-blue-midnight"
    >
      <img
        class="h-auto self-center md:self-start pt-1"
        :src="imgSrc"
        alt="list style icon"
      />
      <span> {{ item }}</span>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  itemsList: {
    type: Array,
    required: true,
  },
  imgSrc: {
    type: String,
    default: "/icons/checkIcon.svg",
  },
});
</script>
