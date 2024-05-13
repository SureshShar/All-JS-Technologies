<template>
  <div
    class="w-full flex bg-contain bg-center bg-no-repeat"
    :class="buttonClass"
  >
    <nuxt-link
      :to="route"
      class="flex items-center text-blue-midnight text-center text-sm hover:text-white font-bold border border-blue-950 rounded-lg hover:bg-blue-midnight py-2 mb-2 space-x-2 px-3"
    >
      <span>{{ buttonLabel }} </span>
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.57031 1.58203L6.17188 0.980469C6.44531 0.734375 6.85547 0.734375 7.10156 0.980469L12.4336 6.28516C12.6797 6.55859 12.6797 6.96875 12.4336 7.21484L7.10156 12.5469C6.85547 12.793 6.44531 12.793 6.17188 12.5469L5.57031 11.9453C5.32422 11.6719 5.32422 11.2617 5.57031 10.9883L8.87891 7.84375H1.03125C0.648438 7.84375 0.375 7.57031 0.375 7.1875V6.3125C0.375 5.95703 0.648438 5.65625 1.03125 5.65625H8.87891L5.57031 2.53906C5.32422 2.26562 5.29688 1.85547 5.57031 1.58203Z"
          fill="currentColor"
        />
      </svg>
    </nuxt-link>
  </div>
</template>

<script setup>
defineProps({
  buttonLabel: {
    type: String,
    default: "View more",
  },
  buttonClass: {
    type: String,
    default: "justify-center items-center md:justify-start md:items-start",
  },
  route: {
    type: String,
    default: "/",
  },
});
</script>
