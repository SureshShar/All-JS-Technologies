<template>
  <WrappersBackgroundImageWrapper
    bannarClass="bg-[url('/images/footerBackground.webp')] bg-center"
  >
    <WrappersSectionWrapper>
      <div
        class="flex flex-wrap justify-center text-blue-midnight pt-10 mx-auto"
      >
        <div
          class="flex flex-col items-center  sm:items-start w-full sm:w-1/2 md:w-1/2 lg:w-4/12 sm:text-start text-center space-y-4 my-3"
        >
          <!-- Vir consultant icon -->
          <NuxtLink
            to="/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="~/assets/icons/virLogo.svg"
              alt="vir Top Icon"
              class="w-44  h-24 md:w-36 md:h-20"
            />
          </NuxtLink>
          <p class="text-base sm:mr-10 ">{{ introductoryLines }}</p>

          <!-- Social media links -->
          <GenericSocialMediaLinks
            class="flex gap-3"
            :socialMediaLinks="socialMediaLinks"
          />
        </div>

        <!-- Useful links are here -->
        <div
          class="flex flex-col mt-2 sm:items-start w-full sm:w-1/2 md:w-1/2 lg:w-2/12 sm:text-start space-y-5 my-3"
        >
          <GenericH4Title title="Useful Links" />
          <div class="flex md:flex-col flex-row justify-between md:space-y-2">
            <GenericFooterNavigationLinks :links="usefulLinks" />
          </div>
        </div>

        <div
          class="flex flex-col sm:items-start w-full sm:w-1/2 md:w-1/2 lg:w-3/12 sm:text-start space-y-5 my-2"
        >
          <GenericH4Title title="Services" />
          <GenericFooterNavigationLinks :links="services" />
        </div>

        <div
          class="flex flex-col w-full sm:w-1/2 md:w-1/2 lg:w-3/12 space-y-5 mt-2"
        >
          <GenericH4Title title="Reach Us" class="xl:ml-4 ml-0"/>
          <div class="space-y-2">
            <div class="flex  items-center"> 
              <span class="p-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 19 26"
                  fill="none"
          
                >
                  <path
                    d="M9.5 25.9393C9.653 25.9393 9.798 25.8696 9.893 25.7499C10.265 25.2794 19 14.1766 19 9.24226C19 4.15738 14.738 0.0214844 9.5 0.0214844C4.262 0.0214844 0 4.15738 0 9.24226C0 14.1756 8.735 25.2794 9.107 25.7499C9.202 25.8696 9.347 25.9393 9.5 25.9393ZM5 8.99305C5 6.51989 7.019 4.50727 9.5 4.50727C11.981 4.50727 14 6.51989 14 8.99305C14 11.4662 11.981 13.4788 9.5 13.4788C7.019 13.4788 5 11.4662 5 8.99305Z"
                    fill="#101f5d"
                    
                  />
                </svg>
              </span>
              <div class="flex flex-col text-base xl:mr-20">
                <span class="font-bold transition duration-300"
                  >VIR CONSULTANT LLC</span
                >
                <a
                  href="https://maps.app.goo.gl/pJSpg7hHGdoH6otRA"
                  target="_blank"
                  class="transition duration-300"
                  >{{ ADDRESS }}</a
                >
                <span class="font-semibold transition duration-300"
                  >VIR INFO SERVICES PRIVATE LIMITED</span
                >
                <a
                  href="https://maps.app.goo.gl/751AzE4AgXcZgj8EA"
                  target="_blank"
                  class="transition duration-300 xl:w-[300px]"
                  >Office No. 8 (Ground Floor), Tower-A, Stellar IT Park, C-25,
                  Sector- 62, Noida, Uttar Pradesh, India, 201309</a
                >
              </div>
            </div>
            <div class="flex items-center mb-1">
              <div class="flex items-center flex-col">
              <span class="p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 27 26"
                  fill="none"
                  class="mt-4"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 11.6749V23.2123C0 23.8836 0.264145 24.5273 0.734325 25.002C1.20451 25.4766 1.84221 25.7433 2.50714 25.7433H24.4929C25.1578 25.7433 25.7955 25.4766 26.2657 25.002C26.7359 24.5273 27 23.8836 27 23.2123V11.6749C26.9996 11.2828 26.909 10.8961 26.7353 10.5454C26.5616 10.1947 26.3096 9.88953 25.9991 9.65397L15.0043 1.32701C14.5707 0.999346 14.0436 0.822266 13.5019 0.822266C12.9603 0.822266 12.4332 0.999346 11.9996 1.32701L1.00093 9.65397C0.690427 9.88953 0.438386 10.1947 0.264685 10.5454C0.0909839 10.8961 0.000373379 11.2828 0 11.6749H0ZM13.5 16.3747L5.62564 10.4113L11.9996 5.58686C12.4332 5.2592 12.9603 5.08212 13.5019 5.08212C14.0436 5.08212 14.5707 5.2592 15.0043 5.58686L21.3686 10.4113L13.5 16.3747Z"
                    fill="#101f5d"
                  />
                </svg>
              </span>
              </div>
              <div>
                <a
                  :href="`mailto:${VIR_MAIL}`"
                  class="hover:underline transition duration-300"
                  >{{ VIR_MAIL }}</a
                >
              </div>
            </div>
            <div class="flex items-center">
        <div class="flex items-center flex-col -mt-4">
          <span class="p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 26 27"
                  fill="none"
                >
                  <path
                    d="M25.2331 23.3476C25.2331 23.3476 19.3115 31.7705 6.84421 19.3361C-5.69553 6.81276 2.83209 0.990765 2.83209 0.990765C3.09917 0.723552 3.42086 0.516792 3.77527 0.384545C4.12969 0.252298 4.50853 0.197665 4.88602 0.224363C5.26351 0.25106 5.63081 0.35846 5.96294 0.539261C6.29507 0.720062 6.58423 0.970023 6.81078 1.27215L9.21062 4.47656C9.59204 4.98394 9.77719 5.61133 9.73216 6.24373C9.68713 6.87612 9.41493 7.47116 8.96544 7.91978L6.85164 10.0301C6.85164 10.0301 6.85164 11.8924 10.5851 15.6189C14.3186 19.3453 16.1854 19.3453 16.1854 19.3453L18.2992 17.235C18.7483 16.7866 19.3448 16.5149 19.979 16.47C20.6131 16.4251 21.2421 16.61 21.7504 16.9906L24.9489 19.3861C25.25 19.6128 25.499 19.9012 25.6791 20.2317C25.8592 20.5622 25.9663 20.9274 25.9933 21.3025C26.0202 21.6777 25.9663 22.0543 25.8352 22.407C25.7041 22.7597 25.4988 23.0804 25.2331 23.3476V23.3476Z"
                    fill="#101f5d"
                  />
                </svg>
              </span>
              <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.28919 0.47163C5.17131 0.851055 2.4741 2.75642 1.08426 5.56911C-0.181866 8.1261 -0.181866 11.1945 1.08426 13.7432C1.22035 14.0113 1.32758 14.2546 1.32758 14.2835C1.32758 14.3165 1.03889 15.3929 0.68421 16.6755C0.329531 17.9623 0.0490873 19.0263 0.0614598 19.0387C0.0738324 19.051 1.18324 18.7706 2.52359 18.42L4.96098 17.7808L5.42289 17.9994C6.22298 18.387 7.01482 18.6304 7.92626 18.783C8.4789 18.8737 9.61717 18.9067 10.2152 18.849C12.0216 18.6716 13.8032 17.954 15.1848 16.8364C15.589 16.5064 16.4221 15.6486 16.7273 15.2444C17.6676 13.9866 18.2697 12.5472 18.5089 10.9677C18.5996 10.3779 18.612 9.02105 18.5336 8.45191C18.2614 6.5053 17.4531 4.78139 16.1664 3.40392C14.6817 1.80786 12.8753 0.842806 10.7513 0.512873C10.1657 0.42214 8.88719 0.40152 8.28919 0.47163ZM6.74675 5.47838C6.89109 5.53612 6.99832 5.74645 7.43136 6.79399C7.78192 7.6477 7.80254 7.72606 7.7613 7.8539C7.70768 8.01062 7.55509 8.23745 7.23752 8.60863C7.08905 8.78597 7.01894 8.90557 7.01894 8.9798C7.02307 9.3551 8.19846 10.7326 8.96143 11.2563C9.43983 11.5863 10.2894 11.9987 10.4874 11.9987C10.6152 11.9987 10.6688 11.9657 10.8586 11.7595C10.9823 11.6316 11.205 11.3718 11.3493 11.1821C11.4978 10.9883 11.6545 10.8316 11.7081 10.8192C11.803 10.7944 12.2731 11.0007 13.4114 11.5574C13.8321 11.7636 13.9352 11.8337 13.9641 11.9286C14.0177 12.0771 13.9434 12.5596 13.8238 12.8772C13.6754 13.2648 13.2506 13.6236 12.6196 13.8917C12.3804 13.9907 12.3185 13.9989 11.7824 13.9948C11.2668 13.9948 11.1679 13.9824 10.8544 13.8793C9.79451 13.5288 9.1264 13.2195 8.44178 12.7617C7.386 12.0523 6.59828 11.2522 5.69508 9.97373C4.71353 8.57563 4.5032 7.4951 5.01872 6.45168C5.21668 6.04339 5.53424 5.67634 5.79406 5.54849C5.96315 5.46188 6.06213 5.44126 6.32196 5.44126C6.4993 5.44126 6.68901 5.45776 6.74675 5.47838Z" fill="#101F5D"/>
</svg>
        </div>
              <div>
                <a
                  :href="`tel:${CONTACT_NUMBER}`"
                  class="hover:underline transition duration-300"
                >
                  {{ CONTACT_NUMBER }} </a
                ><br />
                <a
                  href="https://api.whatsapp.com/send?phone=17476662169"
                  target="_blank"
                  class="hover:underline transition duration-300"
                >
                  {{ CONTACT_NUMBER }} </a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrappersSectionWrapper>
  </WrappersBackgroundImageWrapper>
  <div
    class="flex flex-wrap flex-col md:flex-row justify-center bg-blue-cerulean text-white w-full py-2 px-3"
  >
    <p>Copyright © VIR Consultants LLC.</p>
  </div>
</template>

<script setup>
import { ADDRESS, VIR_MAIL, CONTACT_NUMBER } from "~/helpers/constants";

// const currentYear = ref(new Date().getFullYear());
const introductoryLines =
  "A global strategy consulting brand that aims to connect the right human talent to the right resources. A trusted digital solution for all your recruitment-related needs and requirements.";
const socialMediaLinks = [
  {
    name: "Facebook",
    logoIdentifier: "/icons/facebook.svg",
    route: "https://www.facebook.com/virconsultant?mibextid=LQQJ4d",
  },
  {
    name: "Instagram",
    logoIdentifier: "/icons/instagram.svg",
    route: "https://www.instagram.com/virconsultant/",
  },
  {
    name: "Linkdin",
    logoIdentifier: "/icons/linkdin.svg",
    route: "https://www.linkedin.com/company/vir-consultants-llc",
  },
  {
    name: "X",
    logoIdentifier: "/icons/x.svg",
    route: "https://twitter.com/VirConsultant",
  },
];

const usefulLinks = [
  {
    name: "About Us",
    route: "/about-us",
  },
  {
    name: "Blog",
    route: "/blog",
  },
  {
    name: "Contact Us",
    route: "/contact-us",
  },
  {
    name: "Careers",
    route: "/careers",
  },
  {
    name: "Capabilities",
    route: "/capabilities",
  },
  {
    name: "Corporate Deck",
    route: "/corporate-deck",
  },
  {
    name: "FAQs",
    route: "/",
  },
  {
    name: "Privacy Policy",
    route: "/privacy-policy",
  },
  {
    name: "Terms & Condtions",
    route: "/terms-and-conditions",
  },
];

const services = [
  {
    name: "Talent Solutions",
    route: "/services/talent",
  },
  {
    name: "Workforce Solutions",
    route: "/services/workforce/",
  },
  {
    name: "Industry Solutions",
    route: "/services/industry-solutions",
  },
  {
    name: "Technology Solutions",
    route: "/services/technology-solutions",
  },
  {
    name: "Travel & Tourism",
    route: "/",
  },
];
</script>
