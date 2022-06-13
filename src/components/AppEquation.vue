<script setup>
defineProps({
  path: String,
})
</script>

<template>
  <img h-8 :src="path" :alt="path"> />
</template>

<style lang="scss" scoped>
a{
  text-decoration: none !important;
}
</style>
