<template lang="pug">
.inner
	carousel(:per-page='3' :scrollPerPage='false'
					:paginationEnabled='false'
					:loop='false'
					class='carousel' )
		slide(v-for="( product, index ) in products" :key="index"  )
			.product(:class="product.active ? 'active' : ''" @click="setActiveItem(index)")
				p.dv Docsvision
				p {{product.name}}
</template>

<script>
	export default {
		data() {
			return {
				activeVersion: 2,
				products: [
					{ id: 5, name: '',  active: false, to: '' },
					{ id: 1, name: '5.3',  active: false, to: '' },
					{ id: 2, name: '5.4',  active: true, to: ''},
					{ id: 3, name: '5.5',  active: false, to: ''},
					{ id: 6, name: '',  active: false, to: ''},
				],
			}
		},
		mounted() {
			let slider = document.querySelector('.VueCarousel-inner');
			slider.style.transform = "translate3d(-280px, 0, 0)";

		},
		methods: {
			setActiveItem(index) {
				let slider = document.querySelector('.VueCarousel-inner');
				slider.style.transform = "translate3d(242px, 0, 0)";
				console.log(index);
      },
		}
	}
</script>

<style scoped lang="scss">
.inner {
	margin: 0 auto;
}
.carousel {
	/* width: 650px; */
	margin: 0 auto;
}
.VueCarousel-wrapper {
	overflow: visible;
}
.VueCarousel-inner {
	transform: translate3d(-100px,0,0);
}

.product {
	background: #eee;
	margin: 0 .5rem;
	/* flex-basis: 20%; */
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

