<template>
  <div class="min-h-screen bg-background">
    <div class="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <!-- Si el curso no existe -->
      <div v-if="!course" class="py-20 text-center">
        <p class="text-lg font-semibold text-text">Curso no encontrado</p>
        <RouterLink to="/cursos" class="mt-2 inline-block text-primary hover:underline">
          Volver a mis cursos
        </RouterLink>
      </div>

      <!-- Contenido del curso -->
      <template v-else>
        <!-- Volver -->
        <RouterLink
          to="/"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-primary"
        >
          <ChevronLeft class="size-4" aria-hidden="true" />
          Volver
        </RouterLink>

        <!-- Cabecera del programa -->
        <section class="mt-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-stretch">
          <!-- Info -->
          <div class="rounded-2xl border border-border bg-surface p-7">
            <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span
                class="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
              >
                {{ course.badge }}
              </span>
              <span class="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted">
                <Layers :size="14" :stroke-width="1.8" aria-hidden="true" />
                {{ course.modules.length }} módulos
              </span>
              <span class="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted">
                <Clock :size="14" :stroke-width="1.8" aria-hidden="true" />
                {{ course.duration }}
              </span>
              <span class="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                <BadgeCheck :size="14" :stroke-width="1.8" aria-hidden="true" />
                {{ course.certification }}
              </span>
            </div>

            <h1 class="mt-5 text-2xl font-bold tracking-tight text-text sm:text-3xl">
              {{ course.title }}
            </h1>
            <p class="mt-3 max-w-2xl text-sm leading-6 text-text-muted sm:text-base">
              {{ course.description }}
            </p>

            <div class="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-5 text-sm">
              <div>
                <p class="text-xs font-medium uppercase tracking-wide text-text-muted">
                  Departamento responsable
                </p>
                <p class="mt-0.5 font-semibold text-text">{{ course.department }}</p>
              </div>
              <div>
                <p class="text-xs font-medium uppercase tracking-wide text-text-muted">
                  Último acceso
                </p>
                <p class="mt-0.5 font-semibold text-text">{{ course.lastAccess }}</p>
              </div>
              <div>
                <p class="text-xs font-medium uppercase tracking-wide text-text-muted">
                  Fecha límite
                </p>
                <p class="mt-0.5 font-semibold text-text">{{ course.deadline }}</p>
              </div>
            </div>
          </div>

          <!-- Progreso general -->
          <aside
            class="flex flex-col justify-between rounded-2xl border border-border bg-primary p-7 text-white lg:w-80"
          >
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.15em] text-white/80">
                Progreso general
              </p>
              <div class="mt-5 flex items-end justify-between">
                <span class="text-4xl font-bold leading-none">{{ course.progress }}%</span>
                <span class="text-xs text-white/75"
                  >{{ completedCount }} de {{ course.modules.length }} módulos</span
                >
              </div>
              <div class="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-white/20">
                <div
                  class="h-full rounded-full bg-white transition-all duration-500"
                  :style="{ width: course.progress + '%' }"
                ></div>
              </div>
            </div>
            <div
              class="mt-6 flex items-start gap-2 rounded-xl bg-white/10 p-3 text-xs leading-5 text-white/90"
            >
              <Info :size="15" :stroke-width="1.8" class="mt-0.5 shrink-0" aria-hidden="true" />
              <span>{{ course.note }}</span>
            </div>
          </aside>
        </section>

        <!-- Plan de aprendizaje -->
        <section class="mt-10">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <h2 class="inline-flex items-center gap-2 text-lg font-bold text-text">
              <ListChecks :size="20" :stroke-width="1.8" class="text-primary" aria-hidden="true" />
              Plan de aprendizaje por módulos
            </h2>
            <div class="inline-flex rounded-lg border border-border bg-surface p-1 text-sm">
              <button
                v-for="f in filters"
                :key="f.value"
                type="button"
                @click="activeFilter = f.value"
                class="rounded-md px-3 py-1.5 font-medium transition-colors"
                :class="
                  activeFilter === f.value
                    ? 'bg-primary text-white'
                    : 'text-text-muted hover:text-text'
                "
              >
                {{ f.label }} ({{ countByStatus(f.value) }})
              </button>
            </div>
          </div>

          <ul role="list" class="mt-6 flex flex-col gap-4">
            <li v-for="module in filteredModules" :key="module.id">
              <article
                class="rounded-2xl border bg-surface p-5 transition-colors sm:p-6"
                :class="
                  module.status === 'in-progress'
                    ? 'border-primary ring-1 ring-primary/30'
                    : 'border-border'
                "
              >
                <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                  <div
                    class="flex size-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold"
                    :class="numberClass(module.status)"
                  >
                    {{ String(module.order).padStart(2, '0') }}
                  </div>
                  <div class="min-w-0 flex-1">
                    <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span
                        class="inline-flex items-center gap-1.5 text-xs font-semibold"
                        :class="statusMeta(module.status).color"
                      >
                        <component
                          :is="statusMeta(module.status).icon"
                          :size="14"
                          :stroke-width="2"
                          aria-hidden="true"
                        />
                        {{ statusMeta(module.status).label }}
                      </span>
                      <span v-if="module.grade" class="text-xs text-text-muted"
                        >Calificación: {{ module.grade }}</span
                      >
                      <span class="text-xs text-text-muted">· {{ module.time }}</span>
                    </div>
                    <h3 class="mt-1.5 text-base font-semibold text-text">{{ module.title }}</h3>
                    <p class="mt-1 text-sm leading-6 text-text-muted">{{ module.description }}</p>
                    <div class="mt-3 flex flex-wrap items-center gap-4 text-xs text-text-muted">
                      <span class="inline-flex items-center gap-1.5">
                        <PlayCircle :size="14" :stroke-width="1.8" aria-hidden="true" />
                        {{ module.lessons }} lecciones interactivas
                      </span>
                      <span class="inline-flex items-center gap-1.5">
                        <ClipboardCheck :size="14" :stroke-width="1.8" aria-hidden="true" />
                        {{ module.assessment }}
                      </span>
                    </div>
                    <div v-if="module.status === 'in-progress'" class="mt-4">
                      <div class="flex items-center justify-between text-xs text-text-muted">
                        <span>Progreso del módulo: {{ module.progress }}%</span>
                        <span>{{ module.currentLesson }}</span>
                      </div>
                      <div class="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-border">
                        <div
                          class="h-full rounded-full bg-primary transition-all"
                          :style="{ width: module.progress + '%' }"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="shrink-0 sm:self-center">
                    <button
                      type="button"
                      :disabled="module.status === 'locked'"
                      class="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors"
                      :class="actionClass(module.status)"
                    >
                      <component
                        :is="actionMeta(module.status).icon"
                        class="size-4"
                        aria-hidden="true"
                      />
                      {{ actionMeta(module.status).label }}
                    </button>
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </section>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { LucideIcon } from '@lucide/vue'
import {
  ChevronLeft,
  Layers,
  Clock,
  BadgeCheck,
  Info,
  ListChecks,
  PlayCircle,
  ClipboardCheck,
  CheckCircle2,
  CircleDot,
  Lock,
  RotateCcw,
  ArrowRight,
} from '@lucide/vue'
import { coursesData, type Status } from '@/data/courses'

const props = defineProps<{ id: string }>()
const course = computed(() => coursesData[props.id])

// --- Filtros ---
const filters = [
  { label: 'Todos', value: 'all' as const },
  { label: 'Completados', value: 'completed' as const },
  { label: 'Pendientes', value: 'pending' as const },
]
const activeFilter = ref<'all' | 'completed' | 'pending'>('all')

const completedCount = computed(() =>
  course.value ? course.value.modules.filter((m) => m.status === 'completed').length : 0,
)

const countByStatus = (value: string) => {
  if (!course.value) return 0
  if (value === 'all') return course.value.modules.length
  if (value === 'completed')
    return course.value.modules.filter((m) => m.status === 'completed').length
  return course.value.modules.filter((m) => m.status !== 'completed').length
}

const filteredModules = computed(() => {
  if (!course.value) return []
  if (activeFilter.value === 'all') return course.value.modules
  if (activeFilter.value === 'completed')
    return course.value.modules.filter((m) => m.status === 'completed')
  return course.value.modules.filter((m) => m.status !== 'completed')
})

// --- Mapeo de estados a estilos/iconos ---
const statusMeta = (s: Status) =>
  (
    ({
      completed: { label: 'Completado', color: 'text-emerald-600', icon: CheckCircle2 },
      'in-progress': { label: 'En curso', color: 'text-primary', icon: CircleDot },
      pending: { label: 'Pendiente', color: 'text-amber-600', icon: CircleDot },
      locked: { label: 'Bloqueado', color: 'text-text-muted', icon: Lock },
    }) satisfies Record<Status, { label: string; color: string; icon: LucideIcon }>
  )[s]

const numberClass = (s: Status) =>
  s === 'completed'
    ? 'bg-emerald-50 text-emerald-600'
    : s === 'in-progress'
      ? 'bg-primary text-white'
      : 'bg-surface text-text-muted ring-1 ring-border'

const actionMeta = (s: Status) =>
  (
    ({
      completed: { label: 'Repasar módulo', icon: RotateCcw },
      'in-progress': { label: 'Continuar módulo', icon: ArrowRight },
      pending: { label: 'Iniciar módulo', icon: ArrowRight },
      locked: { label: 'Iniciar cuando esté disponible', icon: Lock },
    }) satisfies Record<Status, { label: string; icon: LucideIcon }>
  )[s]

const actionClass = (s: Status) =>
  s === 'in-progress'
    ? 'bg-primary text-white hover:bg-primary/90'
    : s === 'completed'
      ? 'border border-border text-text hover:border-primary hover:text-primary'
      : s === 'pending'
        ? 'border border-border text-text hover:border-primary hover:text-primary'
        : 'border border-border text-text-muted cursor-not-allowed opacity-70'
</script>
