<template>
  <div :class="cardClass">
    <img :class="imageClass" :src="imgSrc" :alt="titleBottom" />
    <div :class="contentClass">
      <h4 class="text-start text-blue-500 font-medium my-1">
        {{ titleTop }}
      </h4>
      <NuxtLink
        to="/blog/blog_id"
        class="flex justify-between items-center text-lg font-semibold text-blue-midnight"
      >
        <span>{{ titleBottom }}</span>
        <img
          v-if="showIcon"
          class="w-5 h-5"
          src="/icons/arrow-up-right.svg"
          alt="arrow-up-right"
        />
      </NuxtLink>
      <GenericParagraph
        :paragraphText="paragraph"
        paragraphClass="text-start py-2"
      />
      <div class="flex justify-start items-center mt-2.5 mb-5">
        <span
          v-for="(label, index) in buttonLabels"
          :key="label"
          :class="[
            index % 2 === 0
              ? 'text-blue-800'
              : index % 3 === 0
              ? 'text-stone-700'
              : 'text-red-600',
          ]"
          class="bg-gray-200 px-1 text-xs font-semibold pr-2.5 py-0.5 rounded ms-3"
          >{{ label }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  cardClass: {
    type: String,
    default: "flex w-full flex-col",
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
  imageClass: {
    type: String,
    default: "",
  },
  contentClass: {
    type: String,
    default: "py-3",
  },
  imgSrc: {
    type: String,
    default: "",
  },
  titleTop: {
    type: String,
    default: "",
  },
  titleBottom: {
    type: String,
    default: "",
  },
  paragraph: {
    type: String,
    default: "",
  },
  buttonLabels: {
    type: Array,
    default: () => [],
  },
});
</script>
