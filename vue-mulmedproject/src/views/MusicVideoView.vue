<template>
  <div
  class="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-950 dark:to-gray-900 text-black dark:text-white p-6"
>

    <h1
      class="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
    >
      Music Videos
    </h1>

    <div class="space-y-8">

      <router-link
  v-for="song in songs"
  :key="song.id"
  :to="`/video/${song.id}`"
  class="block no-underline"
>

        <div
          class="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"
        >

          <!-- Thumbnail -->
          <div class="md:w-1/2">

            <img
              :src="song.cover"
              class="w-full h-72 object-cover"
            />

          </div>

          <!-- Info -->
          <div
            class="p-6 flex flex-col justify-center"
          >

            <h2
              class="text-4xl font-bold !text-gray-900 dark:!text-white"
            >
              {{ song.title }}
            </h2>

            <p
              class="text-xl !text-gray-600 dark:!text-gray-300 mt-3"
            >
              {{ song.artist }}
            </p>

            <button
              class="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl w-fit"
            >
              ▶ Watch Video
            </button>

          </div>

        </div>

      </router-link>

    </div>

  </div>
</template>

<script setup>
// Load custom multimedia asset metadata registry array
import { songs } from '../assets/songs'
</script>