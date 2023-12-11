import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass';
import viteSvgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSvgr({
    svgrOptions: {
      // svgr options
    },
  }),],
  server: {
    watch: {
      usePolling: true,
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass,
      },
    },
    modules: {
      localsConvention: 'camelCase',
    },
  },
})
