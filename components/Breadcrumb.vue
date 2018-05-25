<template lang="pug">
	.container
		.breadcrumb
			ul
				li <nuxt-link to="/">Главная</nuxt-link>
				<li v-for="item in crumbs"> <nuxt-link :to="item.path" >{{item.breadcrumb}}</nuxt-link></li>
</template>

<script>
const breadcrumbs = {
	'/condition': 'Условия',
	'condition-urgent': 'Экстренная техподдержка',
	'/docs': 'Документация',
	'/map': 'Путеводитель',
	'/map/:id': 'some id here',
	'/product': 'Продукты',
	'/product/:id': 'тут название продукта',
	'/download': 'Загрузить',
	'/docs/platform': 'Платформа',
	'/docs/platform/:id': 'some id here',
	'/forum': 'Сообщество',
	'/forum/faq': 'ЧаВо',
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
		},
		id() {
			return $route.params.id
		}
	}
}
</script>
<style scoped lang="scss">
@import '~bulma/sass/components/breadcrumb';

.breadcrumb {
	margin-left: 0;
	font-size: .8rem;
	font-family: $small;
	ul {
		margin: 0;
		padding: 0;
	}
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

