<template>
  <div class="md:bg-[#18527E] w-full h-64 md:h-[450px] relative overflow-hidden">
    <!-- For desktop view banner image with transition -->
    <div class="hidden md:flex w-full relative">
      <Transition name="slide-fade">
        <img
          v-if="isLoad"
          class="w-full min-h-[500px] h-full"
          :src="bannerURL"
          alt="Desktop view banner image"
        />
        <img
          v-else
          class="w-full min-h-[500px] absolute"
          :src="bannerURL"
          alt="Desktop view banner image"
        />
      </Transition>
    </div>

    <!-- For mobile view banner image -->
    <div class="w-full block md:hidden">
      <img
        class="w-screen h-64 md:h-[450px]"
        src="/images/BannarHomePageMobile.webp"
        alt="mobile view banner image"
      />
    </div>

    <!-- Content which render on banner image i.e. title and avatar image -->
    <div class="absolute top-0 z-0 w-full h-full">
      <TopHeaderBannerContent
        :showButton="showButton"
        :title="title"
        :extras="extras"
        :avatarSrc="avatarSrc"
      />
    </div>
  </div>
</template>

<script setup>
const title = ref("");
const extras = ref("");
const showButton = ref(true);


const avatarSrc = ref(null);
const bannerURL = ref("/images/BannarHomePageMobile.webp");
const isLoad = ref(true);

const routeName = computed(() => useRoute().name);

// watch works directly on a ref
watch(
  
  routeName,
  (newRouteName) => {
    isLoad.value = !isLoad.value;

    if (newRouteName === "index") {
      title.value = "LETS START SOMETHING BIG TOGETHER...";
      showButton.value = true;
      extras.value = "";
      avatarSrc.value = "/images/homePageAvatar.webp";
      bannerURL.value = "/images/BannarHomePage.webp";
    } else if (newRouteName === "services") {
      title.value = "Our Services ";
      showButton.value = false;
      extras.value = "";
      avatarSrc.value = "/images/servicesPage/servicesBannerAvatar.webp";
      bannerURL.value = "/images/servicesPage/Itconsultant.webp";
    } else if (newRouteName === "services-it-consulting-services") {
      title.value = "IT Consulting Services";
      extras.value = "Strategic, Operational, Tech-Effective";
      showButton.value = false;
      avatarSrc.value = "/images/servicesPage/Itconsultantavatar.webp";
      bannerURL.value = "/images/servicesPage/Itconsultant.webp";
    } else if (newRouteName === "services-industry-solutions") {
      title.value = "Industry Solutions";
      extras.value = "Transform your Growth with our Industry Solutions";
      showButton.value = false;
      avatarSrc.value = "/images/servicesPage/industrySolutions/ISAvatar.webp";
      bannerURL.value =
        "/images/servicesPage/industrySolutions/industrySolBanner.webp";
    } else if (newRouteName === "services-talent") {
      title.value = "Talent Solutions";
      extras.value = "High-Level Professional Networks";
      showButton.value = false;
      avatarSrc.value = "/images/servicesPage/talentSolutions/talentAvatar.webp";
      bannerURL.value =
        "/images/servicesPage/talentSolutions/talentSolutionsBanner.webp";
    } else if (newRouteName === "services-technology-solutions") {
      title.value = "Technology Solutions";
      extras.value = "Achieve Agility with Effective Talent Solutions";
      showButton.value = false;
      avatarSrc.value =
        "/images/servicesPage/technologySolutions/technologySolBannerAvatar.webp";
      bannerURL.value =
        "/images/servicesPage/technologySolutions/technologySolBanner.webp";
    } else if (newRouteName === "services-workforce") {
      title.value = "Workforce";
      extras.value = "Digital Workforce Support Online";
      showButton.value = false;
      avatarSrc.value = "/images/servicesPage/workforce/femaleEmploy.webp";
      bannerURL.value = "/images/servicesPage/workforce/workforceBanner.webp";
    } else if (newRouteName === "about-us") {
      title.value = "About Us";
      showButton.value = false;
      extras.value =
        "We develop distinctive and adaptive strategies that help you succeed in today’s complex and uncertain world.";
      avatarSrc.value = "/images/aboutUs/aboutUsBannerAvatar1.webp";
      bannerURL.value = "/images/aboutUs/aboutUsBanner.webp";
    } else if (newRouteName === "careers") {
      title.value = "CAREERS";
      showButton.value = false;
      extras.value =
        "   VIR Consultants provides a unique platform for people with a passion for consulting to explore their true potential.";
      avatarSrc.value = "/images/careers/careersBannerAvatar.webp";
      bannerURL.value = "/images/careers/careersBanner.webp";
    } else if (newRouteName === "contact-us") {
      title.value = "Submit A Staffing Request";
      showButton.value = false;
      extras.value =
        " To succeed in the marketplace today, your business needs top talent. We can assist. We provide exceptional Talent that truly adds value to your company.";
      //   avatarSrccontact.value = "/images/contactUs/contactusBannerAvatar.webp";
      // bannerURL.value = "/images/contactUs/contactusBanner.webp";
       avatarSrc.value = "/images/contactUs/contactusBannerAvatar.webp";
        bannerURL.value = "/images/contactUs/contactusBanner.webp";
    } else if (newRouteName === "privacy-policy") {
      title.value = "Privacy Policy";
      showButton.value = false;
      extras.value = "";
      avatarSrc.value = "/images/privacyPolicyAvatar.webp";
      bannerURL.value =
        "/images/servicesPage/industrySolutions/industrySolBanner.webp";
    } else if (newRouteName === "terms-and-conditions") {
      title.value = "Terms & Conditions";
      showButton.value = false;
      extras.value = "";
      avatarSrc.value = "/images/TermsAndConditionavatar.webp";
      bannerURL.value =
        "/images/servicesPage/industrySolutions/industrySolBanner.webp";
    } else if (newRouteName === "capabilities") {
      title.value = "Our Capability Statement";
      showButton.value = false;
      extras.value = "";
      avatarSrc.value = "/images/capabilities/capabalitiesBannerAvatar.webp";
      bannerURL.value =
        "/images/servicesPage/industrySolutions/industrySolBanner.webp";
    } else if (newRouteName === "corporate-deck") {
      title.value = "Corporate Deck";
      showButton.value = false;
      extras.value = "";
      avatarSrc.value = "/images/corporateDeck/corporateDeckBannerAvatar.webp";
      bannerURL.value =
        "/images/servicesPage/industrySolutions/industrySolBanner.webp";
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
</style>
