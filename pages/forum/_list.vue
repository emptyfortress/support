<template lang="pug">
.container
	h2
		i.icon-forum/ {{ forums[ indeks ].title }}
	p {{ forums[ indeks ].desc }}
	br
	.tabs
		ul
			li(v-for='tab in tabs'  :class="activeTab == tab.id ? 'is-active' : ''")
				a(@click="setTab(tab.id)") {{ tab.name }}
	.tags
		.tag.is-rounded.is-medium(v-for="section in sections" 
										:class="section.active ? 'is-info' : ''"
										@click="section.active = !section.active"
									) {{section.name}}

	#tab1(v-if="activeTab == 1")
		Topic(v-for='topic in topics' :key="topic.id" :title="topic.title" :fio="topic.fio" :reply="topic.reply" :counter="topic.counter")

	#tab2(v-if="activeTab == 2")
		Topic(v-for='topic in tab2' :key="topic.id" :title="topic.title" :fio="topic.fio" :reply="topic.reply" :counter="topic.counter")

	#tab3(v-if="activeTab == 3")
		Topic(v-for='topic in tab3' :key="topic.id" :title="topic.title" :fio="topic.fio" :reply="topic.reply" :counter="topic.counter")

	#tab4(v-if="activeTab == 4")
		Topic(v-for='topic in tab4' :key="topic.id" :title="topic.title" :fio="topic.fio" :reply="topic.reply" :counter="topic.counter")

</template>

<script>
import Topic from '@/components/lists/Topic';
	

export default {
	transition(to, from) {
		if (!from) return 'slide-left'
		return +to.params.id > +from.params.id ? 'slide-right' : 'slide-left'
	},
	data() {
		return {
		activeTab: 1,
		tabs: [
			{ id: 1, name: 'Все' },
			{ id: 2, name: 'Популярное' },
			{ id: 3, name: 'Новое' },
			{ id: 4, name: 'Дискуссии' },
		],
		sections: [
			{ id: 1 , active: true, name: 'Все', to: '', },
			{ id: 2 , active: false, name: 'Запланировано', to: '', },
			{ id: 3 , active: false, name: 'Не запланировано', to: '', },
			{ id: 4 , active: false, name: 'Завершено', to: '', },
			{ id: 5 , active: false, name: 'С ответом', to: '', },
			{ id: 6 , active: false, name: 'Без статуса', to: '', },
		],
		forums: [
			{ id: 1, title: "ЧаВо", desc: "Форум всех вопросов"  },
			{ id: 2, title: "Идеи и предложения", desc: "Предложения по развитию функционала ДВ"  },
			{ id: 3, title: "Администрирование ДВ", desc: "Обсуждение сбоев"  },
			{ id: 4, title: "ДВ-информер", desc: "Вопросы по ДВ-информер"  },
			{ id: 5, title: "Конструкторы", desc: "Конструирование решений на платформе ДВ"  },
			{ id: 6, title: "Форсаж 5", desc: "Производительность ДВ 5"  },
			{ id: 7, title: "Демоверсии", desc: "Вопросы Docsvision Live"  },
			{ id: 8, title: "Обучение", desc: "Основы программирования в решениях ДВ"  },
			{ id: 9, title: "Проекты", desc: "Вопросы создания СЭД"  },
		],
		topics: [
			{ id: 1, title: "Доминантсептаккорд имеет нечетный канал", fio: "Семен Семенович", reply: 2, counter: 4  },
			{ id: 2, title: "Септаккорд многопланово иллюстрирует райдер", fio: "Аристарх Сигизмундович", reply: 2, counter: 4  },
			{ id: 3, title: "Рондо, так или иначе, варьирует голос", fio: "Марфа Степановна", reply: 2, counter: 4  },
			{ id: 4, title: "Струна, по определению, начинает перекрестный флюгель-горн", fio: "Барак Обамович", reply: 2, counter: 4  },
			{ id: 5, title: "Арпеджио, так или иначе, иллюстрирует кризис жанра", fio: "Трифон Ильич", reply: 2, counter: 4  },
			{ id: 6, title: "Канал заканчивает фузз", fio: "Ольга Петровна", reply: 2, counter: 4  },
			{ id: 7, title: "Трехчастная фактурная форма полифигурно выстраивает полиряд", fio: "Семен Семенович", reply: 2, counter: 4  },
			{ id: 8, title: "Крещендирующее хождение образует нечетный ревер", fio: "Марфа Степановна", reply: 2, counter: 4  },
			{ id: 9, title: "Нежилое помещение подведомственно арбитражному суду", fio: "Трифон Ильич", reply: 2, counter: 4  },
			{ id: 10, title: "Взаимозачет публичен", fio: "Аристарх Сигизмундович", reply: 2, counter: 4  },
			{ id: 11, title: "Законодательство запрещает акционерный индоссамент", fio: "Марфа Степановна", reply: 2, counter: 4  },
			{ id: 12, title: "Перестрахование акцептовано", fio: "Петр Петрович", reply: 2, counter: 4  },
		]
		}
	},
	computed: {
		indeks() {
			let mylist = [ 'faq', 'idea', 'admin', 'informer', 'construct', 'efficient', 'live', 'program', 'project' ];
			return mylist.indexOf( this.$route.params.list );
		},
		tab2() {
			function checkEven(arg) {
				return arg.id > 5;
			}
			return this.topics.filter(checkEven);
		},
		tab3() {
			function checkEven(arg) {
				return arg.id > 8;
			}
			return this.topics.filter(checkEven);
		},
		tab4() {
			function checkEven(arg) {
				return arg.id > 10;
			}
			return this.topics.filter(checkEven);
		}
	},
	methods: {
		setTab(e) {
			this.activeTab = e;
		},
	},
	components: {
		Topic
	}
}
</script>

<style scoped lang="scss">
@import '~bulma/sass/elements/tag';
	
.tag {
	cursor: pointer;
}
</style>
