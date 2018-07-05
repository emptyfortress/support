<template lang="pug">
.pri
	.head
	.treeContainer
		roadItem(:listFeatures="version53" v-if="ver0")
		roadItem(:listFeatures="version54" v-if="ver1")
		
		<!-- transition&#45;group(name="fade1" mode="in&#45;out" tag="li") -->
		<!-- 	li.branchlist(v&#45;if="ver0" v&#45;for="item in version53" :key="item.id") -->
		<!-- 		.section(@click="") -->
		<!-- 			.left -->
		<!-- 				p {{ item.date }} -->
		<!-- 			.center -->
		<!-- 			.right -->
		<!-- 				p {{ item.name }} -->
		<!-- 	li.branchlist(v&#45;if="ver1" v&#45;for="item in version54" :key="item.id") -->
		<!-- 		.section(@click="") -->
		<!-- 			.left -->
		<!-- 				p {{ item.date }} -->
		<!-- 			.center -->
		<!-- 			.right -->
		<!-- 				p {{ item.name }} -->
		<!-- 	li.branchlist(v&#45;if="ver2" v&#45;for="item in version55" :key="item.id") -->
		<!-- 		.section(@click="") -->
		<!-- 			.left -->
		<!-- 				p {{ item.date }} -->
		<!-- 			.center -->
		<!-- 			.right -->
		<!-- 				p {{ item.name }} -->

	.tail
</template>

<script>
import roadItem from "@/components/lists/roadItem";

	export default {
		data() {
			return {
				version53: [
					{ id: 0, date: "Раз в 2-3 месяца (по мере накопления багов)", name: "Накопительное обновление",  },
					{ id: 1, date: "Конец 2019 года", name: "Прекращение поддержки",  },
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
			ver0() { return this.$store.state.activeVersion == 0 ? true : false },
			ver1() { return this.$store.state.activeVersion == 1 ? true : false },
			ver2() { return this.$store.state.activeVersion == 2 ? true : false },
		},
		components: {
			roadItem
		}
	}

</script>

<style scoped lang="scss">
.treeContainer {
	width: 600px;
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
