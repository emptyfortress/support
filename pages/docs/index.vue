<template lang="pug">
.container
	h1
		i.icon-book/ Документация
	
	section(v-for="(doc, index) in docs" @click="toggle(index)")
		.flex
			.header {{ doc.name }} 
			i.icon-arrow-down(:class="{active: doc.expand}")/
		ul.list(:class="{active: doc.expand}")
			li(v-for="item in doc.childs")
				.under(v-if="item.underconstruction")
					img(src='~assets/img/vlc.svg')/ Раздел в разработке
				nuxt-link(:to='item.to' v-else ) {{item.name}}
			

</template>

<script>
	
export default {
	data() {
		return {
			docs: [
				{
					id: 1, expand: false, name: 'Платформа',
					childs: [
						{ id: 1, to: '/docs/platform/:Docsvision_5.4.2642', name: 'Установка и администрирование Docsvision 5.2.2450' },
						{ id: 2, to: '/docs/platform', name: 'Конструктор согласований Docsvision 5.4.2642' },
						{ id: 3, to: '/docs/platform', name: 'Установка и администрирование Docsvision 5.3.2542' },
						{ id: 4, to: '/docs/platform', name: 'Установка и администрирование Docsvision 5.2.2542' },
					]
				},
				{ 
					id: 2, expand: false, name: 'Web-client',
					childs: [
						{ id: 1, to: '', name: 'Web-client, версия 9' },
						{ id: 1, to: '', name: 'Web-client, версия 10' },
					]
				},
				{
					id: 3, expand: false, name: 'Пульс',
					childs: [
						{ id: 1, underconstruction: true,},
					]
				},
				{ id: 4, expand: false, name: 'Накопительные обновления',
					childs: [
						{ id: 1, underconstruction: true,},
					]
				},
				{ id: 5, expand: false, name: 'Приложение «Договоры»',
					childs: [
						{ id: 1, to: '', name: 'Приложение «Договоры» v.5.4.3' },
					]
				},
				{ id: 6, expand: false, name: 'Приложение «Почтовый клиент»',
					childs: [
						{ id: 1, to: '', name: 'Модуль «Почтовый клиент»' },
					]
				},
				{ id: 7, expand: false, name: 'Приложение «Делопроизводство»',
					childs: [
						{ id: 1, to: '', name: 'Приложение «Делопроизводство» v.5.4.4' },
					] 
				}, 
				{ id: 8, expand: false, name: 'Приложение «Управление документами»',
					childs: [
						{ id: 1, to: '', name: 'Приложение «Управление документами» Docsvision 5.4.2642' },
						{ id: 1, to: '', name: 'Приложение «Управление документами» Docsvision 5.3.2559' },
						{ id: 2, to: '', name: 'Приложение «Управление документами» Docsvision 5.3.2529' },
						{ id: 3, to: '', name: 'Приложение «Управление документами» Docsvision 5.2.2450' },
					]
				},
			],
		}
	},
	methods: {
		toggle(index) {
			this.docs[index].expand = !this.docs[index].expand;
		}
	}
}
</script>

<style scoped lang="scss">

.container {
	margin-top: 4rem;
}

.flex {
	margin-bottom: 1px;
	padding: 1rem .5rem;
	border-top: 1px solid #fff;
	cursor: pointer;
	display: flex;
	&:hover {
		background: $dv-gray1;
		border-top: 1px dotted $dv-gray2;
	}
	.header {
		flex-grow: 1;
		color: $dv-blue;
		font-size: 1.4rem;
	}
	.icon-arrow-down {
		text-align: right;
		font-size: .7rem;
		line-height: 1.5rem;
		margin-right: .5rem;
		transition: all .3s cubic-bezier(.77,.06,.46,.97);
		&.active {
			transform: rotate(180deg);
			transform-origin: 50% 50%;
			margin-right: 0rem;
		}
	}
}

.list {
	max-height: 0;
	margin-left: 2rem;
	overflow: hidden;
	font-size: 1.07rem;
	transition: all .3s cubic-bezier(.77,.06,.46,.97);
	&.active {
		max-height: 200px;
		margin-bottom: 2rem;
	}
	li {
		padding: .5rem 0;
	}
}

.under {
	img {
		width: 28px;
		margin-right: 1rem;
	}
}

</style>


