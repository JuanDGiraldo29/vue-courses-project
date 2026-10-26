import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CourseDetailView from '@/views/CourseDetailView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/cursos/:id', // :id es el parámetro dinámico
      name: 'course-detail',
      component: CourseDetailView,
      props: true, // pasa el :id como prop a la vista
    },
  ],
})

export default router
