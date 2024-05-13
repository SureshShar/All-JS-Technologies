<template>
  <div class="max-w-maxScreen mx-auto px-4" :class="sectionClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SectionRenderer',
  props: {
    sectionClass: {
      type: String,
      default: '',
    },
  },
}
</script>
