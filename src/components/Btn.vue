<script setup>
defineProps({
  path: String,
})

</script>
<template>
  <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 hover:outline-none hover:ring-2 active:ring-offset-2 active:ring-blue-500  active:bg-blue-600 active:text-white active:ring-offset-2 hover:ring-blue-500">
    <a class="no-underline" :href="path" target="_blank">Читать дальше</a>
  </button>
</template>

<style lang="scss" scoped>
a{
  text-decoration: none !important;
}
</style>
