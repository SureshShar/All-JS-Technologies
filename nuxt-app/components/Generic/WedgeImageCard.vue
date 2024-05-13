<template>
  <div
    class="relative flex justify-center items-center py-4 xs:py-auto"
  >
    <GenericResponsiveImages
      :imgSrcDesktop="imgSrcDesktop"
      :imgSrcMobile="imgSrcMobile"
      :imgClass="
        imageDirectionReverse
          ? 'xs:w-128 md:w-auto xs:h-136 md:h-auto px-auto'
          : 'xs:w-120 md:w-auto xs:h-136 md:h-auto px-auto'
      "
    />
    <div
      class="flex justify-center items-center"
      :class="
        imageDirectionReverse
          ? 'absolute top-28 xs:top-36 sm:top-36 md:top-5 lg:top-16 left-12 xs:left-24 sm:left-44 md:left-20'
          : 'absolute top-20 xs:top-24 sm:top-32 md:top-1 lg:top-7 right-12 xs:right-16 sm:right-36 md:right-20'
      "
    >
      <div
        class="flex flex-col justify-center items-start gap-2 xs:gap-5 md:gap-2 lg:gap-4 py-3 md:py-8"
        :class="
          imageDirectionReverse
            ? 'w-56 md:w-64 lg:w-96 '
            : 'w-56 md:w-72 lg:w-96 '
        "
      >
        <h2
          :class="[
            imageDirectionReverse
              ? 'justify-start text-start'
              : 'justify-end text-end',
            'font-bold md:font-semibold text-3xl lg:text-5xl',
          ]"
        >
          {{ title }}
        </h2>

        <GenericParagraph
          :paragraphText="paragraphText"
          :paragraphClass="
            imageDirectionReverse
              ? 'text-start md:py-1 lg:py-2'
              : 'text-end md:py-1 lg:py-2'
          "
        />
        <GenericOutlineRedirectButton
          :route="route"
          :button-label="buttonLabel"
          :button-class="
            imageDirectionReverse ? 'justify-start' : 'justify-end'
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imageDirectionReverse: {
    type: Boolean,
    default: false,
  },
  imgSrcDesktop: {
    type: String,
    require: true,
  },
  imgSrcMobile: {
    type: String,
    require: true,
  },
  defaultImgSrc: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    default: "Wellcome",
  },
  paragraphText: {
    type: String,
    default: "Paragraph text comes here",
  },
  buttonLabel: {
    type: String,
    default: "View More",
  },
  route: { type: String, default: "/" },
});
</script>
