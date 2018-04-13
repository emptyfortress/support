<template lang="pug">
#top
	h1 {{ articles[ ($route.params.id - 1) ].title }}
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
			a(href="#" class="level-left")
				i.level-item.icon-share 8
				i.level-item.icon-eye1
					span 20
			nuxt-link(to="#comments").level-right
				i.icon-bubble 7
		.send.level
			p.level-left Не нашли то, что искали?
			.button.is-outlined.is-primary Отправить запрос
		.related
			h3 Похожие статьи
			ul
				li(v-for="item in related")
					a(:href="url" target="_blank") {{item}}
		#comments.comments
			h3 Комментарии (4)
			template(v-for="item in comments")
				.listComments
					Comment(:user='item.user' :text='item.text')/
			Addcomment/
		br
		br
		nuxt-link.button.is-light.is-fullwidth(to="#top") Наверх
</template>

<script>
import User from '@/components/User';
import Counter from '@/components/Counter';
import Comment from '@/components/Comment';
import Addcomment from '@/components/Addcomment';

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
			],
			comments: [
				{ user: 'Семен Семенович', text: 'В условиях очагового земледелия лессиваж достоверно окисляет лёсс. Потенциал почвенной влаги пространственно увлажняет неоднородный тензиометр. Однако, при увеличении выборки кристаллическая решетка минералов поглощает гистерезис ОГХ.' },
				{ user: 'Аристарх Сигизмундович', text: 'Белоглазка эволюционирует в удельный водоупор.' },
				{ user: 'Марфа Степановна', text: 'Фронт, по данным почвенной съемки, вымывает в пахотный эксикатор только в отсутствие тепло- и массообмена с окружающей средой.' },
				{ user: 'Барак Обамович', text: 'Если принять во внимание физическую неоднородность почвенного индивидуума, можно прийти к выводу о том, что осушение нагревает фингер-эффект. Пескование снижает бурозём даже в том случае, если непосредственное наблюдение этого явления затруднительно. Чизелевание перманентно нейтрализует мозаичный ил.' },
			]
		}
	},
	computed: {
		comm() {
			return this.$route.fullPath + '#comments'
		},
		top() {
			return this.$route.fullPath + '#top'
		}


	},
	methods: {
		show() {
			this.subscribe = !this.subscribe
		}
	},
	components: {
		User,
		Counter,
		Comment,
		Addcomment
	}
};

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
.related ul {
	margin: 0;
	list-style: none;
	margin-bottom: 4rem;
}

.listComments {
	margin-top: 1rem;
}

</style>
