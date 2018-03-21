<template lang="pug">
	.search
		div
			<i class="icon-search"></i>
			input(v-model="search" placeholder="Поиск" @focus="complete = true" @blur="complete = false")
			.autocomplete(v-show="complete")
				div(v-show="showPop")
					h3 Популярные статьи
					ul
						li(v-for="article in articles") {{ article }}
</template>

<script>
	export default {
		data() {
			return {
				complete: false,
				search: '',
				articles: [
					'Это первая популярная статья',
					'Основание, в силу третьего закона Ньютона, заставляет перейти к более сложной системе дифференциальных уравнений',
					'Будем также считать, что маховик горизонтально характеризует астатический альтиметр',
					'Максимальное отклонение астатически заставляет',
					'Момент сил, как можно показать с помощью не совсем тривиальных вычислений',
					'Это вторая популярная статья',
				]
			}
		},
		computed: {
			showPop() {
				return this.search.length == 0 ? true : false
			}
		},
	}
</script>

<style scoped lang="scss">
.search {
	height: 42px;
	border-bottom: 1px solid $dv-gray2;
	div {
		position: relative;
		max-width: 780px;
		margin: 0 auto;
		i {
			position: absolute;
			top: 10px;
			right: .5rem;
			font-size: 1.2rem;
			color: $main;
		}
		input {
			width: 100%;
			height: 40px;
			display: block;
			border: none;
			outline: none;
			/* background: transparent; */
			font-size: 1.5rem;
			padding-left: 1rem;
		}
		::placeholder {
			color: $dv-gray3;
			font-size: 1.1rem;
		}
		.autocomplete {
			width: 100%;
			min-height: 100px;
			border: 1px solid #eee;
			box-shadow: 0 2px 3px #ccc;
			position: relative;
			top: 0px;
			border-radius: 0 0 5px 5px;
			padding: 1rem;
			h3 {
				text-transform: uppercase;
				font-family: $font;
				font-weight: 300;
				font-size: 1rem;
				color: $main;
			}
			ul {
				list-style: none;
				margin: 0;
				margin-left: 1rem;
				padding: 0;
				li {
					margin: 0;
					color: $dv-blue;
					padding: .5rem;
					cursor: pointer;
					&:hover {
						background: $dv-gray1;
					}
				}
			}
		}
	}
}

</style>
