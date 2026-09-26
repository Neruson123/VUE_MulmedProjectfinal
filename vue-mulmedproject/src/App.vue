<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'

// Fetch user's preferred theme from browser local storage
const savedTheme =
  localStorage.getItem('theme') || 'light'

// Apply or remove dark class on root HTML node based on preference
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
</script>