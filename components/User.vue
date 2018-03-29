<template lang="pug">
.user
	.link.tooltip(data-tooltip='Скопировать постоянную ссылку' v-show="link")
		i.icon-link/
	i.icon-user/
	.fio
		nuxt-link(to="/") {{ name }}
		br/
		span {{ ago }}
</template>

<script>
	
	export default {
		props: ['name', 'ago', 'link'],
		methods: {
			showLink() {
				return this.link ? true : false
			}
		}
		
	}
</script>

<style scoped lang="scss">

.user {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	cursor: pointer;
	&:hover {
		.link {
			display: block;
		}
	}
	span {
		font-size: .95rem;
		font-family: $small;
		color: #ccc;
	}

	i.icon-user {
		font-size: 2.5rem;
		color: $dv-gray2;
		vertical-align: middle;
	}
	.link {
		position: absolute;
		top: 1rem;
		left: -1rem;
		display: none;
	}
	i.icon-link {
		color: $dv-blue;
	}
}

</style>
