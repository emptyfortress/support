<template lang="pug">
.pri
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
// import roadItem from "@/components/lists/roadItem";

	export default {
		data() {
			return {
				activeTag: 1,
				query: '',
				allRequests: [
					{ id:  0, group: 0, start: '', end: '', num: 'BL-201', rating: 21802, tag: '', partners: '', content: 'Использование маски в атрибутивном поиске', },
					{ id:  1, group: 0, start: '', end: '', num: 'BL-202', rating: 6298 , tag: '', partners: '', content: 'Интеграция с адресными системами (КЛАДР)', },
					{ id:  2, group: 0, start: '', end: '', num: 'BL-203', rating: 8115 , tag: '', partners: '', content: 'Название вида - локализация, отображаемое название и комментарии', },
					{ id:  3, group: 0, start: '', end: '', num: 'BL-204', rating: 9932 , tag: 'my', partners: '', content: 'Настройа момента проверки обязательности полей', },
					{ id:  4, group: 0, start: '', end: '', num: 'BL-205', rating: 11750, tag: 'my', partners: '', content: 'Настройка условий нумератора - И, ИЛИ', },
					{ id:  5, group: 0, start: '', end: '', num: 'BL-206', rating: 13567, tag: '', partners: '', content: 'Настройка прав на отдельные нумераторы', },
					{ id:  6, group: 0, start: '', end: '', num: 'BL-207', rating: 15384, tag: '', partners: '', content: 'Создание Заданий и ГЗ по документам. Шаблоны', },
					{ id:  7, group: 0, start: '', end: '', num: 'BL-208', rating: 17201, tag: 'my', partners: 'alsas', content: 'Использование url в папках - отключение проверки соответствия формата', },
					{ id:  8, group: 0, start: '', end: '', num: 'BL-209', rating: 19018, tag: '', partners: '', content: 'Настройка риббона Навигатора', },

 				],
				statuses: [
					{ id: 1 , active: true, name: 'Все', to: '', },
					{ id: 2 , active: false, name: 'Мои требования', to: '', },
				],
				columns: [
					{ name: 'Рейтинг', class: '' },
					{ name: 'Название', class: '' },
					{ name: 'Номер', class: '' },
					{ name: 'Партнеры', class: 'has-text-weight-bold' },
				],
			}
		},
		computed: {
			filteredTable() {
				switch (this.activeTag) {
					case 1:
						return this.query ? this.allRequests.filter( item => item.content.includes(this.query) || item.num.includes(this.query) ) : this.allRequests;
						break;
					case 2:
						let my = this.allRequests.filter( item => item.tag == 'my' );
						return this.query ? my.filter(item => item.content.includes(this.query) || item.num.includes(this.query ) ) : my;
						break;
				}
			}
		},
		components: {
			// roadItem
		},
		methods: {
			setTag(e) {
				this.activeTag = e;
		},

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
	font-weight: normal;
	cursor: pointer;
}
td {
	color: $dv-blue;
}

.treeContainer {
	margin: 0 auto;
	background: url(~assets/img/vert.png) repeat-y center top;
}
.branchlist {
	margin-bottom: 2rem;
	&:last-child { margin-bottom: 0; }
	transition: all .5s ease;
}

.tail {
	width: 10px;
	height: 45px;
	margin: 0 auto;
	background: url(~assets/img/tail.png) no-repeat center top;
}
.head {
	width: 10px;
	height: 45px;
	margin: 0 auto;
	background: url(~assets/img/head.png) no-repeat center top;
}


.pri {
	transition: .4s all ease;
	margin-top: 1rem;
}
</style>
