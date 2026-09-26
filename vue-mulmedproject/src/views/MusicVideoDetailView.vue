<template>
  <div
  class="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-950 dark:to-gray-900 text-black dark:text-white p-8"
>
    <div class="max-w-4xl mx-auto">

        <!-- Song.title -->
      <h1 class="text-3xl font-bold mb-2">
        {{ song.title }}
      </h1>

      <!-- Song.artist -->
      <p class="text-gray-500 dark:text-gray-400 mb-6">
        {{ song.artist }} 
      </p>

      <!-- Song.video -->
      <video
        :src="song.video"
        controls
        class="w-full rounded shadow-lg"
      ></video>

      <div class="flex gap-4 mt-6">

        <!-- button prev video -->
        <button
          @click="prevVideo"
          class="bg-gray-700 text-white px-4 py-2 rounded"
        >
          Previous
        </button>

        <!-- button next video -->
        <button
          @click="nextVideo"
          class="bg-gray-700 text-white px-4 py-2 rounded"
        >
          Next
        </button>

        <router-link
          :to="`/song/${song.id}`"
          class="bg-green-500 text-white px-4 py-2 rounded"
        >
          Back to Song
        </router-link>

      </div>
    </div>
  </div>
</template>

<script setup>
import { songs } from '../assets/songs'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()

// Parse active URL dynamic id string parameter into numerical value
const id = computed(() =>
  Number(route.params.id)
)

// Computed track data search lookup matching the parsed identifier index
const song = computed(() =>
  songs.find((s) => s.id === id.value)
)

// Navigation logic routing to the next catalog item index with circular reset
function nextVideo() {
  const next =
  id.value === songs.length
    ? 1
    : id.value + 1
  router.push(`/video/${next}`)
}

// Navigation logic routing to the previous catalog item index with circular reset
function prevVideo() {
  const prev =
  id.value === 1
    ? songs.length
    : id.value - 1
  router.push(`/video/${prev}`)
}
</script>