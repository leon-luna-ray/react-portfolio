import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [reactRefresh()]
})