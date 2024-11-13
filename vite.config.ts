import path from 'node:path'

import { fileURLToPath, URL } from 'node:url'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
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
    AutoImport({
      imports: [
        'vue',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          'vue-router/auto': ['useLink'],
        },
      ],
      dts: 'resources/vue/src/auto-imports.d.ts',
      dirs: [
        'resources/vue/src/composables',
        'resources/vue/src/stores',
      ],
      vueTemplate: true,
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
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, 'resources/vue/locales/**')],
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
