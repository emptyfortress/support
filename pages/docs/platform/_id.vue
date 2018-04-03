<template lang="pug">
.container
	.columns
		.column.is-one-quarter.article-list.gray
			h3 Статьи в разделе
			ul
				li(v-for="item in $store.state.platforma")
					nuxt-link(:to="item.to") {{ item.title }} 
		.column.white
			<nuxt-child :key="$route.params.id"/>
</template>


<script>
export default {
	transition: {
		name: 'slide-right',
		mode: 'out-in'
	},
}
</script>


<style scoped lang="scss">
@import '~bulma/sass/grid/columns';

.container {
	margin-top: 4rem;
}
.article-list {
	h3 {
		font-size: .9rem;
		font-weight: normal;
	}
	ul {
		margin-top: 1rem;
		li {
			margin-bottom: 1.5rem;
			line-height: 150%;
		}
	}
}
a.is-active {
	color: $dv-green;
}
</style>
