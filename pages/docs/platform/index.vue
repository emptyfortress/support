<template lang="pug">
div
	h1
		i.icon-book/ Платформа
	ul.list
		li(v-for="item in childs")
			nuxt-link(:to='item.to') {{item.name}}
	<nuxt-child />
</template>

<script>
export default {
	transition: {
		name: 'slide-right',
		mode: 'out-in'
	},
	data() {
		return {
			childs: [
				{ id: 1, to: '/docs/platform/1', name: 'Установка и администрирование Docsvision 5.2.2450' },
				{ id: 2, to: '/docs/platform/2', name: 'Конструктор согласований Docsvision 5.4.2642' },
				{ id: 3, to: '/docs/platform/3', name: 'Установка и администрирование Docsvision 5.3.2559' },
				{ id: 4, to: '/docs/platform/4', name: 'Установка и администрирование Docsvision 5.2.2542' },
			]
		}
	}
}
</script>

<style scoped lang="scss">
.list {
	font-size: 1.07rem;
	li {
		padding: .5rem 0;
	}
}

</style>
