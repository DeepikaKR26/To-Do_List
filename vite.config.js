import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/To-Do-List/', // this must match your GitHub repo name
  plugins: [react()],
})
