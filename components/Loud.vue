<template lang="pug">
	.rel
		.loud 
			<i class="icon-loud"></i>
			.dot
		.panel
			.tabs.is-toggle.is-fullwidth
				ul
					li.is-active
						a Новые
					li
						a Важные
					li
						a Все
			.scroll
				.list(v-for="item in note")
					a.panel-block
						i.is-pulled-left.icon-search
						span {{ item.title }}
			.panel-block
				.button.is-link.is-outlined.is-fullwidth Прочитать все


</template>


<script>
export default {
	data() {
		return {
			note: [
					{ title: 'Прекращается выпуск накопительных обновлений для Docsvision 5.4' },
					{ title: 'ВАЖНО! Не забывайте вовремя сообщать об уволившихся сотрудниках' },
					{ title: 'Изменения времени реакции' },
					{ title: 'Развитие FAQ или интересные темы' },
					{ title: 'Поздравляем с 8 марта!' },
					{ title: 'С днём защитника Отечества!' },
					{ title: 'Профилактические работы в магазине приложений appstore' },
					{ title: 'Работа технической поддержки в новогодние праздники' },
					// { title: 'Прекращается выпуск накопительных обновлений для Docsvision 5.4' },
					// { title: 'ВАЖНО! Не забывайте вовремя сообщать об уволившихся сотрудниках' },
					// { title: 'Изменения времени реакции' },
					// { title: 'Развитие FAQ или интересные темы' },
					// { title: 'Поздравляем с 8 марта!' },
					// { title: 'С днём защитника Отечества!' },
					// { title: 'Профилактические работы в магазине приложений appstore' },
					// { title: 'Работа технической поддержки в новогодние праздники' },
			]
		}
	}
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
	width: 350px;
	box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.4);
}

a {
	&:hover {
		text-decoration: none;
	}
}
.tabs {
	&:not(:last-child) {
		margin-bottom: 0;
	}
	li {
		cursor: pointer;
		a {
			/* font-size: .8rem; */
			&:hover {
				text-decoration: none;
			}
		}
	}
}

.panel-block {
	/* font-family: $small; */
	border-bottom: none;
	/* font-size: .9rem; */
	/* font-weight: 600; */
	border-left: 5px solid $info;
}
.list:last-child {
 border-bottom: 1px solid $border;
}

.scroll {
	max-height: calc(70vh - 50px);
	/* max-height: 70vh; */
	overflow: auto;
}

</style>

