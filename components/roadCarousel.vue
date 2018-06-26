<template lang="pug">
.inner
	carousel(:per-page='3' :scrollPerPage='true'
					:paginationEnabled='false'
					:loop='false'
					class='carousel' )
		slide(v-for="product in products" :key="product.id" )
			.product(:class="product.active ? 'active' : ''")
				p.dv Docsvision
				p {{product.name}}
</template>

<script>
	export default {
		data() {
			return {
				products: [
					{ id: 1, name: '5.3',  active: false, to: '' },
					{ id: 2, name: '5.4',  active: true, to: ''},
					{ id: 3, name: '5.5',  active: false, to: ''},
				],
			}
		},
		methods: {
			goto(e) {
				this.$store.commit( 'hideNav' );
				this.$router.push(e.to);
			},
			goToSlide() {
				let slider = window.document.querySelector('.VueCarousel-inner');
				slider.style.transform = "translate3d(-242px, 0, 0)";
			}
		}
	}
</script>

<style scoped lang="scss">
.inner {
	margin: 0 auto;
}
.carousel {
	width: 450px;
	margin: 0 auto;
}

.product {
	height: 100%;
	/* width: 100px; */
	display: flex;
	flex-direction: column;
	align-items: center;
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

