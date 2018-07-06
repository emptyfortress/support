<template lang="pug">
.pri
	.level
		.tags.level-left
			.tag.is-rounded.is-medium.pointer(v-for="type in types" 
											:class="activeReq == type.id ? 'is-info' : ''"
											@click="setReq(type.id)"
										) {{type.name}}
		.level-right.filtr
			input(v-model="query")
			i.icon-filter(v-if="query.length == 0")
			i.icon-close(v-else @click="clearQuery")
	table.table.is-fullwidth.is-hoverable
		thead(@click='sortTable')
			tr
				th(v-for="column in columns" :class="column.class") {{ column.name }}
		transition-group(name="request" tag="tbody")
			tr(v-for="row in filteredTable" :key="row.id").pointer
				td {{ row.rating }}
				td {{ row.content }}
				td {{ row.num }}
				td {{ row.partners }}
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
export default {
	data() {
		return {
			activeReq: 1,
			query: '',
			types: [
				{ id: 1 , active: true, name: 'Все', to: '', },
				{ id: 2 , active: false, name: 'Мои требования', to: '', },
			],
			columns: [
				{ name: 'Рейтинг', class: '' },
				{ name: 'Название', class: 'has-text-weight-bold' },
				{ name: 'Номер', class: '' },
				{ name: 'Партнеры', class: '' },
			],
			filteredTable: [
				{ id:  0, group: 0, start: '', end: '', num: 'BL-201', rating: 21802, tag: '', partners: '', content: 'Использование маски в атрибутивном поиске', },
				{ id:  1, group: 0, start: '', end: '', num: 'BL-202', rating: 6298 , tag: '', partners: '', content: 'Интеграция с адресными системами (КЛАДР)', },
				{ id:  2, group: 0, start: '', end: '', num: 'BL-203', rating: 8115 , tag: '', partners: '', content: 'Название вида - локализация, отображаемое название и комментарии', },
				{ id:  3, group: 0, start: '', end: '', num: 'BL-204', rating: 9932 , tag: 'my', partners: '', content: 'Настройка момента проверки обязательности полей', },
				{ id:  4, group: 0, start: '', end: '', num: 'BL-205', rating: 11750, tag: 'my', partners: '', content: 'Настройка условий нумератора - И, ИЛИ', },
				{ id:  5, group: 0, start: '', end: '', num: 'BL-206', rating: 13567, tag: '', partners: '', content: 'Настройка прав на отдельные нумераторы', },
				{ id:  6, group: 0, start: '', end: '', num: 'BL-207', rating: 15384, tag: '', partners: '', content: 'Создание Заданий и ГЗ по документам. Шаблоны', },
				{ id:  7, group: 0, start: '', end: '', num: 'BL-208', rating: 17201, tag: 'my', partners: 'alsas', content: 'Использование url в папках - отключение проверки соответствия формата', },
				{ id:  8, group: 0, start: '', end: '', num: 'BL-209', rating: 19018, tag: '', partners: '', content: 'Настройка риббона Навигатора', },
			],
			
		}
	},
	computed: {
	},
	methods: {
		setReq(e) {
			this.activeReq = e;
		},
		clearQuery() {
			this.query = '';
		},
		sortTable(e) {
			this.filteredTable.reverse();
		},

	}
}
</script>

<style scoped lang="scss">
$table-cell-border-width: 0 0 0;
$table-head-cell-border-width: 0 0 1px;
@import '~bulma/sass/elements/tag';
@import '~bulma/sass/elements/table';
@import '~bulma/sass/components/pagination';
@import '~bulma/sass/elements/form';

.level:not(:last-child) { margin: 0; }
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

th {
	font-family: $small;
	font-size: .75rem;
	font-weight: normal;
	cursor: pointer;
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
