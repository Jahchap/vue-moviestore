export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtApp',
    script: [
      {
        src: 'https://js.stripe.com/v3'
      }
    ],
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/ant-design-vue',
    { src: '@/plugins/progressive-image', ssr: false },
    { src: '~/plugins/persistedState.js', ssr: false },
    { src: '~/plugins/vue-stripe.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
     '@nuxtjs/axios',
     '@nuxtjs/auth'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    port: 4000,
    host: '0.0.0.0',
    timing: false
  },

  auth: {
    redirect: {
      login: '/', // redirect user when not connected
      callback: '/'
    },
    strategies: {
      local: false,
      auth0: {
        domain: 'dev-l-glzef7.us.auth0.com',
        client_id: 'EtRB3aMxyaoBGdAOChBNJKUSzSgUS8MQ'
      }
    }
  },
}
