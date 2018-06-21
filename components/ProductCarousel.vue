<template lang="pug">
carousel(:per-page='3' :scrollPerPage='true' 
					:loop='true'
					:navigationEnabled='true'
					:paginationEnabled='false'
					navigationNextLabel=`<i class="icon-next" style="font-size: 3rem; color: #ccc;"></i>`
					navigationPrevLabel=`<i class="icon-prev" style="font-size: 3rem; color: #ccc"></i>`
					class='carousel')
	slide(v-for="product in products" :key="product.id" )
		.product-card
			.product(@click="goto(product)")
				i(:class="product.icon")
				h3 {{product.name}}

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
				{ id: 5, name: 'Почтовый клиент', icon: 'icon-mailclient',  to: '/product/_mail'},
				{ id: 6, name: 'Еще', icon: 'icon-more',  to: '/product'},
			],
			}
		},
		methods: {
			goto(e) {
				this.$router.push(e.to);
				return { data: e.id }
			}
		}
	}
</script>

<style scoped lang="scss">

.carousel {
	/* width: 960px; */
	width: 780px;
	margin: 0 auto;
}
.product-card {
	margin: 0 .5rem;
	height: 12rem;
	padding: .5rem;
	background: #eee;
	border-radius: .5rem;
}
.product {
	background: #fff;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	i {
		font-size: 6rem;
		color: $gray;
	}
	h3 {
		text-align: center;
		color: $gray;
	}
	&:hover {
		i, h3 {
			color: $dv-yellow;
		}
	}
	&:active {
		i, h3 {
			color: $dv-green;
		}
	}
}

</style>
