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
				{ id: 1, name: 'Платформа', icon: 'icon-platform', to: '/docs/platform/1' },
				{ id: 2, name: 'Web-client', icon: 'icon-web', },
				{ id: 3, name: 'Пульс', icon: 'icon-pulse', },
				{ id: 4, name: 'Накопительные обновления', icon: 'icon-no', },
				{ id: 5, name: 'Договоры', icon: 'icon-dogovor', },
				{ id: 6, name: 'Почтовый клиент', icon: 'icon-mailclient', },
				{ id: 7, name: 'Делопроизводство', icon: 'icon-delo', },
				{ id: 8, name: 'Управление документами', icon: 'icon-docmanage', },
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
	/* background: #FFEBB6; */
	height: 12rem;
	padding: .3rem;

}
.product {
	background: #fff;
	height: 100%;
	border-radius: .5rem;
	border: 1px solid $dv-yellow; 
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	i {
		font-size: 6rem;
		/* height: 3rem; */
		/* font-size: 3rem; */
		color: $dv-yellow;
		/* border: 1px solid #ccc; */
		::before {
			display: block;
		}
	}
	h3 {
		text-align: center;
	}
}

</style>
