<template>
  <WrappersPaddingYWrapper>
    <div class="flex flex-col justify-center items-center">
      <GenericH2Title
        class="justify-center md:justify-start mb-3"
        :title="title"
      />

      <div Class="bg-white w-full md:pt-5 pb-5">
        <ul class="flex justify-center items-center h-20 md:h-24 my-2">
          <!-- <TransitionGroup name="list" tag="li"> -->
          <li
            v-for="item in liveItems"
            :key="item"
            class="flex-shrink-0 mr-4 md:mr-6"
          >
            <div class="flex justify-center items-center rounded-md">
              <img
                :src="`/images/ourClients/${item}`"
                :alt="item + 'Icon'"
                class="w-16 md:w-40 md:max-h-24"
              />
            </div>
          </li>
          <!-- </TransitionGroup> -->
        </ul>

        <div class="flex justify-center items-center gap-4 md:mt-5">
          <button
            @click="scrollCarousel('left')"
            class="bg-gray-200 p-2 rounded-full shadow-md"
            :disable="lastItemIndex === Object.keys(liveItems).length - 1"
          >
            <svg
              :class="
                lastItemIndex === Object.keys(liveItems).length - 1
                  ? 'text-gray-300'
                  : 'text-blue-midnight'
              "
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 m:h-6 m:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            @click="scrollCarousel('right')"
            class="bg-gray-200 p-2 rounded-full shadow-md"
            :disable="lastItemIndex === items.length - 1"
          >
            <svg
              :class="
                lastItemIndex === items.length - 1
                  ? 'text-gray-300'
                  : 'text-blue-midnight'
              "
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 m:h-6 m:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const title = "Our Clients";
const liveItems = ref([
  "aggreco.webp",
  "benchmark.webp",
  "dupont.webp",
  "hcl.webp",
]);
const lastItemIndex = ref(3);
const items = [
  "aggreco.webp",
  "benchmark.webp",
  "dupont.webp",
  "hcl.webp",
  "hydro.webp",
  "leviant.webp",
  "moog.webp",
  "saintgobin.webp",
  "scotts.webp",
  "sonoko.webp",
  "southWire.webp",
  "techMahindra.webp",
  "verdantes.webp",
  "wiproPari.webp",
  "wm.webp",
  "ale.webp",
  "arcinic.webp",
  "bd.webp",
  "clarios.webp",
  "gd.webp",
  "genepact.webp",
  "henkel.webp",
  "hexaware.webp",
  "incedo.webp",
  "infosys.webp",
  "johndeere.webp",
  "l3harris.webp",
  "lambweston.webp",
  "mondelez.webp",
  "panelmatic.webp",
  "random.webp",
  "random2.webp",
  "sanofi.webp",
];

function scrollCarousel(direction) {
  const temp = [...liveItems.value];
  if (direction === "right") {
    // return if last item in right
    if (lastItemIndex.value === items.length - 1) return;
    temp.shift();
    temp.push(items[lastItemIndex.value + 1]);
    lastItemIndex.value++;
  } else {
    // return if last item in left here 3 is number of items shown minus one
    if (lastItemIndex.value === 3) return;
    temp.pop();
    temp.unshift(items[lastItemIndex.value - 4]);
    lastItemIndex.value--;
  }

  liveItems.value = temp;
}
</script>

<style scoped>
.list-enter-active,
.list-enter-active {
  transition: all 1s ease;
}
.list-enter-from {
  opacity: 0;
  /* transform: translateX(5px); */
}
.list-leave-to {
  opacity: 0;
  /* transform: translateX(-5px); */
}
</style>
