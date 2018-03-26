<template lang="pug">
div
	.flex
		h1
			i.icon-book/ Платформа
		button.button.is-light Подписаться
	ul.list
		li(v-for="item in childs")
			nuxt-link(:to='item.to') {{item.name}}
	<nuxt-child />
</template>

<script>
export default {
	transition: {
		name: 'slide-left',
		mode: 'out-in'
	},
	data() {
		return {
			childs: [
				{ id: 1, to: '/docs/platform/Docsvision_5.4.2642', name: 'Docsvision 5.4.2642' },
				{ id: 2, to: '/docs/platform', name: 'Конструктор согласований Docsvision 5.4.2642' },
				{ id: 3, to: '/docs/platform', name: 'Установка и администрирование Docsvision 5.3.2542' },
				{ id: 4, to: '/docs/platform', name: 'Установка и администрирование Docsvision 5.2.2542' },
			]
		}
	}
}
</script>

<style scoped lang="scss">
.flex {
	display: flex;
	h1 {
		flex-grow: 1;
		
	}
}
.list {
	font-size: 1.07rem;
	li {
		padding: .5rem 0;
	}
}

</style>
