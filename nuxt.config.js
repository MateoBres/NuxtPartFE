export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'miac-fe',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },{ rel: "preconnect", href: "https://fonts.googleapis.com" },
      {rel:"preconnect", href:"https://fonts.gstatic.com", crossorigin: "anonymous"},
      {href:"https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,600;0,900;1,300;1,400;1,600;1,900&display=swap", rel:"stylesheet"}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],

  env: {
    baseUrl: process.env.baseUrl,
    bearer_token: process.env.bearer_token,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.baseUrl,
    bearer_token: process.env.bearer_token,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // i18n module configurations
  i18n: {
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.js',
      },
      {
        code: 'it',
        name: 'Italiano',
        iso: 'it-IT',
        file: 'it.js',
      },
      {
        code: 'fr',
        name: 'Français',
        iso: 'fr-FR',
        file: 'fr.js',
      },
    ],
    langDir: 'locales/',
    defaultLocale: 'it',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'miac_locale',
      redirectOn: 'root', // recommended
    },
    syncRouteParams: true,
  },
}
