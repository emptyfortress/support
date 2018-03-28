<template lang="pug">
div
	.zag
		.counter
			div
				i.icon-up
				.num 11
				i.icon-down
			<!-- i.icon&#45;star -->
		div
			h2 {{ articles[ ($route.params.id - 1) ].title }}
			.flex
				User( :name="articles[ ($route.params.id - 1) ].name" ago="2 мес." )
				button.button.is-light.is-rounded + Подписаться
	.content
		ul
			li(v-for="item in list")
				a(:href="url" target="_blank") {{item.title}}
		.level
			a(href="" class="level-left")
				i.level-item.icon-share 8
				i.level-item.icon-eye1
					span 20
			a(href="" class="level-right")
				i.icon-bubble 12
		.send.level
			p.level-left Не нашли то, что искали?
			.button.is-outlined.is-primary Отправить запрос
</template>

<script>
import User from '@/components/User';
export default {
	transition(to, from) {
    if (!from) return 'slide-left'
    return +to.params.id > +from.params.id ? 'slide-right' : 'slide-left'
  },
	props: [ 'title', 'user' ],
	data() {
		return {
			articles: [
				{ id: 1, to: '/docs/platform/1', name: 'Екатерина', title: 'Установка и администрирование Docsvision 5.2.2450' },
				{ id: 2, to: '/docs/platform/2', name: 'Василий', title: 'Конструктор согласований Docsvision 5.4.2642' },
				{ id: 3, to: '/docs/platform/3', name: 'Петр', title: 'Установка и администрирование Docsvision 5.3.2559' },
				{ id: 4, to: '/docs/platform/4', name: 'Никодим', title: 'Установка и администрирование Docsvision 5.2.2542' },
			],
			url: "http://www.docsvision.com/docs/542642/Platform/InstallationAdministrationGuide/index.html",
			list: [
				{title: "Руководство по установке и администрированию Docsvision 5.4.2642"},
				{title: "Руководство по настройке Docsvision 5.4.2642"},
				{title: "Справка DV Docsvision 5.4.2642" }
			]
		}
	},
	components: {
		User
	}
}
</script>


<style scoped lang="scss">
@import '~bulma/sass/grid/columns';

.flex {
	display: flex;
	justify-content: space-between;
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
			&.current {
				color: $dv-green;
			}
		}
	}
}
a.is-active {
	color: $dv-green;
}
h2 {
	font-weight: 300;
	text-transform: uppercase;
	color: #666;
	margin-bottom: 2rem;
}

.content {
	font-size: 1.1rem;
	ul {
		margin-top: 3rem;
		margin-bottom: 3rem;
		list-style: circle;
		list-style-position: inside;
		li {
			line-height: 150%;
			margin-bottom: .5rem;
		}
	}
	.level a {
		color: #ccc;
		&:hover {
			text-decoration: none;
			color: $dv-blue;
		}
		&:active {
			color: $dv-green;
		}
	}
	.send {
		height: 64px;
		background: $dv-gray1;
		width: 100%;
		border-top: 1px solid $dv-gray2;
		border-bottom: 1px solid $dv-gray2;
		padding: 0 1rem;
		font-size: .95rem;
		color: #999;
	}
}
.zag {
	display: flex;
}

.counter {
	text-align: center;
	width: 2rem;
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	margin-right: 2rem;
	div {
		display: flex;
		flex-flow: column;
	}
	.num {
		font-weight: 900;
		margin: .5rem auto;
	}
	span {
		font-size: 2rem;
		vertical-align: bottom;
	}
	i {
		font-size: .9rem;
		color: $dv-gray2;
		cursor: pointer;
		&::before {
			display: inline;
		}
		&:hover {
			color: $dv-blue;
		}
		&.icon-star {
			display: block;
			font-size: 1.5rem;
			margin-bottom: 1rem;
		}
}
}

</style>
