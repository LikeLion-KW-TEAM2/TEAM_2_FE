import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'

export default () => {
  return defineConfig({
    plugins: [
      react(),
      tsconfigPaths(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'logo192.svg', 'logo512.svg'],
        manifest: {
          name: '돈두댓',
          short_name: '돈두댓',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'favicon.svg',
              sizes: '64x64',
              type: 'image/png',
            },
            {
              src: 'logo192.svg',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'logo512.svg',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'logo512.svg',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
      }),
    ],
  })
}
