<template>
  <router-link
    :to="`/song/${song.id}`"
    class="no-underline"
  >

    <div
      class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >

      <!-- Cover -->
      <div class="overflow-hidden">

        <img
          :src="song.cover"
          class="w-full h-72 object-cover hover:scale-110 transition duration-500"
        />

      </div>

      <!-- Song Info -->
      <div class="p-5">

        <h2
          class="text-2xl font-bold !text-gray-900 dark:!text-white"
        >
          {{ song.title }}
        </h2>

        <p
          class="!text-gray-600 dark:!text-gray-300 mt-2 text-lg"
        >
          {{ song.artist }}
        </p>

      </div>

    </div>

  </router-link>
</template>

<script setup>
// Define input parameters to receive the song data object from parent components
defineProps({
  song: Object,
})
</script>