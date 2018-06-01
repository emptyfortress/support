<template lang="pug">
.container
	h2
		i.icon-bookmark/ Мои запросы
	.columns
		ul.column.is-2
			li
				nuxt-link(to="/myrequest/1" :class="$route.params.id == 1 ? 'active' : ''").request Запросы
			li
				nuxt-link(to="/myrequest/2" :class="$route.params.id == 2 ? 'active' : ''").request Публикации
			li
				nuxt-link(to="/myrequest/3" :class="$route.params.id == 3 ? 'active' : ''").request Подписка
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
.is-2 {
	margin-top: .5rem;
	li {
		width: 100%;
		.request {
			width: 100%;
			display: block;
			padding: .5rem 1rem;
			font-size: 1.2rem;
			background: #fff;
			&.active {
				position: relative;
				background: $dv-green;
				color: #fff;
				&:hover {
					background: $dv-green;
				}
				&:after {
					content: '';
					position: absolute;
					width: 12px;
					height: 24px;
					background: url(~assets/img/triangle.svg);
					right: -12px;
					top: 50%;
					transform: translateY(-12px);
				}
			}
			&:hover {
				text-decoration: none;
				background: #eee;
			}
		}
	}
}



</style>

