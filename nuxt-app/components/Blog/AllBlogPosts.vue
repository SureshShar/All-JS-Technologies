<template>
  <WrappersPaddingYWrapper>
    <WrappersSectionWrapper>
      <div
        class="flex flex-col justify-center items-center md:justify-start md:items-start"
      >
        <h3 class="text-blue-midnight font-medium mb-5 text-base">
          All blog posts
        </h3>

        <div
          class="flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              v-for="(blog, index) in blogs"
              :key="index"
              class="p-4"
            >
              <GenericBlogCard
                cardClass="flex flex-col"
                contentClass="flex flex-col justify-start"
                :imgSrc="blog.imgSrc"
                :titleTop="blog.titleTop"
                :titleBottom="blog.titleBottom"
                :paragraph="blog.paragraph"
                :buttonLabels="blog.buttonLabels"
              />
            </div>
          </div>
        </div>
      </div>
    </WrappersSectionWrapper>
  </WrappersPaddingYWrapper>
</template>

<script setup>
const blogs = [
  {
    imgSrc: "/images/blog/blog3.webp",
    titleTop: "Alec Whitten • 17 Jan 2022",
    titleBottom: "Great place to work certification",
    paragraph:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    buttonLabels: ['Leave A Comment ', 'Blog', 'Admin'],
  },
  {
    imgSrc: "/images/blog/blog4.webp",
    titleTop: "Demi WIlkinson • 16 Jan 2022",
    titleBottom: "Why is performance improvement plan so important",
    paragraph:
      "Mental models are simple expressions of complex processes or relationships.",
    buttonLabels: ['Leave A Comment ', 'Blog', 'Admin'],
  },
  {
    imgSrc: "/images/blog/blog5.webp",
    titleTop: "Candice Wu • 15 Jan 2022",
    titleBottom: "What is Wireframing?",
    paragraph:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    buttonLabels: ['Leave A Comment ', 'Blog', 'Admin'],
  },
];
</script>
