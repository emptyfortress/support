<template lang="pug">
div
	.zag
		.counter
		div
			h2 {{ articles[0].title }}
			.flex
				User( name="Екатерина" ago="2 мес." )
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
	p this is id: {{ $route.params.id }}
</template>

<script>
import User from '@/components/User';
export default {
	transition: {
		name: 'slide-right',
		mode: 'out-in'
	},
	data() {
		return {
			articles: [
				{ title: 'Установка и администрирование Docsvision 5.2.2450', to: '' },
				{ title: 'Конструктор согласований Docsvision 5.4.2642', to: '' },
				{ title: 'Установка и администрирование Docsvision 5.3.2559', to: '' },
				{ title: 'Установка и администрирование Docsvision 5.2.2450', to: '' },
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
	/* margin-right: 3rem; */
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
	.counter {
		width: 50px;
		height: 50px;
		background: #eee;
	}
}

</style>
