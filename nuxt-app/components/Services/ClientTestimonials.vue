<template>
  <div class="max-w-[1010px] mx-auto relative">
  
 <div class="flex justify-between relative">
<div>
  <h1 class="md:text-4xl text-3xl archivo-black-regular lg:mt-12 mt-8">Client Ratings</h1>
</div>
 
 </div>
    <div class="swiper-container mySwiper">
      <swiper
        :spaceBetween="3"
 
        :slidesPerView="3"
        :grabCursor="true"
        :pagination="pagination"
        :navigation="true"
        :modules="modules"
        :autoplay="autoplay"
        :breakpoints="breakpoints"
        ref="mySwiper"
      >

        <template v-for="(testimonial, index) in testimonials" :key="index">

          <swiper-slide>
            <div class="relative w-full h-full overflow-hidden p-1">
              <div class="flex transition-transform duration-500 ease-in-out lg:gap-4 md:gap-3 mt-6 md:mt-9 mx-auto"
                   :style="{ transform: `translateX(-${currentSlideIndex * slideWidth}%)`, transition: sliding ? 'transform 0.5s ease' : '' }">
                <div class="flex-none w-full flex-col items-center justify-center">
                  <div class="flex flex-col max-w-[460px] bg-white border border-gray-100 rounded-lg shadow-md p-4 mb-5">
                    <div class="flex justify-between mb-2">
                      <div class="flex">
                        <img :src="testimonial.imageSrc" alt="Image" class="mt-1 w-9 h-9"/>
                        <div class="pt-0">
                          <h4 class="text-sm font-semibold">{{ testimonial.name }}</h4>
                          <span class="text-xs">{{ testimonial.place }}</span>
                        </div>
                      </div>
                      <GenericRatingStars class="mb-2"/>
                    </div>
                    <!-- <GenericParagraph :paragraphText="testimonial.comment"/> -->
                  </div>
                </div>
              </div>
          <div class="mt-5">
            <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex">
                  <span v-for="(dot, index) in dots" :key="index" @click="goToSlide(index)" class="w-2 h-2 rounded-full bg-gray-300 mx-1 cursor-pointer" :class="{ 'bg-red-500': index === currentSlideIndex }"></span>
                </div>
          </div>
            </div>
          </swiper-slide>
        </template>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modules = [Autoplay, Pagination, Navigation];
    const autoplay = {
      delay: 2500,
      disableOnInteraction: false,
    };
    const breakpoints = {
      '280': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '430': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '640': {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 5,
      },
    };
    return {
      modules,
      autoplay,
      breakpoints,
    };
  },
  data() {
    return {
      testimonials: [
      {
    name: "Nikki Mcmiller",
    imageSrc: "/icons/servicesPage/testimonials/avatar2.svg",
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    place: "Aggreko",
  },
  {
    name: "Lisa Delucia",
    imageSrc: "/icons/servicesPage/testimonials/avatar2.svg",
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    place: "Sonoco",
  },
  {
    name: "Kim Bryce",
    imageSrc: "/icons/servicesPage/testimonials/avatar2.svg",
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    place: "Aristocrat",
  },
  {
    name: "Heather Van Elk",
    imageSrc: "/icons/servicesPage/testimonials/avatar1.svg",
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    place: "Extra Space Storage",
  },
  {
    name: "Vernon Clark",
    imageSrc: "/icons/servicesPage/testimonials/avatar1.svg",
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    place: "Southwire Company",
  },
  {
    name: "Priyanka Tolia",
    imageSrc: "/icons/servicesPage/testimonials/avatar2.svg",
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    place: "CommScope",
  },
  {
    name: "Eli Henderson",
    imageSrc: "/icons/servicesPage/testimonials/avatar1.svg",
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    place: "Protective",
  },
        // Other testimonials data
      ],
    };
  },
  computed: {
    pagination() {
      return {
        clickable: true,
      };
    },
  },
  methods: {
    prevSlide() {
      this.$refs.mySwiper.swiper.slidePrev();
    },
    nextSlide() {
      this.$refs.mySwiper.swiper.slideNext();
    },
  },
};
</script>

<style>
  .swiper-button-next,
  .swiper-button-prev {
    display: flex;
    justify-content: center;
   
    
  }
.swiper-button-prev {
position: absolute;
}
  .swiper-button-next:after {
    font-size: 19px !important;
    margin-top: 12px;
    z-index: 20;
    color: #0F3049 !important;
    font-weight: 800;
    margin-left: 34px;
    
  }

  .swiper-button-prev:after {
    font-size: 19px !important;
    margin-top: 12px;
    color: #0F3049 !important;
    font-weight: 800;
    margin-right: 34px;
 
  }
</style>
