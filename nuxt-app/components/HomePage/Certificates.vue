<template>
  <div
    class="sectionWrapper padding2Y flex flex-col justify-center items-center"
  >
    <GenericH2Title
      :title="title"
      title-class="text-blue-midnight text-center mb-5"
    />

    <div class="w-fit bg-gray-300 p-3 rounded-lg">
      <GenericResponsiveImages
        imgSrcDesktop="/icons/certificatesDesktop.svg"
        imgSrcMobile="/icons/certificatesMob.svg"
        imgClass=""
      />
    </div>
  </div>
</template>

<script setup>
const title = "Our Achievements";
</script>
