<template>
  <WrappersSectionWrapper>
    <div class="flex flex-col md:flex-row justify-center items-center">
      <!-- Support contact -->
      <div
        class="flex flex-col justify-center items-center w-full md:w-1/3 md:m-5 p-7 bg-white md:border border-gray-100 rounded-md md:shadow-md"
      >
        <img
          src="/icons/contactUs/phone.svg"
          alt="phone Icon"
          class="w-7 h-7 mb-3"
        />
        <a
          :href="`tel:${CONTACT_NUMBER}`"
          class="text-blue-midnight font-medium text-center"
        >
          {{ CONTACT_NUMBER }}
        </a>
      </div>
      <!-- Support email -->
      <div
        class="flex flex-col justify-center items-center w-full md:w-1/3 m-3 p-7 bg-white md:border border-gray-100 rounded-md md:shadow-md"
      >
        <img
          src="/icons/contactUs/support.svg"
          alt="phone Icon"
          class="w-7 h-7 mb-3"
        />
        <a
          :href="`mailto:${VIR_MAIL}`"
          class="text-blue-midnight font-medium text-center"
        >
          {{ VIR_MAIL }}
        </a>
      </div>
    </div>
  </WrappersSectionWrapper>
</template>

<script setup>
import { VIR_MAIL, CONTACT_NUMBER } from "~/helpers/constants";
</script>
