<template>
  <nav
    class="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-lg px-8 py-4 flex justify-between items-center"
  >

    <!-- Logo -->
    <h1
      class="text-3xl font-extrabold text-green-500 tracking-wide"
    >
      SpoJeDy
    </h1>

    <!-- Navigation -->
    <div class="flex gap-8">

      <router-link
        to="/"
        active-class="text-green-500 border-b-2 border-green-500"
        class="text-gray-700 dark:text-gray-200 hover:text-green-500 pb-1 transition duration-300 no-underline font-semibold"
      >
        Home
      </router-link>

      <router-link
        to="/videos"
        active-class="text-green-500 border-b-2 border-green-500"
        class="text-gray-700 dark:text-gray-200 hover:text-green-500 pb-1 transition duration-300 no-underline font-semibold"
      >
        Videos
      </router-link>

      <router-link
        to="/profile"
        active-class="text-green-500 border-b-2 border-green-500"
        class="text-gray-700 dark:text-gray-200 hover:text-green-500 pb-1 transition duration-300 no-underline font-semibold"
      >
        Profile
      </router-link>

    </div>

    <!-- User -->
    <div
      class="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full"
    >

      <!-- Profile Image -->
      <img
        v-if="profileImage"
        :src="profileImage"
        class="w-11 h-11 rounded-full object-cover border-2 border-green-500"
      />

      <!-- Empty -->
      <div
        v-else
        class="w-11 h-11 rounded-full bg-gray-400 dark:bg-gray-600"
      ></div>

      <!-- Username -->
      <span
        class="font-semibold text-gray-800 dark:text-white"
      >
        {{ username }}
      </span>

    </div>

  </nav>
</template>

<script setup>
import { ref } from 'vue'

const username = ref(
  localStorage.getItem('username') || 'Guest'
)

const profileImage = ref(
  localStorage.getItem('profileImage') || ''
)
</script>