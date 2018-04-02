<template lang="pug">
.container
	h2
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
						{ id: 1, to: '/docs/platform/1', name: 'Установка и администрирование Docsvision 5.2.2450' },
						{ id: 2, to: '/docs/platform/2', name: 'Конструктор согласований Docsvision 5.4.2642' },
						{ id: 3, to: '/docs/platform/3', name: 'Установка и администрирование Docsvision 5.3.2559' },
						{ id: 4, to: '/docs/platform/4', name: 'Установка и администрирование Docsvision 5.2.2542' },
					]
				},
				{ 
					id: 2, expand: false, name: 'Web-client',
					childs: [
						{ id: 1, to: '/docs/platform/1', name: 'Web-client, версия 9' },
						{ id: 1, to: '/docs/platform/2', name: 'Web-client, версия 10' },
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
						{ id: 1, to: '/docs/platform/1', name: 'Приложение «Договоры» v.5.4.3' },
					]
				},
				{ id: 6, expand: false, name: 'Приложение «Почтовый клиент»',
					childs: [
						{ id: 1, to: '/docs/platform/1', name: 'Модуль «Почтовый клиент»' },
					]
				},
				{ id: 7, expand: false, name: 'Приложение «Делопроизводство»',
					childs: [
						{ id: 1, to: '/docs/platform/1', name: 'Приложение «Делопроизводство» v.5.4.4' },
					] 
				}, 
				{ id: 8, expand: false, name: 'Приложение «Управление документами»',
					childs: [
						{ id: 1, to: '/docs/platform/1', name: 'Приложение «Управление документами» Docsvision 5.4.2642' },
						{ id: 1, to: '/docs/platform/2', name: 'Приложение «Управление документами» Docsvision 5.3.2559' },
						{ id: 2, to: '/docs/platform/3', name: 'Приложение «Управление документами» Docsvision 5.3.2529' },
						{ id: 3, to: '/docs/platform/4', name: 'Приложение «Управление документами» Docsvision 5.2.2450' },
					]
				},
			],
		}
	},
	methods: {
		toggle(index) {
			this.docs[index].expand = !this.docs[index].expand;
		}
	},
}
</script>

<style scoped lang="scss">

.container {
	margin-top: 4rem;
}

</style>


