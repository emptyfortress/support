<template lang="pug">
section(v-if="$route.params.id == 1")
	.tabs
		ul
			li(v-for='tab in requests'  :class="activeTab == tab.id ? 'is-active' : ''")
				a(@click="setTab(tab.id)") {{ tab.name }}
	.tags
		.tag.is-rounded.is-medium.pointer(v-for="status in statuses" 
										:class="activeTag == status.id ? 'is-info' : ''"
										@click="setTag(status.id)"
									) {{status.name}}
	table.table.is-fullwidth.is-hoverable
		thead
			tr
				th(v-for="column in columns") {{ column }}
		tbody
		<!-- transition&#45;group(tag="tbody" name="company" ) -->
			tr(v-for="row in filteredTable" @click="zendesk" :key="row.id").pointer
				td
					div.tooltip.is-tooltip-left(data-tooltip="Выполнен")
						Done(v-if="row.state == 'done'")/
					div.tooltip.is-tooltip-left(data-tooltip="Ждет вашего ответа")
						Wait(v-if="row.state == 'wait'")/
					div.tooltip.is-tooltip-left(data-tooltip="Открыт")
						Open(v-if="row.state == 'open'")/
				td {{ row.title }}
				td {{ row.id }}
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
			requests: [
				{ id: 1, name: 'Мои запросы' },
				{ id: 2, name: 'Получаемые копии запросов' },
				{ id: 3, name: 'Запросы организаций' },
			],
			statuses: [
				{ id: 1 , active: true, name: 'Любой', to: '', },
				{ id: 2 , active: false, name: 'Открыт', to: '', },
				{ id: 3 , active: false, name: 'Ждет ответа', to: '', },
				{ id: 4 , active: false, name: 'Выполнен', to: '', },
			],
			columns: [ '', 'Тема', 'ID', 'Создан', 'Обновлен', ],
			rows: [
				{ id: 1, title: 'Тестовый тикет', id: '2382', created: '1 год назад', modified: '2 мес.назад', state: 'wait' },
				{ id: 2, title: 'DVM', id: '2382', created: '1 год назад', modified: '2 мес.назад', state: 'done' },
				{ id: 3, title: 'Карточки договора 77.17-ДВ Прил.1', id: '2382', created: '1 год назад', modified: '2 мес.назад', state: 'done' },
				{ id: 4, title: 'FW: Форма заказа ПО АО "Каражыра"', id: '2382', created: '1 год назад', modified: '2 мес.назад', state: 'wait' },
				{ id: 5, title: 'Работа по Алмаз-Антей', id: '2382', created: '1 год назад', modified: '2 мес.назад', state: 'open' },
				{ id: 6, title: 'Зависло согласование', id: '2382', created: '1 год назад', modified: '2 мес.назад', state: 'done' },
				{ id: 7, title: 'Перезапустить IIS', id: '2382', created: '1 год назад', modified: '2 мес.назад', state: 'open' },
				{ id: 8, title: 'Удаляются карточки', id: '2382', created: '1 год назад', modified: '2 мес.назад', state: 'open' },
				{ id: 9, title: 'Алроса. Нагрузочное тестирование', id: '2382', created: '1 год назад', modified: '2 мес.назад', state: 'open' },
				{ id: 10, title: 'На: Настройка согласований в легком клиенте', id: '2382', created: '1 год назад', modified: '2 мес.назад', state: 'done' },
				{ id: 11, title: 'Тестовый тикет', id: '2382', created: '1 год назад', modified: '2 мес.назад', state: 'wait' },
				{ id: 12, title: 'DVM', id: '2382', created: '1 год назад', modified: '2 мес.назад', state: 'done' },
				{ id: 13, title: 'Карточки договора 77.17-ДВ Прил.1', id: '2382', created: '1 год назад', modified: '2 мес.назад', state: 'done' },
				{ id: 14, title: 'FW: Форма заказа ПО АО "Каражыра"', id: '2382', created: '1 год назад', modified: '2 мес.назад', state: 'wait' },
				{ id: 15, title: 'Работа по Алмаз-Антей', id: '2382', created: '1 год назад', modified: '2 мес.назад', state: 'open' },
				{ id: 16, title: 'Зависло согласование', id: '2382', created: '1 год назад', modified: '2 мес.назад', state: 'done' },
				{ id: 17, title: 'Перезапустить IIS', id: '2382', created: '1 год назад', modified: '2 мес.назад', state: 'open' },
				{ id: 18, title: 'Удаляются карточки', id: '2382', created: '1 год назад', modified: '2 мес.назад', state: 'open' },
				{ id: 19, title: 'Алроса. Нагрузочное тестирование', id: '2382', created: '1 год назад', modified: '2 мес.назад', state: 'open' },
				{ id: 20, title: 'На: Настройка согласований в легком клиенте', id: '2382', created: '1 год назад', modified: '2 мес.назад', state: 'done' },
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
		}
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

/* .company { */
/*   backface-visibility: hidden; */
/*   z-index: 1; */
/* } */


/* moving */
/* .company-move { */
/*   transition: all 600ms ease-in-out 50ms; */
/* 	max-height: 5rem; */
/* } */

/* appearing */
/* .company-enter-active { */
/*   transition: all 400ms ease-out; */
/* 	max-height: 5rem; */
/* } */

/* disappearing */
/* .company-leave-active { */
/*   transition: all 200ms ease-in; */
/* 	max-height: 5rem; */
/*   z-index: 0; */
/* } */

/* appear at / disappear to */
/* .company-enter, */
/* .company-leave-to { */
/*   opacity: 0; */
/* 	max-height: 0; */
/* } */

</style>
