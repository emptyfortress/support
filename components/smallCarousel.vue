<template lang="pug">
carousel(:per-page='4' :scrollPerPage='true'
				:paginationEnabled='false'
				:loop='true'
				:navigationEnabled='true'
				navigationNextLabel=`<i class="icon-next" style="font-size: 3rem; color: #0096DC;"></i>`
				navigationPrevLabel=`<i class="icon-prev" style="font-size: 3rem; color: #0096DC;"></i>`
				class='carousel' )
	slide(v-for="product in products" :key="product.id" )
		.product-card
			.product
				i(:class="product.icon" @click="goto(product)")
				h3(@click="goto(product.to)") {{product.name}}
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
					{ id: 8, name: 'Еще', icon: 'icon-more',  to: '/product'},
				],
			}
		},
		methods: {
			goto(e) {
				this.$store.commit( 'hideNav' );
				this.$router.push(e.to);
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
	margin: 0;
	padding: .5rem;
	height: 175px;
}

.product {
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px dotted $blue;
	border-radius: .5rem;
	cursor: pointer;
	padding: .5rem;
	i {
		font-size: 5rem;
		color: $blue;
	}
	h3 {
		font-size: 1.0rem;
		text-align: center;
		color: $blue;
		margin-top: 0;
		text-transform: none;
	}
	&:hover {
		border-style: solid;
		background: darken($dv-blue, 2%);
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

