import { createRouter, createWebHistory } from 'vue-router'

// Import all view page components for mapping
import HomeView from '../views/HomeView.vue'
import SongDetailView from '../views/SongDetailView.vue'
import MusicVideoView from '../views/MusicVideoView.vue'
import MusicVideoDetailView from '../views/MusicVideoDetailView.vue'
import ProfileView from '../views/ProfileView.vue'

// Define the application URL path routing table registry
const routes = [
  { path: '/', component: HomeView },
  { path: '/song/:id', component: SongDetailView },
  { path: '/videos', component: MusicVideoView },
  { path: '/video/:id', component: MusicVideoDetailView },
  { path: '/profile', component: ProfileView }
]
// Export initialized router instance using clean browser history mode
export default createRouter({
  history: createWebHistory(),
  routes
})
