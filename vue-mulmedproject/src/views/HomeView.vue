<template>
  <div
  class="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-950 dark:to-gray-900 text-black dark:text-white p-6"
>

    <!-- Bootstrap Carousel -->
    <div
      id="featuredCarousel"
      class="carousel slide mb-12 rounded-3xl overflow-hidden shadow-2xl"
      data-bs-ride="carousel"
    >

      <div class="carousel-inner">

        <!-- Slide 1 -->
        <div class="carousel-item active">

          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1400"
            class="d-block w-100"
            style="height: 450px; object-fit: cover;"
          />

          <div
            class="carousel-caption d-none d-md-block text-black bg-white/70 rounded-3xl p-4"
          >

            <h1 class="text-5xl font-bold">
              Welcome to SpoJeDy
            </h1>

            <p class="text-xl text-black">
              Stream your favorite music anytime
            </p>

          </div>

        </div>

        <!-- Slide 2 -->
        <div class="carousel-item">

          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1400"
            class="d-block w-100"
            style="height: 450px; object-fit: cover;"
          />

          <div
            class="carousel-caption d-none d-md-block text-black bg-white/70 rounded-3xl p-4"
          >

            <h1 class="text-5xl font-bold">
              Music Videos
            </h1>

            <p class="text-xl text-black">
              Watch HD videos from top artists
            </p>

          </div>

        </div>

      </div>

      <!-- Controls -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#featuredCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
      </button>

      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#featuredCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
      </button>

    </div>

    <!-- Title -->
    <h1
      class="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
    >
      Featured Songs
    </h1>

    <!-- Search -->
    <div class="mb-8">

      <input
        v-model="search"
        type="text"
        placeholder="Search songs..."
        class="w-full p-4 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />

    </div>

    <!-- Songs -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >

      <SongCard
        v-for="song in filteredSongs"
        :key="song.id"
        :song="song"
      />

    </div>

  </div>
</template>

<script setup>
import SongCard from '../components/SongCard.vue'

import { songs } from '../assets/songs'

import { ref, computed } from 'vue'

// Reactive user text tracking variable for live filtering queries
const search = ref('')

// Computed loop generator filtering track objects matching input titles
const filteredSongs = computed(() =>
  songs.filter(song =>
    song.title
      .toLowerCase()
      .includes(search.value.toLowerCase())
  )
)
</script>