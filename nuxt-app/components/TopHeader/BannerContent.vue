<template>
  <div class="relative">
    <WrappersSectionWrapper>
      <div
        class="w-full flex flex-col md:flex-row justify-center md:justify-between md:items-start h-64 md:h-[450px]"
      >
        <div
          class="flex flex-col gap-2 md:gap-8 md:w-2/3 justify-center items-center md:justify-start md:items-start"
        >
          <h1
            class="md:text-5xl text-2xl text-center md:text-start text-white font-extrabold -mt-2 md:mt-36"
          >
            {{ title }}
          </h1>
          <p
            v-if="extras"
            class="paragraph text-center md:text-start text-white md:-mt-4"
          >
            {{ extras }}
          </p>

          <!-- Button -->
          <div v-if="showButton" class="flex flex-col xs:flex-row">
            <GenericNavigationButton
              route="/careers"
              headingText="Looking For Work"
              headingClass="bg-white text-Slate-950 text-base md:text-lg font-bold border border-white xs:mr-3"
              class="mb-3 xs:mb-0"
            />
            <GenericNavigationButton
              route="/contact-us"
              headingText="Looking for Talent"
              headingClass="bg-transparent text-base md:text-lg font-semibold text-white border-white"
            />
          </div>
        </div>

        <!-- Avatar image to show on desktop -->
        <div v-if="avatarSrc" class="hidden md:flex md:mt-12 w-banner h-96 relative">
          <Transition name="fade">
            <img
              v-if="isLoad"
              :src="avatarSrc"
              alt="avatar image"
              class="h-96 ml-auto"
            />
            <img
              v-else
              :src="avatarSrc"
              alt="avatar image"
              class="w-auto h-96 ml-auto absolute left-0 right-0"
            />
          </Transition>
        </div>
      </div>
    </WrappersSectionWrapper>

    <img
      src="/images/bannarBackground.webp"
      alt="bannarBackground"
      class="w-full bottom-0 h-16 absolute hidden md:block"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Wellcome",
  },
  extras: {
    type: String,
    default: "",
  },
  showButton: {
    type: Boolean,
    default: false,
  },
  avatarSrc: {
    type: String,
    default: null,
  },
});

const isLoad = ref(true);

// Watches the avatar change
watch(
  () => props.avatarSrc,
  () => {
    isLoad.value = !isLoad.value;
  }
);
</script>

<style>
/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.6s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */

/* .image-transition-enter-active,
.image-transition-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.image-transition-enter-from,
.image-transition-leave-to {
  opacity: 0;
  transform: scale(0.8);
} */
</style>
