<template lang="pug">
	.container
		.breadcrumb.has-bullet-separator
			ul
				li <nuxt-link to="/">Главная</nuxt-link>
				<li v-for="item in crumbs"> <nuxt-link :to="item.path" >{{item.breadcrumb}}</nuxt-link></li>
</template>

<script>
const breadcrumbs = {
	'/condition': 'Условия',
	'condition-urgent': 'Экстренная техподдержка'

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
	/* margin: 0 auto; */
	/* max-width: 780px; */
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
	li a.is-active {
		color: $dv-green;
		&:hover { text-decoration: none }
	}
}


</style>

