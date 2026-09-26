<template>
  <div
  class="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-950 dark:to-gray-900 text-black dark:text-white p-8"
>
    <div class="max-w-3xl mx-auto text-center">

      <!-- Album cover -->
      <img
        :src="song.cover"
        class="w-64 h-64 object-cover rounded-full mx-auto cursor-pointer shadow-lg"
        :class="{ 'animate-spin': isPlaying }"
        @click="showImage = true"
      />

      <h1 class="text-3xl font-bold mt-6">
        {{ song.title }}
      </h1>

      <p class="text-gray-500 dark:text-gray-400">
        {{ song.artist }}
      </p>

      <!-- Audio player -->
      <audio
        :src="song.audio"
        controls
        class="w-full mt-6"
        @play="isPlaying = true"
        @pause="isPlaying = false"
      ></audio>

      <!-- Controls -->
      <div class="flex justify-center gap-4 mt-6">

        <button
          @click="prevSong"
          class="bg-gray-700 text-white px-4 py-2 rounded"
        >
          Previous
        </button>

        <button
          @click="nextSong"
          class="bg-gray-700 text-white px-4 py-2 rounded"
        >
          Next
        </button>

        <router-link
          :to="`/video/${song.id}`"
          class="bg-green-500 text-white px-4 py-2 rounded"
        >
          Watch Video
        </router-link>

      </div>
    </div>

    <!-- Bootstrap fullscreen modal -->
    <FullscreenImageModal
      v-if="showImage"
      :image="song.cover"
      @close="showImage = false"
    />
  </div>
</template>

<script setup>
// Import song data
import { songs } from '../assets/songs'

import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'

import FullscreenImageModal from '../components/FullscreenImageModal.vue'

// Get route info
const route = useRoute()
const router = useRouter()

const id = computed(() =>
  Number(route.params.id)
)

// Find selected song by ID
const song = computed(() =>
  songs.find((s) => s.id === id.value)
)

const showImage = ref(false)
const isPlaying = ref(false)

// Next song
function nextSong() {
  const next =
  id.value === songs.length
    ? 1
    : id.value + 1
  router.push(`/song/${next}`)
}

// Previous song
function prevSong() {
  const prev =
  id.value === 1
    ? songs.length
    : id.value - 1
  router.push(`/song/${prev}`)
}
</script>