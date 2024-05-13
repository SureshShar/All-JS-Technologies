<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
      <div
        class="flex flex-col justify-center items-center md:justify-start md:items-start"
      >
        <h3 class="text-blue-midnight font-medium mb-5 text-base">
          Recent blog posts
        </h3>

        <div class="flex flex-col md:flex-row justify-start">
          <!-- col1 -->
          <div class="md:w-1/2 md:h-1/3 md:pr-5">
            <GenericBlogCard
              imgSrc="/images/blog/blog1.webp"
              titleTop="Olivia Rhye • 20 Jan 2022"
              titleBottom="Common hiring biases at the workplace"
              paragraph="Know 10 most common hiring biases at the workplace and how to avoid them?"
              :buttonLabels="['Leave A Comment ', 'Blog', 'Admin']"
            />
          </div>
          <!-- col2 -->
          <div class="flex flex-col md:w-1/2 md:h-1/3 gap-2">
            <GenericBlogCard
              imageClass="md:w-52 md:h-36"
              cardClass="flex md:flex-row flex-col"
              contentClass="flex flex-col justify-start md:w-1/2 md:pl-4"
              imgSrc="/images/blog/blog2.webp"
              titleTop="Phoenix Baker • 19 Jan 2022"
              titleBottom="How to improve employee engagement"
              paragraph="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get..."
              :buttonLabels="['Blog', 'Admin']"
            />
            <GenericBlogCard
              imageClass="md:w-52 md:h-36"
              cardClass="flex md:flex-row flex-col"
              contentClass="flex flex-col justify-start md:w-1/2 md:pl-4"
              imgSrc="/images/blog/blog3.webp"
              titleTop="Lana Steiner • 18 Jan 2022"
              titleBottom="Professional staffing company for recruitment"
              paragraph="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."
              :buttonLabels="['Blog', 'Admin']"
            />
          </div>
        </div>
      </div>
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
</template>
