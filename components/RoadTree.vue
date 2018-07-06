<template lang="pug">
.pri
	.head
	.treeContainer
		roadItem(:listFeatures="allRequests" v-if="$store.state.currentProduct==0")
		roadItem(:listFeatures="version54" v-if="$store.state.currentProduct==1")
		roadItem(:listFeatures="version54" v-if="$store.state.currentProduct==2")
		roadItem(:listFeatures="version54" v-if="$store.state.currentProduct==3")
		roadItem(:listFeatures="version54" v-if="$store.state.currentProduct==4")
		roadItem(:listFeatures="version54" v-if="$store.state.currentProduct==5")
	.tail
</template>

<script>
import roadItem from "@/components/lists/roadItem";

	export default {
		data() {
			return {
				allRequests: [
					{ id:  0, group: 0, start: '', end: '', num: 'BL-', rating: 21802, content: 'Использование маски поиска в атрибутивном поиске', },
					{ id:  1, group: 0, start: '', end: '', num: 'BL-', rating: 6298 , content: 'Интеграция с адресными системами (КЛАДР)', },
					{ id:  2, group: 0, start: '', end: '', num: 'BL-', rating: 8115 , content: 'Название вида - локализация, отображаемое название и комментарии', },
					{ id:  3, group: 0, start: '', end: '', num: 'BL-', rating: 9932 , content: 'Настройа момента проверки обязательности полей', },
					{ id:  4, group: 0, start: '', end: '', num: 'BL-', rating: 11750, content: 'Настройка условий нумератора - И, ИЛИ', },
					{ id:  5, group: 0, start: '', end: '', num: 'BL-', rating: 13567, content: 'Настройка прав на отдельные нумераторы', },
					{ id:  6, group: 0, start: '', end: '', num: 'BL-', rating: 15384, content: 'Создание Заданий и ГЗ по документам. Шаблоны', },
					{ id:  7, group: 0, start: '', end: '', num: 'BL-', rating: 17201, content: 'Использование url в папках - отключение проверки соответствия формата', },
					{ id:  8, group: 0, start: '', end: '', num: 'BL-', rating: 19018, content: 'Настройка риббона Навигатора', },

 				],
 				version54: [
 					{ id: 0, date: "Осень 2018", name: "Конструктор согласований",  },
 					{ id: 1, date: "Сентябрь 2018", name: "Увеличение быстродействия папок",  },
 					{ id: 2, date: "Октябрь 2018", name: "Фильтры в представлениях",  },
 				],
 				version55: [
 					{ id: 0, date: "Раз в 2-3 месяца (по мере накопления багов)", name: "Накопительное обновление",  },
					{ id: 1, date: "Конец 2019 года", name: "Прекращение поддержки",  },
				],
			}
		},
		computed: {
		},
		components: {
			roadItem
		}
	}

</script>

<style scoped lang="scss">
.treeContainer {
	/* width: 600px; */
	margin: 0 auto;
	background: url(~assets/img/vert.png) repeat-y center top;
	border: 1px solid red; 
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
}

</style>
