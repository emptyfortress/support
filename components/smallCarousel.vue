<template lang="pug">
carousel(:per-page='4' :scrollPerPage='true' :paginationEnabled='false' paginationActiveColor="#498FE3" paginationColor="#000" class='carousel' )
	slide(v-for="product in products" :key="product.id" )
		.product-card
			.product(@click="goto(product.to)")
				i(:class="product.icon")
				h3 {{product.name}}
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
				this.$store.commit( 'hideNav' );
				this.$router.push(e);
			}
		}
	}
</script>

<style scoped lang="scss">
.carousel {
	width: 960px;
	margin: 0 auto;
	margin-top: 1rem;
}

.product-card {
	margin: 0 .5rem;
	padding: .5rem;
	height: 165px;
	border-radius: .5rem;
	border: 1px solid $dv-blue;
	&:hover {
		border-color: $blue;
	}
}
.product {
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	i {
		font-size: 5rem;
		color: $blue;
	}
	h3 {
		font-size: 1.0rem;
		text-align: center;
		color: #fff;
	}
}

</style>

