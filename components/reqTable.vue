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
			tr(v-for="row in filteredTable" :key="row.id" :class="activeRow == row.id ? 'is-selected' : ''" @click='selectRow(row.id)' ).pointer
				td {{ row.rating }}
				td {{ row.content }}
				td {{ row.num }}
				td {{ row.partners }}
				td 
					a(href="http://dv-backlog.vdv.digdes.com/DocsvisionWebClient/#/Folder/BCC4C5FA-7C64-450F-A38B-E80C80737005?Color=folder-default" target="_blank")
						i.icon-new-window
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
			activeRow: '',
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
				{ name: '', class: '' },
			],
			allItems: [

				{ id:  1,  group: 1, item: 1, num: 'BL-201', rating: 21802, partners: 'Велес', content: 'Использование маски в атрибутивном поиске', },
				{ id:  2,  group: 1, item: 2, num: 'BL-202', rating: 6298 , partners: 'Интернет-Фрегат', content: 'Интеграция с адресными системами (КЛАДР)', },
				{ id:  3,  group: 1, item: 2, num: 'BL-203', rating: 8115 , partners: 'РКЦ Прогресс', content: 'Название вида - локализация, отображаемое название и комментарии', },
				{ id:  4,  group: 1, item: 8, num: 'BL-209', rating: 19018, partners: 'ЦФТ', content: 'Настройка риббона Навигатора', },
				{ id:  5,  group: 2, item: 4, num: 'BL-204', rating: 9932 , partners: 'СофтАкадемия', content: 'Настройка момента проверки обязательности полей', },
				{ id:  6,  group: 2, item: 4, num: 'BL-205', rating: 11750, partners: 'РКЦ Прогресс', content: 'Настройка условий нумератора - И, ИЛИ', },
				{ id:  7,  group: 2, item: 7, num: 'BL-206', rating: 13567, partners: 'РКЦ Прогресс', content: 'Настройка прав на отдельные нумераторы', },
				{ id:  8, group: 2, item: 7, num: 'BL-201', rating: 21802, partners: 'Велес', content: 'Использование маски в атрибутивном поиске', },
				{ id:  9, group: 2, item: 5, num: 'BL-203', rating: 8115 , partners: 'РКЦ Прогресс', content: 'Название вида - локализация, отображаемое название и комментарии', },
				{ id:  10,  group: 3, item: 3, num: 'BL-207', rating: 15384, partners: 'ГосНИИмаш', content: 'Создание Заданий и ГЗ по документам. Шаблоны', },
				{ id:  11,  group: 3, item: 6, num: 'BL-208', rating: 17201, partners: 'Союз', content: 'Использование url в папках - отключение проверки соответствия формата', },
				{ id:  12, group: 3, item: 3, num: 'BL-202', rating: 6298 , partners: 'Интернет-Фрегат', content: 'Интеграция с адресными системами (КЛАДР)', },
				{ id:  13, group: 3, item: 6, num: 'BL-204', rating: 9932 , partners: 'СофтАкадемия', content: 'Настройка момента проверки обязательности полей', },

			],
			
		}
	},
	computed: {
		filteredTable() {
			let curPr = this.$store.state.currentProduct;
			let curIt = this.$store.state.currentItem;
			let querry = this.query.toLowerCase();
			let querryTable =  this.query ? this.allItems.filter(item => item.content.toLowerCase().includes(querry) || item.partners.toLowerCase().includes(querry) || item.num.toLowerCase().includes(querry)) : this.allItems
			if (curPr == 0 && curIt == 0) {
				return querryTable
			}
			else if (curPr != 0 && curIt == 0) {
				return querryTable.filter( item => item.group == curPr )
			}
			else if (curPr == 0 && curIt != 0) {
				return querryTable.filter( item => item.item == curIt )
			}
			else {
				return querryTable.filter( item => ( item.group == curPr && item.item == curIt ) )
			}
		}
	},
	methods: {
		setReq(e) {
			this.activeReq = e;
		},
		clearQuery() {
			this.query = '';
		},
		sortTable(e) {
			this.allItems.reverse();
		},
		selectRow(e) {
			if (this.activeRow != e) {
				this.$store.commit('setTimlineSelection', { amount: e })
				// console.log(this.$store.state.timelineSelection);
				return this.activeRow = e;
			} else {
					this.activeRow = '';
					this.$store.commit('setTimlineSelection', { amount: [] })
					// console.log(this.$store.state.timelineSelection);
					// return this.activeRow = '';
			}
		}

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
.table tr.is-selected {
	background: #FEF88C;
	color: #000;
	td {
		border-top: 1px solid #FEC329;
		border-bottom: 1px solid #FEC329;
	}
}
</style>
