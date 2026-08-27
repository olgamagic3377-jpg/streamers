<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth'
const menuOpen = ref(false); const auth = useAuthStore()
const nav = [{ to: '/', label: 'Inicio' }, { to: '/apps/mujeres', label: 'Apps para mujeres' }, { to: '/apps/hombres', label: 'Apps para hombres' }, { to: '/guias', label: 'Guías' }, { to: '/ser-agente', label: 'Ser agente' }]
const firstName = computed(() => auth.profile?.full_name?.split(' ')[0] || 'Mi perfil')
onMounted(() => auth.initialize())
</script>
<template>
  <header class="site-header"><RouterLink class="brand" to="/"><span class="brand-mark">S</span><span>streamer<span>hub</span></span></RouterLink><nav class="desktop-nav"><RouterLink v-for="item in nav" :key="item.to" :to="item.to">{{ item.label }}</RouterLink></nav><div class="header-actions"><RouterLink v-if="!auth.user" class="login-link" to="/ingresar">Iniciar sesión</RouterLink><RouterLink v-if="!auth.user" class="button button-small" to="/registro">Crear cuenta</RouterLink><RouterLink v-else class="profile-link" to="/perfil">{{ firstName }}</RouterLink><button class="menu-button" aria-label="Abrir menú" @click="menuOpen = !menuOpen"><i></i><i></i></button></div></header>
  <nav v-if="menuOpen" class="mobile-nav"><RouterLink v-for="item in nav" :key="item.to" :to="item.to" @click="menuOpen=false">{{ item.label }}</RouterLink></nav><main><RouterView /></main>
  <footer class="site-footer"><div class="footer-brand"><span class="brand-mark">S</span><b>streamer<span>hub</span></b><p>Orientación clara para dar tu próximo paso.</p></div><div><b>Explora</b><RouterLink to="/apps/mujeres">Apps para mujeres</RouterLink><RouterLink to="/apps/hombres">Apps para hombres</RouterLink><RouterLink to="/guias">Guías</RouterLink></div><div><b>Comunidad</b><RouterLink to="/ser-agente">Quiero ser agente</RouterLink><RouterLink to="/contacto">Contacto</RouterLink><RouterLink to="/politicas">Políticas</RouterLink></div><small>© {{ new Date().getFullYear() }} Streamer Hub.</small></footer>
</template>

