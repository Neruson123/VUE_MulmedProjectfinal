<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-950 dark:to-gray-900 text-black dark:text-white p-8">
    <div
  class="max-w-md mx-auto space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
>
      <h1 class="text-3xl font-bold">Profile</h1>

      <!-- Username -->
      <input v-model="username" class="w-full border p-3 rounded bg-white dark:bg-gray-800 text-black dark:text-white" placeholder="Enter username" />

      <!-- Upload -->
      <input
  type="file"
  @change="uploadImage"
  class="text-black dark:text-white"
/>

      <!-- Loading -->
      <div v-if="loading" class="animate-pulse text-green-500">Compressing image...</div>

      <!-- Preview -->
      <img v-if="profileImage" :src="profileImage" class="w-32 h-32 rounded-full object-cover" />

      <!-- Theme -->
      <select v-model="theme" class="w-full border p-3 rounded bg-white dark:bg-gray-800 text-black dark:text-white">
        <option value="light">Light Mode</option>

        <option value="dark">Dark Mode</option>
      </select>

      <!-- Save -->
      <button @click="saveProfile" class="w-full bg-green-500 text-white py-3 rounded">
        Save Profile
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import imageCompression from 'browser-image-compression'

// Reactive state bindings loaded from permanent local storage
const username = ref(localStorage.getItem('username') || '')

const profileImage = ref(localStorage.getItem('profileImage') || '')

const theme = ref(localStorage.getItem('theme') || 'light')

const loading = ref(false)

// Handle media uploads by compressing and converting to Base64
async function uploadImage(event) {
  const file = event.target.files[0]

  if (!file) return

  loading.value = true

  const compressed = await imageCompression(file, {
    maxSizeMB: 1,
  })

  const reader = new FileReader()

  reader.onload = () => {
    profileImage.value = reader.result
    loading.value = false
  }

  reader.readAsDataURL(compressed)
}

// Save profile data to localStorage
function saveProfile() {
  localStorage.setItem('username', username.value)

  localStorage.setItem('profileImage', profileImage.value)

  localStorage.setItem('theme', 'light')

  window.location.reload()
}
// Watcher tracking dark mode selection changes reactively
watch(theme, (val) => {

  if (val === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

})
</script>
