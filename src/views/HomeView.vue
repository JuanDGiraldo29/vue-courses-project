<script setup lang="ts">
import {
  ArrowRight,
  GraduationCap,
  Sun,
  TrendingUp,
  Clock,
  Layers,
  Video,
  MapPin,
  User,
  Megaphone,
} from '@lucide/vue'
import { RouterLink } from 'vue-router'

interface Course {
  id: number
  title: string
  category: string
  description: string
  duration: string
  modules: number
  image: string
}
interface AcademicEvent {
  id: number
  day: string
  month: string
  type: string
  modality: 'Virtual' | 'Presencial'
  title: string
  description: string
  time: string
  speaker: string
}
const events: AcademicEvent[] = [
  {
    id: 1,
    day: '14',
    month: 'Oct',
    type: 'Capacitación',
    modality: 'Virtual',
    title: 'Inducción institucional para nuevos colaboradores',
    description: 'Sesión introductoria sobre la estructura, cultura y procesos de la organización.',
    time: '9:00 a. m. – 11:00 a. m.',
    speaker: 'Equipo de Talento Humano',
  },
  {
    id: 2,
    day: '21',
    month: 'Oct',
    type: 'Taller',
    modality: 'Presencial',
    title: 'Taller de seguridad y salud en el trabajo',
    description:
      'Práctica sobre prevención de riesgos y protocolos de autocuidado en el entorno laboral.',
    time: '2:00 p. m. – 4:30 p. m.',
    speaker: 'Área de SST',
  },
  {
    id: 3,
    day: '28',
    month: 'Oct',
    type: 'Conversatorio',
    modality: 'Virtual',
    title: 'Cultura organizacional y valores institucionales',
    description:
      'Espacio de diálogo sobre la misión, visión y el código de integridad de la entidad.',
    time: '10:00 a. m. – 12:00 m.',
    speaker: 'Dirección General',
  },
]

const courses: Course[] = [
  {
    id: 1,
    title: 'Inducción Institucional',
    category: 'Onboarding',
    description:
      'Conoce la estructura, cultura, procesos y políticas de la organización para desempeñar tu cargo de manera segura.',
    duration: '4h 00m',
    modules: 4,
    image: '/img/courses/induccion.jpg',
  },
  {
    id: 2,
    title: 'Cultura Organizacional',
    category: 'Habilidades',
    description:
      'Explora la misión, visión, valores y el código de integridad que guían el quehacer institucional.',
    duration: '2h 30m',
    modules: 3,
    image: '/img/courses/cultura.jpg',
  },
  {
    id: 3,
    title: 'Seguridad y Salud en el Trabajo',
    category: 'Normativo',
    description:
      'Aprende los lineamientos esenciales de prevención, autocuidado y seguridad en tu entorno laboral.',
    duration: '3h 15m',
    modules: 5,
    image: '/img/courses/seguridad.jpg',
  },
]
</script>

<template>
  <div>
    <section
      class="relative isolate flex min-h-130 items-center overflow-hidden bg-slate-900 sm:min-h-150"
    >
      <img
        src="/img/platform-bg.jpg"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      <div class="absolute inset-0 -z-10 bg-slate-950/70"></div>

      <div class="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div class="max-w-3xl">
          <span
            class="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white"
          >
            Tu espacio de aprendizaje
          </span>

          <h1
            class="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Aprende.
            <span class="text-blue-300">Crece.</span>
            <br class="hidden sm:block" />
            Avanza.
          </h1>

          <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
            Bienvenido a 1cero1 Learn, una plataforma diseñada para acompañarte en tu proceso de
            aprendizaje y desarrollo de nuevas habilidades.
          </p>

          <div class="mt-10 flex flex-wrap items-center gap-3">
            <span class="inline-flex items-center gap-2 text-sm font-medium text-white">
              <span class="h-2 w-2 rounded-full bg-blue-300"></span>
              Aprende a tu ritmo
            </span>

            <span class="mx-2 hidden h-5 w-px bg-white/30 sm:block"></span>

            <span class="inline-flex items-center gap-2 text-sm font-medium text-white">
              <span class="h-2 w-2 rounded-full bg-blue-300"></span>
              Desarrolla tu potencial
            </span>
          </div>

          <div class="mt-10">
            <RouterLink
              to="/login"
              class="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Iniciar sesión
              <ArrowRight class="ml-2 size-4" aria-hidden="true" />
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 h-1 w-full bg-primary"></div>
    </section>

    <section class="bg-background px-6 py-20 sm:py-24 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">1cero1 Learn</p>

          <h2 class="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Tu aprendizaje comienza aquí
          </h2>

          <p class="mt-5 text-base leading-7 text-text-muted sm:text-lg">
            Encuentra un espacio para adquirir conocimientos, fortalecer tus capacidades y avanzar
            hacia tus objetivos.
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article
            class="rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-primary/40"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary"
            >
              <GraduationCap :size="24" :stroke-width="1.8" aria-hidden="true" />
            </div>

            <h3 class="mt-6 text-lg font-semibold text-text">Aprende</h3>

            <p class="mt-3 text-sm leading-6 text-text-muted">
              Accede a experiencias de aprendizaje orientadas a ampliar tus conocimientos y
              habilidades.
            </p>
          </article>

          <article
            class="rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-primary/40"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary"
            >
              <Sun :size="24" :stroke-width="1.8" aria-hidden="true" />
            </div>

            <h3 class="mt-6 text-lg font-semibold text-text">Desarrolla</h3>

            <p class="mt-3 text-sm leading-6 text-text-muted">
              Fortalece tus competencias y convierte cada aprendizaje en una oportunidad de
              crecimiento.
            </p>
          </article>

          <article
            class="rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-primary/40"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary"
            >
              <TrendingUp :size="24" :stroke-width="1.8" aria-hidden="true" />
            </div>

            <h3 class="mt-6 text-lg font-semibold text-text">Avanza</h3>

            <p class="mt-3 text-sm leading-6 text-text-muted">
              Construye tu camino de aprendizaje paso a paso y avanza hacia tus objetivos.
            </p>
          </article>
        </div>
      </div>
    </section>
    <!-- Oferta de cursos -->
    <section class="bg-surface px-6 py-20 sm:py-24 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div class="max-w-2xl">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Oferta de cursos
            </p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Explora nuestros cursos
            </h2>
            <p class="mt-5 text-base leading-7 text-text-muted sm:text-lg">
              Una selección de programas diseñados para acompañarte en tu proceso de aprendizaje y
              desarrollo profesional.
            </p>
          </div>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="course in courses"
            :key="course.id"
            class="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          >
            <!-- Banner -->
            <div class="relative aspect-[16/9] overflow-hidden">
              <img
                :src="course.image"
                :alt="course.title"
                class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span
                class="absolute left-3 top-3 inline-flex items-center rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur"
              >
                {{ course.category }}
              </span>
            </div>

            <!-- Contenido -->
            <div class="flex flex-1 flex-col p-6">
              <h3 class="text-lg font-semibold text-text">
                {{ course.title }}
              </h3>
              <p class="mt-2 flex-1 text-sm leading-6 text-text-muted">
                {{ course.description }}
              </p>

              <!-- Metadatos -->
              <div class="mt-5 flex items-center gap-4 text-xs font-medium text-text-muted">
                <span class="inline-flex items-center gap-1.5">
                  <Clock :size="15" :stroke-width="1.8" aria-hidden="true" />
                  {{ course.duration }}
                </span>
                <span class="inline-flex items-center gap-1.5">
                  <Layers :size="15" :stroke-width="1.8" aria-hidden="true" />
                  {{ course.modules }} módulos
                </span>
              </div>

              <!-- Acción -->
              <RouterLink
                :to="`/cursos/${course.id}`"
                class="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Ver curso
                <ArrowRight class="size-4" aria-hidden="true" />
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>
    <!-- Calendario de eventos académicos -->
    <section class="bg-background px-6 py-20 sm:py-24 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Agenda académica
          </p>
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Próximos eventos y actividades
          </h2>
          <p class="mt-5 text-base leading-7 text-text-muted sm:text-lg">
            Mantente al día con la programación de capacitaciones, talleres y actividades
            formativas.
          </p>
        </div>

        <ul role="list" class="mt-12 flex flex-col gap-4">
          <li v-for="event in events" :key="event.id">
            <article
              class="group flex flex-col gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary/40 sm:flex-row sm:items-center sm:gap-6"
            >
              <!-- Fecha destacada -->
              <div
                class="flex shrink-0 flex-col items-center justify-center rounded-xl bg-primary-light px-4 py-3 text-primary sm:w-20"
              >
                <span class="text-xs font-semibold uppercase tracking-wide">
                  {{ event.month }}
                </span>
                <span class="text-2xl font-bold leading-none sm:text-3xl">
                  {{ event.day }}
                </span>
              </div>

              <!-- Detalle -->
              <div class="flex-1">
                <div class="flex flex-wrap items-center gap-2">
                  <span
                    class="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary"
                  >
                    {{ event.type }}
                  </span>
                  <span class="inline-flex items-center gap-1 text-xs font-medium text-text-muted">
                    <component
                      :is="event.modality === 'Virtual' ? Video : MapPin"
                      :size="13"
                      :stroke-width="1.8"
                      aria-hidden="true"
                    />
                    {{ event.modality }}
                  </span>
                </div>

                <h3 class="mt-2 text-lg font-semibold text-text">
                  {{ event.title }}
                </h3>
                <p class="mt-1 text-sm leading-6 text-text-muted">
                  {{ event.description }}
                </p>

                <div
                  class="mt-3 flex flex-wrap items-center gap-4 text-xs font-medium text-text-muted"
                >
                  <span class="inline-flex items-center gap-1.5">
                    <Clock :size="14" :stroke-width="1.8" aria-hidden="true" />
                    {{ event.time }}
                  </span>
                  <span class="inline-flex items-center gap-1.5">
                    <User :size="14" :stroke-width="1.8" aria-hidden="true" />
                    {{ event.speaker }}
                  </span>
                </div>
              </div>

              <!-- Acción -->
              <div class="shrink-0 sm:self-center">
                <RouterLink
                  :to="`/eventos/${event.id}`"
                  class="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-text transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Ver detalle
                  <ArrowRight class="size-4" aria-hidden="true" />
                </RouterLink>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>
    <!-- Banner informativo -->
    <section class="px-6 py-10 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div
          class="relative isolate overflow-hidden rounded-2xl bg-primary px-6 py-8 shadow-sm sm:px-10 sm:py-10"
        >
          <!-- Decoración de fondo -->
          <div
            class="absolute -right-10 -top-10 -z-10 h-48 w-48 rounded-full bg-white/10"
            aria-hidden="true"
          ></div>
          <div
            class="absolute -bottom-16 right-24 -z-10 h-56 w-56 rounded-full bg-white/5"
            aria-hidden="true"
          ></div>

          <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div class="flex items-start gap-4">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white"
              >
                <Megaphone :size="24" :stroke-width="1.8" aria-hidden="true" />
              </div>

              <div>
                <span
                  class="inline-flex items-center rounded-full bg-white/15 px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-white"
                >
                  Convocatoria abierta
                </span>
                <h2 class="mt-3 text-xl font-bold text-white sm:text-2xl">
                  Inscripciones abiertas para el ciclo formativo 2026
                </h2>
                <p class="mt-2 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">
                  Asegura tu cupo en los próximos cursos de inducción y capacitación. Las
                  inscripciones cierran el 31 de noviembre.
                </p>
              </div>
            </div>

            <div class="shrink-0">
              <RouterLink
                to="/cursos"
                class="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Inscríbete ahora
                <ArrowRight class="size-4" aria-hidden="true" />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
