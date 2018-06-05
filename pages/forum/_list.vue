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
										:class="activeTag == section.id ? 'is-info' : ''"
										@click="setTag(section.id)"
									) {{section.name}}
	.level-left Сортировка&nbsp;&nbsp;
		.select
			select
				option Новые вверху
				option Новые внизу
	transition-group(name="request" tag="span")
		Topic(v-for='topic in filteredList' :key="topic.id" :title="topic.title" :fio="topic.fio" :reply="topic.reply" :counter="topic.counter")
	Empty(v-if="activeTag == 6")/
	hr
	br
	nav.pagination.is-rounded
		a.pagination-previous Previous
		a.pagination-next Next
		ul.pagination-list
			li
				a.pagination-link.is-current 1
			li
				a.pagination-link 2
			li
				a.pagination-link 3
</template>

<script>
import Topic from '@/components/lists/Topic';
import Empty from '@/components/Empty';
	
export default {
	transition(to, from) {
		if (!from) return 'slide-left'
		return +to.params.id > +from.params.id ? 'slide-right' : 'slide-left'
	},
	data() {
		return {
		activeTab: 1,
		activeTag: 1,
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
			{ id:  1, state: 1, title: "Доминантсептаккорд имеет нечетный канал", fio: "Семен Семенович", reply: 2, counter: 4  },
			{ id:  2, state: 1, title: "Септаккорд многопланово иллюстрирует райдер", fio: "Аристарх Сигизмундович", reply: 2, counter: 4  },
			{ id:  3, state: 2, title: "Рондо, так или иначе, варьирует голос", fio: "Марфа Степановна", reply: 2, counter: 4  },
			{ id:  4, state: 5, title: "Струна, по определению, начинает перекрестный флюгель-горн", fio: "Барак Обамович", reply: 2, counter: 4  },
			{ id:  5, state: 4, title: "Арпеджио, так или иначе, иллюстрирует кризис жанра", fio: "Трифон Ильич", reply: 2, counter: 4  },
			{ id:  6, state: 2, title: "Канал заканчивает фузз", fio: "Ольга Петровна", reply: 2, counter: 4  },
			{ id:  7, state: 2, title: "Трехчастная фактурная форма полифигурно выстраивает полиряд", fio: "Семен Семенович", reply: 2, counter: 4  },
			{ id:  8, state: 3, title: "Крещендирующее хождение образует нечетный ревер", fio: "Марфа Степановна", reply: 2, counter: 4  },
			{ id:  9, state: 1, title: "Нежилое помещение подведомственно арбитражному суду", fio: "Трифон Ильич", reply: 2, counter: 4  },
			{ id: 10, state: 4, title: "Взаимозачет публичен", fio: "Аристарх Сигизмундович", reply: 2, counter: 4  },
			{ id: 11, state: 4, title: "Законодательство запрещает акционерный индоссамент", fio: "Марфа Степановна", reply: 2, counter: 4  },
			{ id: 12, state: 3, title: "Перестрахование акцептовано", fio: "Петр Петрович", reply: 2, counter: 4  },
			{ id: 13, state: 1, title: "Доминантсептаккорд имеет нечетный канал", fio: "Семен Семенович", reply: 2, counter: 4  },
			{ id: 14, state: 1, title: "Септаккорд многопланово иллюстрирует райдер", fio: "Аристарх Сигизмундович", reply: 2, counter: 4  },
			{ id: 15, state: 2, title: "Рондо, так или иначе, варьирует голос", fio: "Марфа Степановна", reply: 2, counter: 4  },
			{ id: 16, state: 5, title: "Струна, по определению, начинает перекрестный флюгель-горн", fio: "Барак Обамович", reply: 2, counter: 4  },
			{ id: 17, state: 1, title: "Арпеджио, так или иначе, иллюстрирует кризис жанра", fio: "Трифон Ильич", reply: 2, counter: 4  },
			{ id: 18, state: 4, title: "Канал заканчивает фузз", fio: "Ольга Петровна", reply: 2, counter: 4  },
		]
		}
	},
	computed: {
		indeks() {
			let mylist = [ 'faq', 'idea', 'admin', 'informer', 'construct', 'efficient', 'live', 'program', 'project' ];
			return mylist.indexOf( this.$route.params.list );
		},
		filteredList() {
			switch(this.activeTag) {
				case 1:
					return this.topics;
					break;
				case 2:
					return this.topics.filter( item => item.state == 2 );
					break;
				case 3:
					return this.topics.filter( item => item.state == 3 );
					break;
				case 4:
					return this.topics.filter( item => item.state == 4 );
					break;
				case 5:
					return this.topics.filter( item => item.state == 5 );
					break;
				case 6:
					return this.topics.filter( item => item.state == 6 );
					break;
			}
		}
	},
	methods: {
		setTab(e) {
			this.activeTab = e;
		},
	setTag(e) {
		this.activeTag = e;
	},
	},
	components: {
		Topic,
		Empty
	}
}
</script>

<style scoped lang="scss">
@import '~bulma/sass/elements/tag';
@import '~bulma/sass/components/pagination';
@import '~bulma/sass/elements/form';
	
.tag {
	cursor: pointer;
}
nav a {
	text-decoration: none;
}
.pagination-link {
	&.is-current {
		background: $blue;
		border-color: $blue;
	}
}
.level-left {
	margin-bottom: 1rem;
}


// ========================================
// animation
// ========================================

.request-move {
  transition: transform .6s;
}

.request-enter-active, .request-leave-active {
  transition: all .6s;
}
.request-leave-active {
	position: absolute;
}
.request-enter, .request-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.request {
  backface-visibility: hidden;
  z-index: 1;
}

</style>
