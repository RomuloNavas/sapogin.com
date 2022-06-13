<script setup>
import { computed, defineComponent, onBeforeUpdate, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const active = ref(false)
const subSections = ref([])
</script>

<template>
  <div absolute right-3 top-4 w-58 class="miniNavigationBar">
    <span font-medium uppercase text-xs text-blue-200>На этой странице</span>
    <p>{{ route.path }}</p>
    <ul text-xs>
      <li v-for="subsection in subSections" :key="subsection" mt-2>
        <a :href="`#${subsection}`" text-gray-700 dark:text-gray-200 cursor-pointer hover:opacity-100 :class="[active? 'opacity-100' : 'opacity-80']">{{ subsection }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.miniNavigationBar{
  visibility: hidden;
  @media (min-width: 1650px) {
    visibility: visible;
   }
}
</style>
