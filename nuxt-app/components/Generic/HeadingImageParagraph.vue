<template>
  <div class="flex flex-col items-center justify-center">
    <!-- First Row -->
    <div class="mb-4">
      <GenericH2Title class="text-center mb-4" :title="title" />
    </div>

    <!-- Second Row -->
    <div class="flex flex-col text-center md:text-start " :class="pragraphClass">
      <!-- First Column -->
      <div class="md:w-3/4">
        <div
          class="py-2 flex flex-col gap-6 font-normal text-base text-blue-midnight"
          v-html="paragraph"
        />
      </div>

      <!-- Second Column -->
      <div class="md:w-1/4 p-4 mx-auto" :class="imageClass">
        <!-- Content for second column -->
        <GenericResponsiveImages
          :imgSrcDesktop="imgSrcDesktop"
          :imgSrcMobile="imgSrcMobile"
          imgClass=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    default: "",
  },
  pragraphClass: {
    type: String,
    default: "",
  },
  imageClass: {
    type: String,
    default: "",
  },
  imgSrcDesktop: {
    type: String,
    default: "",
  },
  imgSrcMobile: {
    type: String,
    default: "",
  },
  defaultImgSrc: {
    type: String,
    default: "",
  },
});
</script>
