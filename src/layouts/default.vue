<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
const route = useRoute()

const mainContent = ref(null)
onMounted(() => {
  const h2Array = mainContent.value.querySelectorAll('h2')
  // ! Don't include in the subtitles the symbol: ?
  h2Array.forEach((h2) => {
    h2.setAttribute('id', h2.innerText)
  })
  const aArray = mainContent.value.querySelectorAll('a')
  aArray.forEach((a, index) => {
    a.classList.add('btn')
    // Using this condition, you can use a custom href for <a> elements in the markdown file.
    if (a.getAttribute('href') === '') {
      a.setAttribute('href', `docs${route.path}/${h2Array[index].innerText}.pdf`)
      a.setAttribute('target', '_blank')
    }
  })
})
function goToTop() {
  const title = document.querySelector('h1')
  title.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
}
</script>

<template>
<<<<<<< HEAD
  <div class="flex flex-row h-screen bg-slate-100 dark:bg-slate-800 text-gray-800">
    <SideBar />
    <!-- Watch the router state: ./src/modules/nprogress.ts -->
    <!-- <MiniNavigationBar /> -->
    <main class="main flex flex-col flex-grow transition-all p-2 duration-150 ease-in text-gray-700 dark:text-gray-200 overflow-y-auto">
      <div ref="mainContent" class="main-content flex flex-col flex-grow  h-full  text-center ">
        <router-view />
      </div>
      <button type="button" class="btn absolute right-3 bottom-4" @click="goToTop">
        <div i-carbon-arrow-up inline-block />
      </button>
    </main>
  </div>
=======
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <RouterView />
    <Footer />
    <div class="mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm">
      [Default Layout]
    </div>
  </main>
>>>>>>> 7d84b7f9b00624bc4b18f47a9853591984e8084f
</template>
