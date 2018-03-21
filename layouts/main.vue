<template lang="pug">
	<transition name="zoomin" mode="out-in">
		.main
			.header
				Ham/
				Logo/
				.right
					Loud/
					div
						Enter
			.nav(:class="{active : $store.state.navigation}")
				.navgrid
					SectionLight(v-for="section in sections" :key="section.id" :icon="section.icon" :name="section.name")
			.search
				div
					<i class="icon-search"></i>
					input(v-model="search" placeholder="Поиск" @focus="complete = true" @blur="complete = false")
					.autocomplete(v-show="complete")
						div(v-show="showPop")
							h3 Популярные статьи
							ul
								li(v-for="article in articles") {{ article }}
			<nuxt/>
	</transition>
</template>


<script>
	import Logo from '@/components/Logo';
	import Loud from '@/components/Loud';
	import Enter from '@/components/Enter';
	import Ham from '@/components/Ham';
	import SectionLight from '@/components/SectionLight';


	export default {
		data() {
			return {
				// nav: false,
				complete: false,
				search: '',
				sections: [
					{ id:  1, icon: 'condition', name: 'Условия' },
					{ id:  2, icon: 'map',       name: 'Путеводитель' },
					{ id:  3, icon: 'download',  name: 'Загрузить' },
					{ id:  4, icon: 'book',      name: 'Документация' },
					{ id:  5, icon: 'lifering',  name: 'Техподдержка' },
					{ id:  6, icon: 'send',      name: 'Отправить запрос' },
					{ id:  7, icon: 'bookmark',  name: 'Мои запросы' },
					{ id:  8, icon: 'code',      name: 'Разработчикам' },
					{ id:  9, icon: 'faq',       name: 'ЧаВо' },
					{ id: 10, icon: 'mail',      name: 'Контакты' },
				],
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
		components: {
			Logo,
			Loud,
			Enter,
			Ham,
			SectionLight
		}
	}
</script>

<style scoped lang="scss">
.header {
	height: 69px;
	padding: 0 1rem;
	background: $dv-gray1;
	border-bottom: 1px solid $dv-gray2;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.right {
	display: flex;
	align-items: center;
	div {
		margin-left: 14px;
	}
}

.search {
	height: 40px;
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
			background: transparent;
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
			top: -1px;
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

.nav {
	height: 0;
	background: $dv-blue;
	transition: all .3s cubic-bezier(.77,.06,.46,.97);
	-moz-box-shadow:    inset 0 2px 10px #000;
	-webkit-box-shadow: inset 0 2px 10px #000;
	box-shadow:         inset 0 2px 10px #000;
	overflow: hidden;
	&.active {
		height: 320px;
	}

}
.navgrid {
	max-width: 780px;
	height: auto;
	margin: 2rem auto;
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;
}
</style>
