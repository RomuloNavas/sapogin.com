<template>
<<<<<<< HEAD
  <main bg-slate-100 dark:bg-slate-800 h-full center teal-700 dark:gray-200 >
    <router-view />
=======
  <main p="x4 y10" text="center teal-700 dark:gray-200">
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <RouterView />
    <div>
      <button btn text-sm m="3 t8" @click="router.back()">
        {{ t('button.back') }}
      </button>
    </div>
>>>>>>> 7d84b7f9b00624bc4b18f47a9853591984e8084f
  </main>
</template>
