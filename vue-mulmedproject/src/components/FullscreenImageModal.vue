<template>
  <!-- Bootstrap Modal -->
  <div
    class="modal fade show d-block"
    tabindex="-1"
    style="background: rgba(0,0,0,0.9)"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content bg-black text-white">

        <!-- Header -->
        <div class="modal-header border-0">
          <h5>Album Cover</h5>

          <button
            class="btn-close btn-close-white"
            @click="$emit('close')"
          ></button>
        </div>

        <!-- Body -->
        <div class="modal-body text-center">

          <img
            :src="image"
            :style="{
              transform: `scale(${zoom})`,
              transition: '0.3s'
            }"
            class="mx-auto max-h-[70vh]"
          />

          <div class="mt-4 flex justify-center gap-4">

            <button
              class="btn btn-success"
              @click="zoom += 0.2"
            >
              Zoom In
            </button>

            <button
              class="btn btn-danger"
              @click="zoom -= 0.2"
            >
              Zoom Out
            </button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Receive image source from parent component
defineProps({
  image: String
})

// Reactive state for image zoom scale (Initial value 1 = 100%)
const zoom = ref(1)
</script>