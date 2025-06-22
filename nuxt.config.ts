import { fileURLToPath } from 'node:url'
import path from 'node:path'
export default defineNuxtConfig({
  ssr: true,

  dir: {
    pages: "app/routes",
    layouts: "app/layouts",
    middleware: "app/middleware",
    assets: "shared/assets",
    public: "shared/public"
  },

  alias: {
    '@': path.resolve(__dirname),
    '~': path.resolve(__dirname),
    'shared': path.resolve(__dirname, 'shared'),
    'assets': path.resolve(__dirname, 'shared/assets')
  },

  components: [
    {
      path: path.resolve(__dirname, 'shared/ui'),
      pathPrefix: false,
      extensions: ['.vue']
    }
  ],

  imports: {
    dirs: [
      'shared/**/composables',
      'shared/**/utils',
      'shared/**/stores'
    ]
  },

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true
      },
      template: {
        compilerOptions: {
          // Разрешаем файлы без скриптов
          whitespace: 'preserve',
          comments: true
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./', import.meta.url)),
        'shared': fileURLToPath(new URL('./shared', import.meta.url))
      },
      dedupe: ['vue']
    },
    build: {
      minify: false,
      cssCodeSplit: false
    }
  },
  typescript: {
    shim: false,
    typeCheck: 'build'
    
  },
  experimental: {
    
    payloadExtraction: false,
    noVueServer: true
  },

  nitro: {
    compressPublicAssets: true,
    
  },
  modules:[
    '@pinia/nuxt',
  ]
})