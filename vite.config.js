import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        care: 'care-of-jewelry.html',
        decal: 'decal-application.html',
        presson: 'press-on-application.html'
      }
    }
  }
})