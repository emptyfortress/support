<template lang="pug">
.inner
	carousel(:per-page='3' :scrollPerPage='false'
					:paginationEnabled='false'
					:loop='false'
					class='carousel' )
		slide(v-for="product in products" :key="product.id" )
			.product(:class="product.active ? 'active' : ''" @click="goToSlide")
				p.dv Docsvision
				p {{product.name}}
</template>

<script>
	export default {
		data() {
			return {
				products: [
					{ id: 5, name: '',  active: false, to: '' },
					{ id: 1, name: '5.3',  active: false, to: '' },
					{ id: 2, name: '5.4',  active: true, to: ''},
					{ id: 3, name: '5.5',  active: false, to: ''},
					{ id: 6, name: '',  active: false, to: ''},
				],
			}
		},
		methods: {
			goto(e) {
				this.$store.commit( 'hideNav' );
				this.$router.push(e.to);
			},
			goToSlide() {
				let slider = document.querySelector('.VueCarousel-inner');
				// slider.style.transform = "translate3d(-242px, 0, 0)";
			}
		}
	}
</script>

<style scoped lang="scss">
.inner {
	margin: 0 auto;
	border: 1px solid red; 
	/* border: */
}
.carousel {
	border: 1px solid blue; 
	width: 650px;
	margin: 0 auto;
}
.VueCarousel-wrapper {
	overflow: visible;
}

.product {
	background: #eee;
	margin: 0 1rem;
	flex-basis: 20%;
	cursor: pointer;
	padding: .5rem;
	color: $main;
	&.active {
		color: $dv-green;
	}
	i {
		font-size: 5rem;
	}
	p {
		font-size: 1.3rem;
		text-align: center;
	}
	.dv {
		font-size: .9rem;
	}
}

</style>

