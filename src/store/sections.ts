import { acceptHMRUpdate, defineStore } from 'pinia'
export const useSectionsStore = defineStore('sections', {
  state: () => ({
    sections: [
      {
        title: 'Каноническая Физика',
        path: '/', // path: 'work' ? fileName = (work.md || work.vue || work.html) : Error!
        current: false,
      },
      {
        title: 'Монографии',
        path: '/monography',
        current: false,
      },
      {
        title: 'Брошюры',
        path: '/brochure',
        current: false,
      },
      {
        title: 'Докторская диссертация',
        path: '/dissertation',
        current: false,
      },
      {
        title: 'Избранные Научные Статьи',
        path: '/articles',
        current: false,
      },
      {
        title: 'Работы и Заметки',
        path: '/works',
        current: false,
      },
      {
        title: 'Преподавание',
        path: '/teaching',
        current: false,
      },
      {
        title: 'Патенты',
        path: '/patents',
        current: false,
      },
      {
        title: 'Наукоёмкие технологии',
        path: '/technologies',
        current: false,
      },
    ],
  }),
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSectionsStore, import.meta.hot))
