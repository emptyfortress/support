<template lang="pug">
carousel(:per-page='2' class='carousel')
	slide(v-for="product in products" :key="product.id" class="slide")
		.product
			div {{product.name}}
			div {{ product.id }}

</template>

<script>
	export default {
		data() {
			return {
			products: [
				{ id: 1, name: 'Платформа', icon: '', text: '' },
				{ id: 2, name: 'Web-client', icon: '', text: '' },
				{ id: 3, name: 'Платформа', icon: '', text: '' },
				{ id: 4, name: 'Пульс', icon: '', text: '' },
				{ id: 5, name: 'Накопительные обновления', icon: '', text: '' },
				{ id: 6, name: 'Договоры', icon: '', text: '' },
				{ id: 7, name: 'Почтовый клиент', icon: '', text: '' },
				{ id: 8, name: 'Делопроизводство', icon: '', text: '' },
				{ id: 9, name: 'Управление документами', icon: '', text: '' },
			],
				
			}
		}
	}
</script>

<style scoped lang="scss">
.carousel {
	width: 780px;
	margin: 0 auto;
}
.slide {
	background: #ccc;
}
.product {
	margin: .5rem;
	background: #eee;

}

</style>
