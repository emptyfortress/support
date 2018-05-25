<template lang="pug">
.container
	h2
		i.icon-bubles/ {{ forums[ indeks ].title }}

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
		.level
			.level-left laks lsk
			.level-right sdasdasd




	#tab2(v-if="activeTab == 2") tab2
	#tab3(v-if="activeTab == 3") tab3
	#tab4(v-if="activeTab == 4") tab4

</template>

<script>
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
				{ id: 1, title: "ЧаВо"  },
				{ id: 2, title: "Идеи и предложения"  },
				{ id: 3, title: "Администрирование ДВ"  },
				{ id: 4, title: "ДВ-информер"  },
				{ id: 5, title: "Конструкторы"  },
				{ id: 6, title: "Форсаж 5"  },
				{ id: 7, title: "Демоверсии"  },
				{ id: 8, title: "Обучение"  },
				{ id: 9, title: "Проекты"  },
			]
			}
		},
		computed: {
			indeks() {
				let mylist = [ 'faq', 'idea', 'admin', 'informer', 'construct', 'efficient', 'live', 'program', 'project' ];
				return mylist.indexOf( this.$route.params.list );
			}
		},
		methods: {
			setTab(e) {
				this.activeTab = e;
			},
		},


	// layout: 'main',
		
	}
</script>

<style scoped lang="scss">
@import '~bulma/sass/elements/tag';
	
.tag {
	cursor: pointer;
}

</style>
