import { fileURLToPath } from 'node:url'
import path from 'node:path'
import Aura from "@primevue/themes/aura";
export default defineNuxtConfig({
  ssr: true,

  dir: {
    pages: 'app/routes',
    layouts: 'app/layouts',
    middleware: 'app/middleware',
    modules: 'app/modules',
    assets: 'shared/assets',
    public: 'shared/public',
    static: 'shared/static',
  },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@primevue/nuxt-module"
  ],

  css: ["primeicons/primeicons.css"],

  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Aura,
        options: {
          prefix: "p",
          darkModeSelector: ".fake-app-dark",
          cssLayer: {
            name: "primevue",
            order: "tailwind-base, primevue, tailwind-utilities",
          },
        },
      },
    },
    components: {
      exclude: ['Form', 'FormField'],
      include: "*",
      prefix: "Prime"
    },
  },

  tailwindcss: {
    viewer: false,
    configPath: "nuxt-tailwind.config",
  },

  runtimeConfig:{
    public:{
      SUPABASE_URL: "",
      SUPABASE_KEY: "",
      ANILIBRIA_API: "",
      ANIME_LIST: "",
      ANIME_SINGLE: "",
      ANIME_SEARCH: "",
      ANIME_SIMILAR: "",
      ANIME_POSTER: ""
    }
  },

  plugins: ["~/plugins/supabase.client"],

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
      cssCodeSplit: false,
      rollupOptions: {
        external: ['quill', 'chart.js/auto']
      }
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
  build: {
    transpile: ['primevue', 'quill']
  },
})