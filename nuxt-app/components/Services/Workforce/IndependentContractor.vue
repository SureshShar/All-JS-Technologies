<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
      <GenericReversibleImageCard
        :image-src="imageSrc"
        :flex-direction-reverse="false"
        :title="title"
        :paragraphText="paragraph"
      />
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const title = "Independent Contractor";
const imageSrc = "/images/servicesPage/workforce/contractor.webp";
const paragraph =
  "When working with independent contractors, many small business owners prefer to hire full-time staff members. Independent contractors have some advantages. The ability to vary hours worked, pay by project, and not have to pay when work isn’t available are all examples of flexibility. Instead of creating a new department within your company to handle non-essential tasks like IT and maintenance, outsource them—easy termination of the relationship without going through the hassle of terminating a team member. Contractors do not have to pay Social Security and Medicare taxes. The hiring process will be simplified, with less paperwork, less reporting, and fewer payments to the IRS.";
</script>
