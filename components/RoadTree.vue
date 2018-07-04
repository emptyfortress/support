<template lang="pug">
.pri
	.head
	ul.treeContainer
		transition-group(name="fade1" mode="in-out" tag="li")
			li.branchlist(v-if="ver0" v-for="item in version53" :key="item.id")
				.section(@click="goTo(to)")
					.left
						p {{ item.date }}
					.center
					.right
						p {{ item.name }}
			li.branchlist(v-if="ver1" v-for="item in version54" :key="item.id")
				.section(@click="goTo(to)")
					.left
						p {{ item.date }}
					.center
					.right
						p {{ item.name }}
			li.branchlist(v-if="ver2" v-for="item in version55" :key="item.id")
				.section(@click="goTo(to)")
					.left
						p {{ item.date }}
					.center
					.right
						p {{ item.name }}
	.tail
</template>

<script>
	export default {
		props: ['test'],
		data() {
			return {
				version53: [
					{ id: 0, date: "Раз в 2-3 месяца (по мере накопления багов)", name: "Накопительное обновление", to: "" },
					{ id: 1, date: "Конец 2019 года", name: "Прекращение поддержки", to: "" },
				],
				version54: [
					{ id: 0, date: "Осень 2018", name: "Конструктор согласований", to: "" },
					{ id: 1, date: "Сентябрь 2018", name: "Увеличение быстродействия папок", to: "" },
					{ id: 2, date: "Октябрь 2018", name: "Фильтры в представлениях", to: "" },
				],
				version55: [
					{ id: 0, date: "Раз в 2-3 месяца (по мере накопления багов)", name: "Накопительное обновление", to: "" },
					{ id: 1, date: "Конец 2019 года", name: "Прекращение поддержки", to: "" },
				],
			}
		},
		computed: {
			ver0() { return this.$store.state.activeVersion == 0 ? true : false },
			ver1() { return this.$store.state.activeVersion == 1 ? true : false },
			ver2() { return this.$store.state.activeVersion == 2 ? true : false },
		},
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

.section {
	width: 100%;
	display: flex;
	justify-content: center;
	.center {
		width: 15px;
		height: 15px;
		border-radius: 15px;
		border: 3px solid #ccc;
		background: #fff;
		transition: all .2s ease;
		cursor: pointer;
		&:hover {
			width: 25px;
			height: 25px;
			border-color: $blue;
		}
	}
	.left, .right {
		/* width: calc(100% - 40px); */
		width: 30%;
		background: #eee;
	}
	.left {
		text-align: right; 
		margin-right: 2rem;
	}
	.right {
		text-align: left; 
		margin-left: 2rem;
	}
}

.pri {
	transition: .4s all ease;
}

.fade1-enter-active, .fade1-leave-active {
  transition: all .5s;
}
.fade1-enter, .fade1-leave-to /* .fade1-leave-active below version 2.1.8 */ {
  opacity: 0;
	height: 0;
	transform: translateY(30px);
}
</style>
