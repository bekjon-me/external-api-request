import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import Layouts from 'vite-plugin-vue-layouts'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    VueRouter({
      dts: 'resources/vue/src/typed-router.d.ts',
      routesFolder: 'resources/vue/src/pages',
    }),
    vue(),
    Layouts({
      layoutsDirs: 'resources/vue/src/layouts',
    }),
    Components({
      dirs: [
        'resources/vue/src/components/',
      ],
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'resources/vue/src/components.d.ts',
    }),
    vueDevTools(),
    laravel({
      input: ['resources/vue/src/main.ts'],
      refresh: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./resources/vue/src', import.meta.url)),
    },
  },
})
