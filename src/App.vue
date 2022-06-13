<script setup lang="ts">
useHead({
  title: 'Каноническая Физика - Владимир Сапогин',
  meta: [
<<<<<<< HEAD
    { name: 'description', content: 'Сапогин Владимир Георгиевич, Каноническая Физика - Каноническая физика – Царица наукоёмких технологий, Интеграл полного давления имеет непосредственное отношение к гравитационным, электрическим, магнитным полям коллективно взаимодействующих систем, и позволяет значительно дополнить известную физическую картину недостаточно исследованных явлений.' },
=======
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
>>>>>>> 7d84b7f9b00624bc4b18f47a9853591984e8084f
  ],
})
</script>

<template>
  <RouterView />
</template>
