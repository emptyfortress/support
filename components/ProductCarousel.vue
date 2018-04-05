<template lang="pug">
carousel(:per-page='3' :loop='true' :navigationEnabled='true' class='carousel')
	slide(v-for="product in products" :key="product.id" class="slide")
		.product-card
			.product(@click="goto(product.to)")
				i(:class="product.icon")
				h3 {{product.name}}
				<!-- .title {{product.name}} -->

</template>

<script>
	export default {
		data() {
			return {
			products: [
				{ id: 1, name: 'Платформа', icon: 'icon-platform', text: '', to: '/docs/platform/1' },
				{ id: 2, name: 'Web-client', icon: '', text: '' },
				{ id: 3, name: 'Пульс', icon: '', text: '' },
				{ id: 4, name: 'Накопительные обновления', icon: '', text: '' },
				{ id: 5, name: 'Договоры', icon: '', text: '' },
				{ id: 6, name: 'Почтовый клиент', icon: '', text: '' },
				{ id: 7, name: 'Делопроизводство', icon: '', text: '' },
				{ id: 8, name: 'Управление документами', icon: '', text: '' },
			],
			}
		},
		methods: {
			goto(e) {
				this.$router.push(e);
			}
		}
	}
</script>

<style scoped lang="scss">
.carousel {
	width: 780px;
	margin: 0 auto;
	/* border: 1px solid #ccc; */
}
.slide {
	/* background: #ccc; */
}
.product-card {
	margin: 0 .5rem;
	background: #eee;
	height: 12rem;
	padding: .5rem;

}
.product {
	background: #fff;
	height: 100%;
	border-radius: .5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	i {
		font-size: 6rem;
	}
}

</style>
