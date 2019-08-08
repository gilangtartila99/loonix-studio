// const axios = require('axios')

module.exports = {
  server: {
    port: 9903, // default: 3000
    host: '127.0.0.1', // default: localhost
  },
  mode: 'spa',
  router: {
    mode: 'history',
    // extendRoutes (routes, resolve) {
    //   routes.push({
    //     name: 'NotFound',
    //     path: '*',
    //     component: resolve(__dirname, 'pages/handler/404.vue')
    //   })
    // }
  },

  icon: {
    iconSrc: '/img/favicon.ico',
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Ioonix Studio | Ioonix Studio Project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#FFFFFF'},
      { hid: 'description_1', name: 'description', content: 'Ioonix Studio Project' },
      { hid: 'keywords_1', name: 'keywords', content: 'ioonix studio' },
      { hid: 'title_1', itemprop: 'title', content: 'Ioonix Studio | Ioonix Studio Project' },
      { hid: 'description_2', itemprop: 'description', content: 'Ioonix Studio Project' },
      { hid: 'keywords_2', itemprop: 'keywords', content: 'ioonix studio' },
      { hid: 'image_1', itemprop: 'image', content: '/img/loonix-logo-white.png' },
      { hid: 'url_1', itemprop: 'url', content: '/' },
      { hid: 'description_3', property: 'og:description', content: 'Ioonix Studio Project' },
      { hid: 'title_2', property: 'og:title', content: 'Ioonix Studio | Ioonix Studio Project' },
      { hid: 'image_2', property: 'og:image', content: '/img/loonix-logo-white.png' },
      { hid: 'url_2', property: 'og:url', content: '/' },
      { hid: 'image_3', property: 'image', content: '/img/loonix-logo-white.png' },
      { hid: 'title_3', name: 'twitter:title', content: 'Ioonix Studio | Ioonix Studio Project' },
      { hid: 'description_4', name: 'twitter:description', content: 'Ioonix Studio Project' },
      { hid: 'image_4', name: 'twitter:image', content: '/img/loonix-logo-white.png' },
      { hid: 'url_3', name: 'twitter:url', content: 'https://loonixstudio/' },
      { hid: 'image_5', name: 'twitter:image', property: 'og.image', content: '/img/loonix-logo-white.png' },
      { hid: 'robot', name: 'robots', content: 'index, follow' },
      { hid: 'googlebots_1', name: 'googlebot', content: 'index, follow' },
      { hid: 'googlebots_2', name: 'googlebot-news', content: 'index, follow' },
      { hid: 'keywords_3', name: 'news_keywords', content: 'ioonix studio' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'white' },
      { name: 'google-site-verification', content: '' }
    ],
    link: [
      { hid: 'image_6', itemprop: 'image', href: '/img/loonix-logo-white.png' },
      { hid: 'image_7', property: 'image', href: '/img/loonix-logo-white.png' },
      { rel: 'shortcut icon', type: 'image/png', href: '/favicon.ico' },
      { rel: 'msapplication-TileColor', href: '#FFFFFF' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/others/Loading.vue',

  /*
  ** Global CSS
  */
  css: [
    { src: './assets/scss/base.scss', lang: 'scss'},
    { src: './assets/scss/mixins.scss', lang: 'scss'},
    { src: './assets/scss/animated.scss', lang: 'scss'},
    { src: './assets/scss/style.scss', lang: 'scss'},
    { src: './assets/scss/button.scss', lang: 'scss'},
    { src: './assets/scss/font.scss', lang: 'scss'},
    { src: './assets/scss/hamburger.scss', lang: 'scss'},
    { src: './assets/scss/font-awesome/scss/font-awesome.scss', lang: 'scss'}
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  
  modules: [
    "nuxt-compress"
  ],

  // sitemap: {
  //   routes () {
  //     console.log(this.$store)
  //     return axios.get('http://localhost:3100/blog/get-slug')
  //       .then(res => res.data.result.map(data =>  '/id/' + data.slug))
  //   }
  // },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
