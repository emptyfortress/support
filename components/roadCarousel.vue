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
			this.startShift();
		},
		methods: {
			startShift() {
				let slider = document.querySelector('.VueCarousel-inner');
				slider.style.transform = "translate3d("  + slider.style.flexBasis + ", 0, 0)";
				// slider.style.transform = "translate3d(200px, 0, 0)";
			},
			setActiveItem(index) {
				let slider = document.querySelector('.VueCarousel-inner');
				// slider.style.transform = "translate3d(" + flex-basis +"px, 0, 0)";
				console.log(index);
      },
		}
	}
</script>

<style scoped lang="scss">
.inner {
	margin: 0 auto;
	border: 1px solid #ccc; 
}
.carousel {
	width: 400px;
	margin: 0 auto;
	border: 1px solid red; 
	overflow: visible;
}
.VueCarousel-wrapper {
	overflow: visible !important;
}
.VueCarouser-inner {
}

.product {
	background: #eee;
	margin: 0 .5rem;
	/* width: 150px; */
	/* flex-basis: content; */
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

