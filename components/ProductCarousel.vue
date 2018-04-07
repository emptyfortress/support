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
				{ id: 2, name: 'Web-client', icon: 'icon-web',  to: '/docs/platform/1'},
				{ id: 3, name: 'Пульс', icon: 'icon-pulse',  to: '/docs/platform/1'},
				{ id: 4, name: 'Накопительные обновления', icon: 'icon-no',  to: '/docs/platform/1'},
				{ id: 5, name: 'Договоры', icon: 'icon-dogovor',  to: '/docs/platform/1'},
				{ id: 6, name: 'Почтовый клиент', icon: 'icon-mailclient',  to: '/docs/platform/1'},
				{ id: 7, name: 'Делопроизводство', icon: 'icon-delo',  to: '/docs/platform/1'},
				{ id: 8, name: 'Управление документами', icon: 'icon-docmanage',  to: '/docs/platform/1'},
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
