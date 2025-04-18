<script setup lang="ts">
import Navigation from './components/Navigation.vue'
</script>

<template>
  <div class="min-h-screen bg-black">
    <Navigation />
    <main class="pt-24 pb-24 md:pb-0">
      <router-view></router-view>
    </main>
  </div>
</template>