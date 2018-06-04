<template lang="pug">
div
	section(v-if="$route.params.id == 1")
		.tabs
			ul
				li(v-for='tab in requests'  :class="activeTab == tab.id ? 'is-active' : ''")
					a(@click="setTab(tab.id)") {{ tab.name }}
		.level
			.tags.level-left
				.tag.is-rounded.is-medium.pointer(v-for="status in statuses" 
												:class="activeTag == status.id ? 'is-info' : ''"
												@click="setTag(status.id)"
											) {{status.name}}
			.level-right.filtr
				input(v-model="query")
				i.icon-filter(v-if="query.length == 0")
				i.icon-close(v-else @click="clearQuery")
		table.table.is-fullwidth.is-hoverable
			thead(@click="sortTable")
				tr
					th(v-for="column in columns") {{ column }}
			transition-group(name="users" tag="tbody")
				tr(v-for="row in filteredTable" @click="zendesk" :key="row.id").pointer
					td
						div.tooltip.is-tooltip-left(data-tooltip="Выполнен")
							Done(v-if="row.state == 'done'")/
						div.tooltip.is-tooltip-left(data-tooltip="Ждет вашего ответа")
							Wait(v-if="row.state == 'wait'")/
						div.tooltip.is-tooltip-left(data-tooltip="Открыт")
							Open(v-if="row.state == 'open'")/
					td {{ row.title }}
					td {{ row.num }}
					td {{ row.created }}
					td {{ row.modified }}
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

	section(v-if="$route.params.id == 2")
		.tabs
			ul
				li(v-for='tab in publications'  :class="activeTab == tab.id ? 'is-active' : ''")
					a(@click="setTab(tab.id)") {{ tab.name }}
		p.has-text-centered
			i.icon-face
		p.has-text-centered Нет активных публикаций
	section(v-if="$route.params.id == 3")
		p.has-text-centered
			img(src="~assets/img/dragons.jpg")
		h3.has-text-centered Здесь будет подписка
</template>

<script>
import Done from '@/components/status/Done';
import Wait from '@/components/status/Wait';
import Open from '@/components/status/Open';


export default {
	transition(to, from) {
		if (!from) return 'slide-right'
		return +to.params.id < +from.params.id ? 'slide-left' : 'slide-right'
	},
	data() {
		return {
			activeTab: 1,
			activeTag: 1,
			query: '',
			requests: [
				{ id: 1, name: 'Мои запросы' },
				{ id: 2, name: 'Получаемые копии запросов' },
				{ id: 3, name: 'Запросы организаций' },
			],
			publications: [
				{ id: 1, name: 'Мои публикации' },
				{ id: 2, name: 'Комментарии в сообществе' },
				{ id: 3, name: 'Комментарии к статьям' },
			],
			statuses: [
				{ id: 1 , active: true, name: 'Любой', to: '', },
				{ id: 2 , active: false, name: 'Открыт', to: '', },
				{ id: 3 , active: false, name: 'Ждет ответа', to: '', },
				{ id: 4 , active: false, name: 'Выполнен', to: '', },
			],
			columns: [ '', 'Тема', 'ID', 'Создан', 'Обновлен', ],
			rows: [
				{ id:  1, num: '#2382', title: 'Тестовый тикет', created: '1 год назад', modified: '2 мес.назад', state: 'wait' },
				{ id:  2, num: '#2382', title: 'DVM', created: '1 год назад', modified: '2 мес.назад', state: 'done' },
				{ id:  3, num: '#2382', title: 'Карточки договора 77.17-ДВ Прил.1', created: '1 год назад', modified: '2 мес.назад', state: 'done' },
				{ id:  4, num: '#2382', title: 'FW: Форма заказа ПО АО "Каражыра"', created: '1 год назад', modified: '2 мес.назад', state: 'wait' },
				{ id:  5, num: '#2382', title: 'Работа по Алмаз-Антей', created: '1 год назад', modified: '2 мес.назад', state: 'open' },
				{ id:  6, num: '#2382', title: 'Зависло согласование', created: '1 год назад', modified: '2 мес.назад', state: 'done' },
				{ id:  7, num: '#2382', title: 'Перезапустить IIS', created: '1 год назад', modified: '2 мес.назад', state: 'open' },
				{ id:  8, num: '#2382', title: 'Удаляются карточки', created: '1 год назад', modified: '2 мес.назад', state: 'open' },
				{ id:  9, num: '#2382', title: 'Алроса. Нагрузочное тестирование', created: '1 год назад', modified: '2 мес.назад', state: 'open' },
				{ id: 10, num: '#2382', title: 'На: Настройка согласований в легком клиенте', created: '1 год назад', modified: '2 мес.назад', state: 'done' },
				{ id: 11, num: '#2382', title: 'Тестовый тикет', created: '1 год назад', modified: '2 мес.назад', state: 'wait' },
				{ id: 12, num: '#2382', title: 'DVM', created: '1 год назад', modified: '2 мес.назад', state: 'done' },
				{ id: 13, num: '#2382', title: 'Карточки договора 77.17-ДВ Прил.1', created: '1 год назад', modified: '2 мес.назад', state: 'done' },
				{ id: 14, num: '#2382', title: 'FW: Форма заказа ПО АО "Каражыра"', created: '1 год назад', modified: '2 мес.назад', state: 'wait' },
				{ id: 15, num: '#2382', title: 'Работа по Алмаз-Антей', created: '1 год назад', modified: '2 мес.назад', state: 'open' },
				{ id: 16, num: '#2382', title: 'Зависло согласование', created: '1 год назад', modified: '2 мес.назад', state: 'done' },
				{ id: 17, num: '#2382', title: 'Перезапустить IIS', created: '1 год назад', modified: '2 мес.назад', state: 'open' },
				{ id: 18, num: '#2382', title: 'Удаляются карточки', created: '1 год назад', modified: '2 мес.назад', state: 'open' },
				{ id: 19, num: '#2382', title: 'Алроса. Нагрузочное тестирование', created: '1 год назад', modified: '2 мес.назад', state: 'open' },
				{ id: 20, num: '#2382', title: 'На: Настройка согласований в легком клиенте', created: '1 год назад', modified: '2 мес.назад', state: 'done' },
			]
		}
	},
	computed: {
		filteredTable() {
			switch (this.activeTag) {
				case 1:
					return this.rows;
					break;
				case 2:
					return this.rows.filter( item => item.state == 'open' );
					break;
				case 3:
					return this.rows.filter( item => item.state == 'wait' );
					break;
				case 4:
					return this.rows.filter( item => item.state == 'done' );
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
		zendesk() {
			window.open("https://docsvision.zendesk.com/agent/dashboard","_blank")
		},
		sortTable(e) {
			this.rows.reverse();
		},
		clearQuery() {
			this.query = '';
		},
	},
	components: {
		Done,
		Wait,
		Open
}

}
</script>


<style scoped lang="scss">
$table-cell-border-width: 0 0 0;
$table-head-cell-border-width: 0 0 1px;

@import '~bulma/sass/elements/tag';
@import '~bulma/sass/components/pagination';
@import '~bulma/sass/elements/form';
@import '~bulma/sass/elements/table';

th {
	font-family: $small;
	font-size: .75rem;
}
td {
	color: $dv-blue;
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

.level-right {
	margin-bottom: 1.5rem;
}
.filtr {
	position: relative;
	input {
		height: 2rem;
		width: 250px;
		border: none;
		border-bottom: 1px dotted #666;
		font-size: 1.1rem;
	}
	i {
		position: absolute;
		top: .4rem;
		right: 0;
		cursor: pointer;
	}
}
.has-text-centered i {
	font-size: 3rem;
	color: $dv-gray3;
}


// ========================================
// animation
// ========================================

.users-move {
  transition: transform .6s;
}

.users-enter-active, .users-leave-active {
  transition: all .6s;
}
.users-leave-active {
	position: absolute;
}
.users-enter, .users-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.users {
  backface-visibility: hidden;
  z-index: 1;
}

</style>
