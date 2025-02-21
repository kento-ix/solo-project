import path from "node:path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label'
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
    tailwindcss(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${path.join(process.cwd(), "src/_mantine").replace(/\\/g, "/")}";`,
      },
    },
  },
})
