<template lang="pug">
	div
		h3 Популярные статьи
		ul
			li(v-for="article in articles") {{ article }}
</template>

<script>
	export default {
		data() {
			return {
				articles: [
					'Это первая популярная статья',
					'Основание, в силу третьего закона Ньютона, заставляет перейти к более сложной системе дифференциальных уравнений',
					'Будем также считать, что маховик горизонтально характеризует астатический альтиметр',
					'Максимальное отклонение астатически заставляет',
					'Момент сил, как можно показать с помощью не совсем тривиальных вычислений',
					'Это вторая популярная статья',
				]
			}
		}
	}
</script>

<style scoped lang="scss">
h3 {
	text-transform: uppercase;
	font-family: $font;
	font-weight: 300;
	font-size: .9rem;
	color: $main;
	margin: 1rem;
}
ul {
	list-style: none;
	margin: 0;
	padding: 0;
	li {
		margin: 0;
		color: $dv-blue;
		padding: 1rem;
		cursor: pointer;
		&:hover {
			background: $dv-gray1;
		}
	}
}
</style>
