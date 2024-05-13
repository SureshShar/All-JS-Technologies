<template>
  <div v-show="!showAnimation">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <div v-show="showAnimation" class="flex justify-center items-center h-screen">
    <img
      src="~/assets/virGif.gif"
      alt="vir animation"
      class="self-center md:w-1/3"
    />
  </div>
</template>

<script setup>
import metaProperties from "~/assets/script/metaProperties.json";

const showAnimation = ref(true);

// A computed ref
const routeName = computed(() => useRoute().name);

// Watch route name directly on a computed property
watch(
  routeName,
  (newRouteName) => {
    if (metaProperties[newRouteName]) {
      useHead(metaProperties[newRouteName]);
    } else {
      useHead({
        title: "VIR consultant",
        // meta: [{ name: "description", content: "My amazing site.Landing page." }],
      });
    }
  },
  { immediate: true }
);

// Code run on client side only
if (process.client) {
  showAnimation.value = true;

  setTimeout(() => {
    showAnimation.value = false;
  }, 3000);
}
</script>