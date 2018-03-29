<template lang="pug">
div
	h2 {{ articles[ ($route.params.id - 1) ].title }}
	.level
		.level-item
			Counter/
			.level-item.subs( @click="show" )
				i.icon-star(v-bind:class='{active: subscribe}' title="Подписка")
				span(v-show="subscribe") Подписка
		.level-item
			User( :name="articles[ ($route.params.id - 1) ].name" ago="Обновлено 2 мес. назад" )
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
				i.icon-bubble 4
		.send.level
			p.level-left Не нашли то, что искали?
			.button.is-outlined.is-primary Отправить запрос
		.related
			h3 Похожие статьи
			ul
				li(v-for="item in related")
					a(:href="url" target="_blank") {{item}}
		.comments
			h3 Комментарии (4)
			.level.comment
				.level-left
					User( name="Семен Семенович" ago="24 авг 2017" link="true" )
				.level-right
					Counter/
</template>

<script>
import User from '@/components/User';
import Counter from '@/components/Counter';

export default {
	transition(to, from) {
    if (!from) return 'slide-left'
    return +to.params.id > +from.params.id ? 'slide-right' : 'slide-left'
  },
	props: [ 'title', 'user' ],
	data() {
		return {
			subscribe: false,
			articles: [
				{ id: 1, to: '/docs/platform/1', name: 'Екатерина Петровна', title: 'Установка и администрирование Docsvision 5.2.2450' },
				{ id: 2, to: '/docs/platform/2', name: 'Василий Иванович', title: 'Конструктор согласований Docsvision 5.4.2642' },
				{ id: 3, to: '/docs/platform/3', name: 'Петр Петрович', title: 'Установка и администрирование Docsvision 5.3.2559' },
				{ id: 4, to: '/docs/platform/4', name: 'Никодим Афанасьевич', title: 'Установка и администрирование Docsvision 5.2.2542' },
			],
			url: "http://www.docsvision.com/docs/542642/Platform/InstallationAdministrationGuide/index.html",
			list: [
				{title: "Руководство по установке и администрированию Docsvision 5.4.2642"},
				{title: "Руководство по настройке Docsvision 5.4.2642"},
				{title: "Справка DV Docsvision 5.4.2642" }
			],
			related: [
				'Руководства по платформе Docsvision 5.4.2642',
				'Руководство разработчика на платформе DocsVision 5',
				'Приложение "Управление документами" Docsvision 5.4.2642',
				'Модуль "Почтовый клиент 5.4.5"',
				'Накопительное обновление №11 для версии Docsvision 5.4.2642'
			]
		}
	},
	methods: {
		show() {
			this.subscribe = !this.subscribe
		}
	},
	components: {
		User,
		Counter
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
h2,h3,h4 {
	/* font-weight: 300; */
	font-weight: 400;
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

.icon-star {
	color: $dv-gray2;
	font-size: 2rem;
	cursor: pointer;
	&.active {
		color: $dv-green;
	}
	&:hover {
		color: $dv-blue;
	}
	&:active {
		color: $dv-green;
	}
}
.subs {
	cursor: pointer;
	span { 
		color: $dv-green;
	}
}
h2 {
	font-size: 2rem;
}
h3, h4 {
	margin-bottom: 1rem;
}
.related ul {
	margin: 0;
	list-style: none;
	margin-bottom: 4rem;
	/* border-bottom: 1px dotted #333; */
}

.comments {
	/* border-top: 1px dotted #333; */

}
</style>
