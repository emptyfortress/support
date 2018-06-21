<template lang="pug">
.container
	.big
		i(:class="current[0].icon")
	h2 {{current[0].name}}
	p Выполните поиск или выберите нужную тему из списка:
	br/
	.tags
		.tag.is-rounded.is-medium(v-for="section in current[0].sections" 
										:class="section.active ? 'is-info' : ''"
										@click="section.active = !section.active"
									) {{section.name}}
	.data
		.section
			.hd Продукт
			.product
				nuxt-link(to="/product") {{ current[0].name }}
		.section.max
			.hd Тема
			.wrap(v-if="theme.length > 0")
				span(v-for="item in theme") {{item.name}}, 
			.wrap(v-else)
				span.is-italic.has-text-grey Выберите интересующий вас раздел выше
		.section
			.hd &nbsp;
			.button.is-primary(@click="tabsVisible = 1") Показать
	br/
	transition(name="move")
		div(v-if="tabsVisible")
			.tabs
				ul
					li(v-for='tab in tabs'  :class="activeTab == tab.id ? 'is-active' : ''")
						a(@click="setTab(tab.id)") {{ tab.name }}
			#tab1(v-if="activeTab == 1") tab1
			#tab2(v-if="activeTab == 2") tab2
			#tab3(v-if="activeTab == 3") tab3
			#tab4(v-if="activeTab == 4") tab4
			#tab5(v-if="activeTab == 5") tab5
</template>

<script>
export default {
	data() {
		return {
			tabsVisible: false,
			activeTab: 1,
			tabs: [
				{ id: 2, name: 'Документация' },
				{ id: 1, name: 'Сообщество' },
				{ id: 3, name: 'FAQ' },
				{ id: 4, name: 'Загрузить' },
				{ id: 5, name: 'База знаний' },
			],
			products: [
				{ 
					id: '_platform', name: 'Платформа', icon: 'icon-platform',
					sections: [
						{ id: 1 , active: false, name: 'ver.5.3', to: '', },
						{ id: 2 , active: false, name: 'ver.5.4', to: '', },
						{ id: 3 , active: false, name: 'ver.5.5', to: '', },
						{ id: 4 , active: false, name: 'Карточки', to: '', },
						{ id: 5 , active: false, name: 'Справочники', to: '', },
						{ id: 6 , active: false, name: 'Решения', to: '', },
						{ id: 7 , active: false, name: 'Конструкторы', to: '', },
						{ id: 8 ,  active: false, name: 'Согласование', to: '', },
						{ id: 9 ,  active: false, name: 'Делегирование', to: '', },
						{ id: 10 ,  active: false, name: 'Поручения', to: '', },
						{ id: 11 ,  active: false, name: 'Ролевая модель', to: '', },
						{ id: 12 , active: false, name: 'Совместимость', to: '', },
						{ id: 13 , active: false, name: 'Демоверсии', to: '', },
						{ id: 14 ,  active: false, name: 'Администрирование', to: '', },
						{ id: 15 ,  active: false, name: 'Workflow', to: '', },
						{ id: 16 ,  active: false, name: 'SDK', to: '', },
						{ id: 17 ,  active: false, name: 'Примеры, статьи, вебинары', to: '', },
					]
				},
				{ id: '_web', name: 'Web-client', icon: 'icon-web',
					sections: [
						{ id: 1 , active: false, name: 'ver.8', to: '', },
						{ id: 2 , active: false, name: 'ver.9', to: '', },
						{ id: 3 , active: false, name: 'ver.10', to: '', },
						{ id: 4 , active: false, name: 'Разметки', to: '', },
						{ id: 5 , active: false, name: 'Мобильная версия', to: '', },
						{ id: 6 , active: false, name: 'Кастомизация', to: '', },
						{ id: 7 , active: false, name: 'Конструктор разметок', to: '', },
					]
				},
				{ id: '_pulse', name: 'Пульс', icon: 'icon-pulse',
					sections: [
						{ id: 1 , active: false, name: 'iOS', to: '', },
						{ id: 2 , active: false, name: 'Android', to: '', },
						{ id: 3 , active: false, name: 'Синхронизация', to: '', },
						{ id: 4 , active: false, name: 'Подключение к серверу', to: '', },
						{ id: 5 , active: false, name: 'Виджеты', to: '', },
						{ id: 6 , active: false, name: 'Дашборд', to: '', },
						{ id: 7 , active: false, name: 'Электронная подпись', to: '', },
						{ id: 8 , active: false, name: 'Фильтры', to: '', },
					]
				},
				{ id: '_no', name: 'Накопительные обновления', icon: 'icon-no',
					sections: [
						{ id: 1 , active: false, name: 'НО10', to: '', },
						{ id: 1 , active: false, name: 'НО11', to: '', },
						{ id: 1 , active: false, name: 'НО12', to: '', },
					]
				},
				{ id: '_dogovor', name: 'Договоры', icon: 'icon-dogovor',
					sections: [
						{ id: 1 , active: false, name: 'тема 1', to: '', },
						{ id: 2 , active: false, name: 'тема 2', to: '', },
						{ id: 3 , active: false, name: 'тема 3', to: '', },
						{ id: 4 , active: false, name: 'тема 4', to: '', },
					]
				},
				{ id: '_mail', name: 'Почтовый клиент', icon: 'icon-mailclient',
					sections: [
						{ id: 1 , active: false, name: 'тема 1', to: '', },
						{ id: 2 , active: false, name: 'тема 2', to: '', },
						{ id: 3 , active: false, name: 'тема 3', to: '', },
						{ id: 4 , active: false, name: 'тема 4', to: '', },
					]
				},
				{ id: '_delo', name: 'Делопроизводство', icon: 'icon-delo',
					sections: [
						{ id: 1 , active: false, name: 'тема 1', to: '', },
						{ id: 2 , active: false, name: 'тема 2', to: '', },
						{ id: 3 , active: false, name: 'тема 3', to: '', },
						{ id: 4 , active: false, name: 'тема 4', to: '', },
					]
				},
				{ id: '_documents', name: 'Управление документами', icon: 'icon-docmanage',
					sections: [
						{ id: 1 , active: false, name: 'тема 1', to: '', },
						{ id: 2 , active: false, name: 'тема 2', to: '', },
						{ id: 3 , active: false, name: 'тема 3', to: '', },
						{ id: 4 , active: false, name: 'тема 4', to: '', },
					]
				},
				{ id: '_archive', name: 'Электронный архив', icon: 'icon-archive',
					sections: [
						{ id: 1 , active: false, name: 'тема 1', to: '', },
						{ id: 2 , active: false, name: 'тема 2', to: '', },
						{ id: 3 , active: false, name: 'тема 3', to: '', },
						{ id: 4 , active: false, name: 'тема 4', to: '', },
					]
				},
				{ id: '_meeting', name: 'Управлениe совещаниями', icon: 'icon-meeting',
					sections: [
						{ id: 1 , active: false, name: 'тема 1', to: '', },
						{ id: 2 , active: false, name: 'тема 2', to: '', },
						{ id: 3 , active: false, name: 'тема 3', to: '', },
						{ id: 4 , active: false, name: 'тема 4', to: '', },
					]
				},
			],
		}
	},
	computed: {
		current() {
			return this.products.filter( item => item.id == this.$route.params.id )
		},
		theme() {
			return this.current[0].sections.filter( item => item.active == true )
		},
	},
	methods: {
		setTab(e) {
			this.activeTab = e;
		},
	},
}
</script>

<style scoped lang="scss">
@import '~bulma/sass/elements/tag';
@import '~bulma/sass/components/dropdown';
/* @import '~bulma/sass/components/tabs'; */

.container { margin-top: 2rem; }
.big {
	font-size: 5rem;
	color: $main;
	margin-bottom: -1rem;
	margin-left: -1rem;
	/* text-align: center; */
}
h2 {
	margin-top: 0;
	margin-bottom: 1rem;
}
p { font-size: 1.2rem; }
.tag {
	cursor: pointer;
}
.data {
	padding: 1rem 2rem;
	background: #FAFAFA;
	width: 100%;
	border-top: 1px solid #E6E7E8;
	border-bottom: 1px solid #E6E7E8;
	display: flex;
}

select {
	height: 40px;
	font-size: 1rem;
	background: #fff;
}
.section {
	&.max {
		flex-grow: 1;
		margin: 0 2rem;
	}
	.hd {
		text-transform: uppercase;
		color: $main;
		margin-bottom: 1rem;
	}
	.product {
		font-size: 1.2rem;
		a:hover {
		}
	}
}
.wrap {
	line-height: 150%;
}


</style>
