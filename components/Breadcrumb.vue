<template lang="pug">
	.container
		.breadcrumb.has-bullet-separator
			ul
				<!-- li <nuxt&#45;link to="/">Главная</nuxt&#45;link> -->
				<!-- <!&#45;&#45; li <nuxt&#38;#45;link to="/users">Главная</nuxt&#38;#45;link> &#45;&#45;> -->
				<!-- li.is&#45;active <nuxt&#45;link to="/">Условия</nuxt&#45;link> -->
				<!-- li(v&#45;for="(item, index) in $route.matched" :key='index') <nuxt&#45;link :to="{path: item.path}">{{routeName(item.name)}}</nuxt&#45;link> -->
				<li v-for="(item, index) in $route.matched" :key='index'> <nuxt-link :to="{path: item.path}">{{routeName(item.name)}}</nuxt-link></li>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			routeName (name) {
				var routeNames = {
					index: 'Home',
					condition: 'Условия',
					'condition-urgent': 'Экстренная техподдержка',
					map: 'Путеводитель',
					load: 'Загрузить',
					docs: 'Документация',
				}
				return routeNames[name]
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

