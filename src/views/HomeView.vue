<template>
    <div>
        <section class="relative isolate flex min-h-130 items-center overflow-hidden bg-slate-900 sm:min-h-150">
            <img src="/img/platform-bg.jpg" alt="" aria-hidden="true"
                class="absolute inset-0 -z-20 h-full w-full object-cover object-center" />

            <div class="absolute inset-0 -z-10 bg-slate-950/70"></div>

            <div class="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
                <div class="max-w-3xl">
                    <span
                        class="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white">
                        Tu espacio de aprendizaje
                    </span>

                    <h1 class="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                        Aprende.
                        <span class="text-blue-300">Crece.</span>
                        <br class="hidden sm:block" />
                        Avanza.
                    </h1>

                    <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
                        Bienvenido a 1cero1 Learn, una plataforma diseñada para acompañarte
                        en tu proceso de aprendizaje y desarrollo de nuevas habilidades.
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
                        <RouterLink to="/login"
                            class="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
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
                    <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        1cero1 Learn
                    </p>

                    <h2 class="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">
                        Tu aprendizaje comienza aquí
                    </h2>

                    <p class="mt-5 text-base leading-7 text-text-muted sm:text-lg">
                        Encuentra un espacio para adquirir conocimientos, fortalecer tus
                        capacidades y avanzar hacia tus objetivos.
                    </p>
                </div>

                <div class="mt-12 grid gap-6 md:grid-cols-3">
                    <article
                        class="rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-primary/40">
                        <div
                            class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                            <GraduationCap :size="24" :stroke-width="1.8" aria-hidden="true" />
                        </div>

                        <h3 class="mt-6 text-lg font-semibold text-text">
                            Aprende
                        </h3>

                        <p class="mt-3 text-sm leading-6 text-text-muted">
                            Accede a experiencias de aprendizaje orientadas a ampliar tus
                            conocimientos y habilidades.
                        </p>
                    </article>

                    <article
                        class="rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-primary/40">
                        <div
                            class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                            <Sun :size="24" :stroke-width="1.8" aria-hidden="true" />
                        </div>

                        <h3 class="mt-6 text-lg font-semibold text-text">
                            Desarrolla
                        </h3>

                        <p class="mt-3 text-sm leading-6 text-text-muted">
                            Fortalece tus competencias y convierte cada aprendizaje en una
                            oportunidad de crecimiento.
                        </p>
                    </article>

                    <article
                        class="rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-primary/40">
                        <div
                            class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                            <TrendingUp :size="24" :stroke-width="1.8" aria-hidden="true" />
                        </div>

                        <h3 class="mt-6 text-lg font-semibold text-text">
                            Avanza
                        </h3>

                        <p class="mt-3 text-sm leading-6 text-text-muted">
                            Construye tu camino de aprendizaje paso a paso y avanza hacia
                            tus objetivos.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ArrowRight, GraduationCap, Sun, TrendingUp } from '@lucide/vue'
import { RouterLink } from 'vue-router'
</script>
