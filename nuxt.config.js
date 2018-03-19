module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'support',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DV support site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,900&amp;subset=cyrillic' }
    ]
  },
	modules: [
    ['nuxt-sass-resources-loader', '~assets/css/settings.scss']
  ],
	css: [
		'~assets/css/main.scss'
	],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#f00' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
