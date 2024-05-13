<template>
  <WrappersPaddingYWrapper>
    <WrappersBackgroundColorWrapper>
      <WrappersBackgroundImageWrapper
        bannarClass="max-w-screen-2xl mx-auto bg-[url('/images/aboutUsComponentBackgroundImg.webp')] bg-left-bottom"
      >
        <WrappersSectionWrapper>
          <GenericImageCard :image-src="imageSrc">
            <div class="font-normal text-base text-blue-midnight py-2">
              <p class="mb-1 text-center md:text-start">{{ paragraph1 }}</p>
              <p class="mb-1 text-center md:text-start">{{ paragraph2 }}</p>
              <p class="mb-1 text-center md:text-start">{{ paragraph3 }}</p>
              <p class="text-center md:text-start">{{ paragraph4 }}</p>
            </div>
          </GenericImageCard>
        </WrappersSectionWrapper>
      </WrappersBackgroundImageWrapper>
    </WrappersBackgroundColorWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const imageSrc = "/images/aboutUs/aboutUsImage.webp";
const paragraph1 =
  "A global strategy consulting brand that aims to connect the right talent to the right clients. A trusted digital solution for all your recruitment-related needs.";
const paragraph2 =
  "We are a company with technical visionaries to achieve high-quality professional excellence and perfection in delivering valuable solutions. Working effectively and efficiently, we help you to grow by offering the right resources.";
const paragraph3 =
  "IT Staffing has been increasingly becoming one competitive field. Coping up with the growing trends and developing new strategies demands quality and talent recruitment. With our inspirational persuasion of staffing techniques, we consistently work to staff the best workforce for your venture to grow together with the rapid technological advancements in the competitive workforce.";
const paragraph4 =
  "We let you have better results, and not just reports with productive staffing techniques, consultation methods, and innovative strategies. Working as a business partner, we share our clients’ aspirations understand their requirements and align their expectations with valuable outcomes. By customizing our strategies as per our client’s recommendations, we deliver services in a completely transparent way. Known for maintaining long-standing relationships with our clients, all employees are well trained and provide data-driven insights and potential outcomes.";
</script>
