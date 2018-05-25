<template lang="pug">
.container
	h2
		i.icon-forum/ {{ forums[ indeks ].title }}
	p test
</template>

<script>
	export default {
		transition(to, from) {
			if (!from) return 'slide-left'
			return +to.params.id > +from.params.id ? 'slide-right' : 'slide-left'
		},
		data() {
			return {
				forums: [
					{ id: 1, title: "ЧаВо"  },
					{ id: 2, title: "Идеи и предложения"  },
					{ id: 3, title: "Администрирование ДВ"  },
					{ id: 4, title: "ДВ-информер"  },
					{ id: 5, title: "Конструкторы"  },
					{ id: 6, title: "Форсаж 5"  },
					{ id: 7, title: "Демоверсии"  },
					{ id: 8, title: "Курсы"  },
					{ id: 9, title: "Проекты"  },
				]
			}
		},
		computed: {
			indeks() {
				let mylist = [ 'faq', 'idea', 'admin', 'informer', 'construct', 'efficient', 'live', 'program', 'project' ];
				return mylist.indexOf( this.$route.params.list );
			}

		}
	// layout: 'main',
		
	}
</script>

<style scoped lang="scss">

</style>
