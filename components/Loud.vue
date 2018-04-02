<template lang="pug">
	.rel(v-on-click-outside="close")
		.loud
			i.icon-loud(@click="$store.commit( 'toggleNotifications' )")
			.dot(v-if="!empty")
		transition(name="fade")
			.panel(v-if="$store.state.notifications" )
				.tabs.is-toggle.is-fullwidth
					ul
						li(:class="current == 1 ? 'is-active' : ''" @click="curTab(1)")
							a Новые
						li(:class="current == 2 ? 'is-active' : ''" @click="curTab(2)")
							a Важные
						li(:class="current == 3 ? 'is-active' : ''" @click="curTab(3)")
							a Все
				#one(v-if="current == 1")
					.scroll
						.list(v-for="(item, key) in note")
							transition(name="slide-left")
								a.panel-block(v-if="item.new")
									i.is-pulled-left(:class="item.important == true ? 'icon-energy' : 'icon-bell'" @click="item.new = !item.new")
									span {{ item.title }}
					.panel-block
						p.small(v-if="!empty") Кликните по иконке, чтобы пометить сообщение, как прочитанное
						.big(v-if="empty") <span>&empty;</span><br> Нет непрочитанных объявлений
					.panel-block(v-if="!empty")
						.button.is-link.is-outlined.is-fullwidth(@click="readAll") Прочитать все
				#two(v-if="current == 2")
					.scroll
						.list(v-for="item in importantList")
							a.panel-block
								i.is-pulled-left.icon-energy
								span {{ item.title }}
				#three(v-if="current == 3")
					.scroll
						.list(v-for="item in note")
							a.panel-block
								template(v-if="item.important")
									i.is-pulled-left.icon-energy
								span {{ item.title }} 
					.panel-block
						.button.is-link.is-outlined.is-fullwidth Еще

</template>


<script>
export default {

	data() {
		return {
			note: [

					{ new: true,  important: false, title: 'Прекращается выпуск накопительных обновлений для Docsvision 5.4' },
					{ new: true,  important: true, title: 'ВАЖНО! Не забывайте вовремя сообщать об уволившихся сотрудниках' },
					{ new: true,  important: false, title: 'Изменения времени реакции' },
					{ new: true,  important: false, title: 'Развитие FAQ или интересные темы' },
					{ new: true,  important: false, title: 'Поздравляем с 8 марта!' },
					{ new: true,  important: false, title: 'С днём защитника Отечества!' },
					{ new: true,  important: true, title: 'Профилактические работы в магазине приложений appstore' },
					{ new: true,  important: true, title: 'Работа технической поддержки в новогодние праздники' },
					{ new: false, important: false, title: 'Прекращается выпуск накопительных обновлений для Docsvision 5.4' },
					{ new: false, important: false, title: 'ВАЖНО! Не забывайте вовремя сообщать об уволившихся сотрудниках' },
					{ new: false, important: false, title: 'Изменения времени реакции' },
					{ new: false, important: false, title: 'Развитие FAQ или интересные темы' },
					{ new: false, important: true, title: 'Поздравляем с 8 марта!' },
					{ new: false, important: false, title: 'С днём защитника Отечества!' },
					{ new: false, important: false, title: 'Профилактические работы в магазине приложений appstore' },
					{ new: false, important: false, title: 'Работа технической поддержки в новогодние праздники' },
					{ new: false, important: false, title: 'Прекращается выпуск накопительных обновлений для Docsvision 5.4' },
					{ new: false, important: false, title: 'ВАЖНО! Не забывайте вовремя сообщать об уволившихся сотрудниках' },
					{ new: false, important: false, title: 'Изменения времени реакции' },
					{ new: false, important: false, title: 'Развитие FAQ или интересные темы' },
					{ new: false, important: false, title: 'Поздравляем с 8 марта!' },
					{ new: false, important: false, title: 'С днём защитника Отечества!' },
					{ new: false, important: false, title: 'Профилактические работы в магазине приложений appstore' },
					{ new: false, important: false, title: 'Работа технической поддержки в новогодние праздники' },

			],
			current: 1,
			empty: false
		}
	},
	computed: {
		newList() {
			return this.note.filter( item => item.new === true )
		},
		importantList() {
			return this.note.filter( item => item.important === true )
		},

	},
	methods: {
		curTab(e) {
			return this.current = e;
		},
		close() {
			this.$store.commit( 'closeNotifications' )
		},
		readAll() {
			this.note.map( item => item.new = false );
			this.empty = true;
		}
	},
}
</script>

<style scoped lang="scss">
	
.rel {
	position: relative;
}

.loud {
	cursor: pointer;
	position: relative;
	i {
		font-size: 1.3rem;
		color: $main;
	}
	.dot {
		width: 12px;
		height: 12px;
		border-radius: 10px;
		border: 1px solid #fff;
		background: $red;
		position: absolute;
		top: -5px;
		right: -5px;
	}
	&:hover {
		i {
			color: $dv-blue;
		}
	}
}

.panel {
	position: absolute;
	top: 2rem;
	right: 0;
	background: #fff;
	z-index: 9;
	width: 370px;
	box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.4);
	transition: slide-left .3s ease;
}

a {
	&:hover {
		text-decoration: none;
	}
	span {
		color: $dv-blue;
	}
}
.tabs {
	&:not(:last-child) {
		margin-bottom: 0;
	}
	li {
		cursor: pointer;
		a {
			&:hover {
				text-decoration: none;
			}
		}
	}
}

.panel-block {
	border-bottom: none;
}
.list:last-child {
 border-bottom: 1px solid $border;
}
i.is-pulled-left {
	display: block;
	margin-right: 1rem;
}

.scroll {
	max-height: 70vh;
	/* min-height: 300px; */
	overflow: auto;
}

.icon-energy {
	color: $red;
}
p.small {
	font-family: $small;
	color: #999;
	font-size: .8rem;
	font-style: italic;
}
.big {
	font-family: $small;
	color: #999;
	font-size: .8rem;
	font-style: italic;
	text-align: center;
	margin: 0 auto;
	span {
		font-style: normal;
		font-size: 3rem;
	}

}


.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
	transform: translateY(20px);
}

</style>

