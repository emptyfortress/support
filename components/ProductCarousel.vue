<template lang="pug">
carousel(:per-page='3'
					:loop='true'
					:navigationEnabled='false'
					navigationNextLabel=`<i class="icon-web"></i>`
					navigationPrevLabel="prev" 
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
	/* border: 1px solid $dv-gray3;  */
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
