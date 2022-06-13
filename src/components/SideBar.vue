<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSectionsStore } from '~/stores/sections'
const storeSections = useSectionsStore()
const sections = storeSections.sections
// On mobile, menu will be closed by default till user opens it.
const showSideBar = ref(false)
const route = useRoute()
const toggleSideBar = () => {
  showSideBar.value = !showSideBar.value
}
const getCurrentSection = computed(() => {
  const currentPath = route.path
  const found = sections.find(section => section.path === currentPath)
  if (found)
    found.current = true
  return found
})
const router = useRouter()
const changeSection = (path) => {
  router.push(path)
  showSideBar.value = !showSideBar.value
}

</script>

<template>
  <button id="menu-button" absolute z-3 right-4 top-4 class="btn" h-8 @click="toggleSideBar">
    Меню
  </button>
  <aside
    v-show="showSideBar"
    class="sidebar w-64 xs:shadow transform transition-transform duration-150 ease-in bg-white dark:bg-slate-700 rounded-r-3xl text-gray-700 dark:text-gray-200"
  >
    <div class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto rounded-r-3xl">
      <div class="flex flex-col items-center flex-shrink-0 px-4 mb-8 h-8 w-auto relative">
        <TheAtom />
        <a href="mail:sapogin@mail.ru"><small text-red>sapogin@mail.ru</small></a>
      </div>
      <div class="mt-5 flex-grow flex flex-col">
        <nav class="flex-1 px-2 space-y-1" aria-label="Sidebar">
          <template v-for="section in sections" :key="section.title">
            <a href="/" @click.prevent="changeSection(section.path)">
              <Disclosure as="div" class="space-y-1">
                <DisclosureButton :class="[section.path == getCurrentSection.path ? 'bg-gray-200 dark:bg-slate-900' : 'bg-none dark:bg-none', ' px-2 group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md outline-none hover:bg-gray-200 dark:hover:bg-slate-900 hover:text-gray-700 hover:dark:text-gray-200', open ? 'text-gray-700 dark:text-white opacity-100' : 'text-gray-700/80 dark:text-gray-200/70']">
                  <p>{{ section.title }}</p>
                </DisclosureButton>
              </Disclosure>
            </a>
          </template>
          <footer absolute bottom-4>
            <Footer />
          </footer>
        </nav>
      </div>
    </div>
  </aside>
</template>
<style lang="scss">
@media (max-width: 770px){
  .sidebar{
    position: absolute;
    z-index: 2;
    width: 100% !important;
    height: 100vh !important;
  }
  footer{
    position: absolute;
    top: 0.8rem;
    left: 0.8rem;
  }
}
@media (min-width: 770px){
  #menu-button{
    display: none;
  }
   .sidebar{
    display: flex !important;
  }
}
</style>
