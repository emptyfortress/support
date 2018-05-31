<template lang="pug">
.container
	h2
		i.icon-bookmark/ Мои запросы
	.columns
		ul.column.is-2
			li
				nuxt-link(to="/myrequest/1") Запросы
			li
				nuxt-link(to="/myrequest/2") Публикации
			li
				nuxt-link(to="/myrequest/3") Подписка
		.column
			<nuxt-child :key="$route.params.id"/>
</template>

<script>
	export default {
		layout: 'main',
		transition: {
			name: 'zoomin',
			mode: 'out-in'
		},
	}
</script>

<style scoped lang="scss">
@import '~bulma/sass/grid/columns';


</style>

