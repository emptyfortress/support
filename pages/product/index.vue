<template lang="pug">
.container
	h2
		i.icon-book/ Продукты
	ul.listP
		li(v-for="item in products")
			nuxt-link(:to='item.to') {{item.name}}
</template>

<script>
	export default {
		data() {
			return {
				products: [
					{ id: 1, name: 'Платформа', icon: 'icon-platform', to: '/product/_platform' },
					{ id: 2, name: 'Web-client', icon: 'icon-web',  to: '/product/_web'},
					{ id: 3, name: 'Пульс', icon: 'icon-pulse',  to: '/product/_pulse'},
					{ id: 4, name: 'Накопительные обновления', icon: 'icon-no',  to: '/product/_no'},
					{ id: 5, name: 'Договоры', icon: 'icon-dogovor',  to: '/product/_dogovor'},
					{ id: 6, name: 'Почтовый клиент', icon: 'icon-mailclient',  to: '/product/_mail'},
					{ id: 7, name: 'Делопроизводство', icon: 'icon-delo',  to: '/product/_delo'},
					{ id: 8, name: 'Управление документами', icon: 'icon-docmanage',  to: '/product/_documents'},
				],
			}
		},
	}
</script>
