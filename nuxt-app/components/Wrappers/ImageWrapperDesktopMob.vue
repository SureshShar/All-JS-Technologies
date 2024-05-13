<template>
  <picture>
    <!-- Medium screen image -->
    <source media="(min-width: 960px)" srcset="/images/rightImg.webp" />
    <!-- Mobile screen image -->
    <source media="(max-width: 960px)" srcset="/images/leftImg.webp" />
    <!-- Fallback image for browsers that do not support <picture> tag -->
    <img src="/images/leftImg.webp" alt="Description of the image" />
  </picture>
</template>
