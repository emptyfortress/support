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
		br
		p Для регистрации на Портале технической поддержки Docsvision напишите нам на адрес электронной почты <a href="#">info@docsvision.com</a>. При этом необходимо указать Имя, Фамилию, Организацию, Электронный адрес для каждого регистрируемого сотрудника.

		p Регистрация на Портале техподдержки даёт возможность создавать заявки в техподдержку Docsvision, создавать темы на форумах, комментировать существующие.
		h4 Обратите внимание:
		ul.bullet
			li(v-for="item in maplist") {{ item.text }}
		.level
			a(href="#" class="level-left")
				i.level-item.icon-share 8
				i.level-item.icon-eye1
					span 20
			nuxt-link(to="#comments").level-right
				i.icon-bubble 7
		Mistype/
		.related
			h3 Похожие статьи
			ul
				li(v-for="item in related")
					a(:href="url" target="_blank") {{item}}
		.related
			h3 Недавние статьи
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
import Mistype from '@/components/Mistype';

export default {
	transition(to, from) {
    if (!from) return 'slide-left'
    return +to.params.id > +from.params.id ? 'slide-right' : 'slide-left'
  },
	props: [ 'title', 'user' ],
	data() {
		return {
			subscribe: false,
			maplist: [
				{ text: 'Возможность создавать новые заявки в службу технической поддержки есть только у заказчиков, которые имеют право получения технической поддержки (год с момента приобретения + срок действия пакета обновления). Также заявки могут создавать компании-партнеры по внедрению.' },
				{ text: 'При приобретении Docsvision мы создаем учетную запись организации и одну учетную запись для специалиста, контакт которого указан в форме заявки на лицензию. При регистрации на указанную электронную почту приходит ссылка. Если письмо не пришло, попробуйте посмотреть в спаме.' },
				{ text: 'При возникновении проблем с доступом на портал пишите на нашу информационную линию info@docsvision.com' },
				{ text: 'Количество зарегистрированных специалистов не ограничено, однако необходимо учесть, что мы не контролируем то, что сотрудник продолжает работать в компании. Если ваш коллега более не работает, сообщите, пожалуйста. Мы заблокируем учетную запись. Список сотрудников, которые могут просматривать заявки, можно запросить в технической поддержке.' },
			],
			articles: [
				{ id: 1, to: '/map/1', name: 'Ольга Трачук', title: 'Регистрация и доступ на портал' },
				{ id: 2, to: '/map/2', name: 'Ольга Трачук', title: 'Путеводитель по порталу' },
				{ id: 3, to: '/map/3', name: 'Ольга Трачук', title: 'Работа с инцидентами на портале' },
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
	methods: {
		show() {
			this.subscribe = !this.subscribe
		}
	},
	components: {
		User,
		Counter,
		Comment,
		Addcomment,
		Mistype
	}
}
</script>

<style scoped lang="scss">
a.is-active {
	color: $dv-green;
}
.content {
	font-size: 1.1rem;
	line-height: 150%;
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

p { 
	margin-bottom: 2rem;
	color: $black;
	a { color: $blue }
}
.bullet {
	list-style: disc;
	margin-left: 1.5rem;
	li { margin-bottom: 1.5rem; }

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
</style>
