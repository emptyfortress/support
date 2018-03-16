<template lang="pug">
	.container-main
		BigHeader/
		.navgrid
			Section(v-for="section in sections" :key="section.id" :icon="section.icon" :name="section.name")
		Footer/
</template>

<script>
	import Footer from '@/components/Footer';
	import BigHeader from '@/components/BigHeader';
	import Section from '@/components/Section';

export default {
	data: function() {
		return {

			sections: [
				{ id:  1, icon: 'book', name: 'Условия' },
				{ id:  2, icon: 'map',       name: 'Путеводитель' },
				{ id:  3, icon: 'download',  name: 'Загрузить' },
				{ id:  4, icon: 'book',      name: 'Документация' },
				{ id:  5, icon: 'lifering',  name: 'Техподдержка' },
				{ id:  6, icon: 'send',      name: 'Отправить запрос' },
				{ id:  7, icon: 'bookmark',  name: 'Мои запросы' },
				{ id:  8, icon: 'code',      name: 'Разработчикам' },
				{ id:  9, icon: 'faq',       name: 'ЧаВо' },
				{ id: 10, icon: 'mail',      name: 'Контакты' },
			]
		}
	},

	components: {
		Footer,
		BigHeader,
		Section
	}
}

</script>

<style scoped lang="scss">

.container-main {
	/* height: 100%; *
	/* display: grid; */
	/* grid-template-rows: 230px auto; */
	.navgrid {
		max-width: 780px;
		height: auto;
		margin: 2rem auto;
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: center;
	}
}

</style>
