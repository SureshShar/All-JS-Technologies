<template>
  <li class="w-full md:w-56 flex flex-col gap-2 text-center border rounded-md border-gray-100 bg-gray-100 drop-shadow-lg mx-auto p-4">
    <div class="mx-auto bg-white border rounded-lg border-white py-2 w-16">
      <img class="w-10 h-10 mx-auto" :src="imageSrc" :alt="name" />
    </div>
    <GenericH3Title class="justify-center" :title="name" />
    <GenericParagraph paragraphClass="text-center" :paragraphText="paragraph" />
  </li>
</template>

<script setup>
defineProps({
  imageSrc: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  paragraph: {
    type: String,
    default: "",
  },
});
</script>
