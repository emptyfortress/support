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
  loading: { color: '#8AC140' },
	router: {
		linkExactActiveClass: 'is-active',
		// base: '/support/',
		scrollBehavior(to, from, savedPosition) {
			if (to.hash) {
            return {selector: to.hash}
        } else {
            return { x: 0, y: 0 }
        }
    }
  },



	mode: 'universal',
  /*
  ** Build configuration
  */
	plugins: [ 
		{ src: '~/plugins/click-outside.js'},
		{ src: '~/plugins/vuelidate.js', ssr: false },
		{ src: '~/plugins/vuecarousel.js', ssr: false }
		// { src: '~/plugins/ripple.js'},
		// { src: '~/plugins/mySwiper.js', ssr: false }
	],
  build: {
		vendor: [ 'vuelidate' ],
		// vendor: ['click-outside'],
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
