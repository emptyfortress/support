<template lang="pug">
	.container
		.breadcrumb.has-bullet-separator
			ul
				<!-- li <nuxt&#45;link to="/">Главная</nuxt&#45;link> -->
				<!-- <!&#45;&#45; li <nuxt&#38;#45;link to="/users">Главная</nuxt&#38;#45;link> &#45;&#45;> -->
				<!-- li.is&#45;active <nuxt&#45;link to="/">Условия</nuxt&#45;link> -->
				<!-- li(v&#45;for="(item, index) in $route.matched" :key='index') <nuxt&#45;link :to="{path: item.path}">{{routeName(item.name)}}</nuxt&#45;link> -->
				<li v-for="item in crumbs"> <nuxt-link :to="item.path">{{item.breadcrumb}}</nuxt-link></li>
</template>

<script>
const breadcrumbs = {
	'/condition': 'Condition',
	'condition-urgent': 'Urgent'

}
export default {
	computed: {
		crumbs() {
			let crumbs = []
			this.$route.matched.forEach( item => {
				if (breadcrumbs[item.name] || breadcrumbs[item.path]) {
					item.breadcrumb = breadcrumbs[item.name] || breadcrumbs[item.path]
					crumbs.push(item)
				}
			})
			return crumbs
		}
	}
}
</script>
<style scoped lang="scss">
@import '~bulma/sass/components/breadcrumb';

.container {
	margin: 0 auto;
	max-width: 780px;
}
.breadcrumb {
	margin-left: 0;
	font-size: .8rem;
	font-family: $small;
	li a {
		text-decoration: none;
		/* color: $dv-green; */
		&:hover {
			text-decoration: underline;
		}
	}
	li.is-active a {
		color: $dv-gray3;
	}
}


</style>

