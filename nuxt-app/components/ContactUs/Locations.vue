<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
      <div
        class="flex flex-col justify-center items-center md:justify-start md:items-start"
      >
        <div class="mx-auto">
          <GenericH2Title
            title="Locations"
            titleClass="text-center text-blue-midnight mb-5"
          />
        </div>

        <h5 class="text-blue-midnight font-semibold text-center my-1">
          Delaware:
        </h5>
        <p class="text-blue-midnight font-medium text-center my-1">
          {{ ADDRESS }}
        </p>
        <div class="flex flex-col">
          <div
            v-for="data in infoData"
            :key="data.name"
            class="text-blue-midnight font-medium text-center md:text-start my-1"
          >
            <span>{{ data.name }}</span>
            <span>
              <a
                :href="`mailto:${data.mail}`"
                class="pl-2 text-blue-800 transition duration-300"
                >{{ data.mail }}</a
              >
            </span>
          </div>
        </div>

        <div class="border-2 border-gray-400 w-full mt-3">
          <iframe
            class="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.411851555685!2d-117.67456842524312!3d34.08458831602322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c333df463fffff%3A0xc29503e2a8aee937!2s1131%20W%206th%20St%20%23210%2C%20Ontario%2C%20CA%2091762%2C%20USA!5e0!3m2!1sen!2sin!4v1711620102872!5m2!1sen!2sin"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
import { ADDRESS, VIR_MAIL, VIR_SALES_MAIL } from "~/helpers/constants";

const infoData = [
  {
    name: "For Sales –",
    mail: VIR_SALES_MAIL,
  },
  {
    name: "For Info – ",
    mail: VIR_MAIL,
  },
];
</script>
