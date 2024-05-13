<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
      <GenericHeadingImageParagraph 
      :title="title"
      :imgSrcDesktop="imgSrcDesktop"
      :imgSrcMobile="imgSrcMobile"
      :paragraph="paragraph"
      pragraphClass="md:flex-row mr-10"
      />
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const title =
  "IT Consulting Services can assist you in overcoming your technological challenges.";
const imgSrcDesktop = "/images/servicesPage/consultantImg.webp";
const imgSrcMobile = "/images/servicesPage/consultantImgMob.webp";
const paragraph =
  "<p>With one of India’s best IT Staffing Company; you can create a future-ready team. Reduce your workforce administration costs and double the speed you can grow your staff. VIR Consultant is one of India’s fastest-growing staffing firms, offering permanent, temporary, and temp-to-hire solutions to businesses in various industries. We are devoted to providing the best pre-screened people at the most affordable costs to our clients as a top IT staffing agency in India. Before you begin an IT Staffing project, you must first develop a clear plan that outlines the scope of your project based on your specific needs and objectives. You won’t be able to figure out which roles you’ll need to solve your problems without that technique. This early period might be challenging, but we will assist you.</p><p>We focus on your business to understand your particular IT concerns through our IT Consulting Services. We develop a strategy to support your IT transition after doing an extensive study. We can then advise you on the best course of action for your IT initiatives, including identifying the engineering expertise you’ll need to succeed. Our staff knows the context of each organization and assists in selecting individuals who are a great fit for the structure and culture of your company.</p><p>Everyone has their definition of success. Our definition of success is being able to assist our customers in hiring top personnel, implementing and executing important and complicated projects, and putting them on a path to exponential development. That is the most important thing to us. Our skilled recruiters will take you through every process as we hire the top prospects from our huge database.</p><p>Our next aim is to create a collaborative environment that connects our clients with highly trained professionals. We create a win-win situation for all stakeholders in the ecosystem by providing professional, flexible, and agile workforce solutions.</p>";
</script>
