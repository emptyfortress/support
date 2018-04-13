<template lang="pug">
	transition(name='fade' mode='in-out')
		.container
			.yellow
			.flex1
				.one Ошибка 404
				.center
					div
						Logo/
					img(src="~assets/img/dog.png")
				.two {{err}}
			div 
				nuxt-link(to="/") Вернуться на главную
</template>

<script>
	import Logo from '@/components/Logo';


	export default {
		name: 'error',
		data() {
			return {
				err: 'Искомая страница не существует. Возможно, вы ошиблись в адресе, или страница была перемещена'
			}
		},
		props: ['error'],
		components: { Logo }
	}
</script>

<style scoped lang="scss">
.container {
	background: $dv-gray1;
	height: 100vh;
	max-width: none;
	padding-top: .5rem;
	position: relative;
	div {
		text-align: center;
	}
}
.yellow {
	height: 7rem;
	width: 100%;
	position: absolute;
	top: 140px;
	background: $dv-yellow;
	z-index: 0;
	border-bottom: 3px solid $dv-blue;
}

.flex1 {
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	.center {
		width: 30%;
		div {
			width: 210px;
			margin: 0 auto;
		}
		img {
			width: 300px;
			margin: 0 auto;
			display: block;
		}
	}
	.one {
		margin-top: 6rem;
		font-size: 2rem;
		color: $dv-blue;
		width: 30%;
		text-align: right;

	}
	.two {
		width: 30%;
		margin-top: 6rem;
	}
}

</style>
