<template lang="pug">
#top.container
	.columns
		.column.is-2
			Counter/
			.subs( @click="show" )
				i.icon-star(v-bind:class='{active: subscribe}' title="Подписка")
				span(v-show="subscribe") Подписка
		.column
			h1 Отправка почтового сообщения с высоким приоритетом
			.level
				.level-left
					User( name="Екатерина Петровна" ago="Обновлено 2 недели назад" )
			.content
				p Добрый день. Возможна ли отправка почтового сообщения с высоким приоритетом, стандартными средствами DV, либо установка признака "Важно"?
				p Имеет БП, который отправляет уведомления пользователям что истекает срок согласование заявки. Хотелось бы их как то выделить в почте.
				p На данный момент отправка реализована следующим образом:
				.code
					pre ExGate oMailGate = (ExGate)process.Gates[ExGate.GateID]
					pre ExMessage mess = new ExMessage()
					pre mess.Subject = "Задание DV"
					pre mess.RecipientsTo.Add(email)
					pre mess.HTMLBody = body
					pre oMailGate.SendMessage(mess)
			br
			.level
				a(href="#" class="level-left")
					i.level-item.icon-share 8
					i.level-item.icon-eye1
						span 20
				nuxt-link(to="#comments").level-right
					i.icon-bubble 7
			Mistype/
			br
			.related
				h3 Похожие статьи
				ul
					li(v-for="item in related")
						a(href="#" target="_blank") {{item}}
			.related
				h3 Недавние статьи
				ul
					li(v-for="item in related")
						a(href="#" target="_blank") {{item}}
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
		data() {
			return {
				subscribe: false,
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
@import '~bulma/sass/grid/columns';

.container {
	padding-top: 4rem;
}
h1 { margin-top: 0; }

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
	margin-top: 1rem;
	cursor: pointer;
	text-align: center;
	span { 
		color: $dv-green;
		display: block;
	}
}
.column.is-2 {
	text-align: center;
	/* border: 1px solid #ccc; */
	padding: 1rem;
}

.level-item.counter {
	margin: 0 auto;
}

a.is-active {
	color: $dv-green;
}

.content {
	font-size: 1.1rem;
	line-height: 150%;
	p {
		margin-bottom: 1rem;
	}
	.code {
		/* font-family: Courier; */
		font-size: 1.2rem;
		padding: 1rem;
		border: 1px solid #ccc;
		border-radius: .5rem;
		background: $dv-gray1;
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

.related {
	h3 {
		font-size: 1.3rem;
		color: #666;
	}
	ul {
	margin: 0;
	list-style: none;
	margin-bottom: 4rem;
	font-size: 1.1rem;
	line-height: 150%;
	li {
		margin-bottom: .5rem;
	}
}

}

.listComments {
	margin-top: 1rem;
}
</style>


