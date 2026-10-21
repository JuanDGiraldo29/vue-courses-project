<template>
  <main class="flex min-h-screen items-center justify-center bg-background px-6 py-12">
    <div class="w-full max-w-md">
      <div class="mb-8 text-center">
        <RouterLink to="/" class="inline-flex items-center gap-3">
          <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
            <BookOpen :size="26" :stroke-width="1.8" aria-hidden="true" />
          </span>

          <span class="text-left">
            <span class="block text-2xl font-bold tracking-tight text-primary">
              1cero1 Learn
            </span>
            <span class="block text-sm text-text-muted">
              Tu espacio de aprendizaje
            </span>
          </span>
        </RouterLink>
      </div>

      <section class="rounded-2xl border border-border bg-surface p-7 shadow-sm sm:p-9">
        <div class="mb-8">
          <h1 class="text-2xl font-bold tracking-tight text-text">
            Iniciar sesión
          </h1>

          <p class="mt-2 text-sm leading-6 text-text-muted">
            Ingresa tus credenciales para continuar aprendiendo.
          </p>
        </div>

        <form class="space-y-5" @submit.prevent="handleLogin">
          <div>
            <label for="username" class="mb-2 block text-sm font-medium text-text">
              Usuario o correo electrónico
            </label>

            <div class="relative">
              <UserRound
                :size="19"
                class="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />

              <input
                id="username"
                v-model.trim="identifier"
                type="text"
                name="username"
                autocomplete="username"
                placeholder="Ingresa tu usuario o correo"
                required
                class="w-full rounded-lg border border-border bg-white py-3 pl-11 pr-4 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>
          </div>

          <div>
            <div class="mb-2 flex items-center justify-between gap-3">
              <label for="password" class="block text-sm font-medium text-text">
                Contraseña
              </label>
            </div>

            <div class="relative">
              <LockKeyhole
                :size="19"
                class="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />

              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                name="password"
                autocomplete="current-password"
                placeholder="Ingresa tu contraseña"
                required
                class="w-full rounded-lg border border-border bg-white py-3 pl-11 pr-12 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
              />

              <button
                type="button"
                :aria-label="showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'"
                class="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-primary"
                @click="showPassword = !showPassword"
              >
                <EyeOff v-if="showPassword" :size="19" aria-hidden="true" />
                <Eye v-else :size="19" aria-hidden="true" />
              </button>
            </div>
          </div>

          <p
            v-if="errorMessage"
            role="alert"
            class="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {{ errorMessage }}
          </p>

          <button
            type="submit"
            class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Iniciar sesión
            <ArrowRight :size="18" aria-hidden="true" />
          </button>
        </form>

        <div class="mt-7 border-t border-border pt-5">
          <p class="text-center text-xs leading-5 text-text-muted">
            Al ingresar, podrás acceder a tus cursos y continuar tu proceso de aprendizaje.
          </p>
        </div>
      </section>

      <p class="mt-6 text-center text-sm text-text-muted">
        ¿Quieres volver al inicio?
        <RouterLink to="/" class="font-semibold text-primary hover:underline">
          Volver a la página principal
        </RouterLink>
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import {
  ArrowRight,
  BookOpen,
  Eye,
  EyeOff,
  LockKeyhole,
  UserRound,
} from '@lucide/vue'
import { users } from '@/data/users'

const router = useRouter()

const identifier = ref('')
const password = ref('')
const showPassword = ref(false)
const errorMessage = ref('')

function handleLogin() {
  errorMessage.value = ''

  const normalizedIdentifier = identifier.value.toLowerCase()

  const user = users.find(
    (item) =>
      item.username.toLowerCase() === normalizedIdentifier ||
      item.email.toLowerCase() === normalizedIdentifier,
  )

  if (!user || user.password !== password.value) {
    errorMessage.value = 'El usuario o la contraseña son incorrectos.'
    return
  }

  if (user.status !== 'active') {
    errorMessage.value = 'Tu cuenta no está activa. Contacta con el administrador.'
    return
  }

  user.lastAccess = new Date().toISOString()

  // Simulación de sesión local. No sustituye una autenticación real.
  localStorage.setItem(
    '1cero1-learn-user',
    JSON.stringify({
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      role: user.role,
    }),
  )

  router.push('/')
}
</script>