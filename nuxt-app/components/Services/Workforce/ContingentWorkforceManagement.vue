<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
      <div class="w-10/12 mx-auto">
        <GenericParagraph paragraphClass="text-center py-4" :paragraphText="topParagraph"/>
      </div>

      <GenericReversibleImageCard
        :image-src="imageSrc"
        :flex-direction-reverse="true"
        :title="title"
        :paragraphText="paragraph"
      />
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const title = "Contingent Workforce Management";
const imageSrc = "/images/servicesPage/workforce/management.webp";
const topParagraph = "Human resource management (HRM) concentrates on a person’s ability to grow their skills and develop the tools they need to succeed in the business world. As a result of this, both employers and employees benefit from workforce development.";
const paragraph =
  "Manage these risks and seize the opportunity requires an enterprise-wide approach based on broad collaboration across the company, with programs targeted at specific business audiences. While HR outsourcers and contingent worker firms may be internal stakeholders and external advisers and consultants may be outside advisers or consultants, there are several external stakeholders. A company’s contingent workforce management and spending can be transparent if it uses the internal processes and technologies already in place within the organization.";
</script>
