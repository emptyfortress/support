<template lang="pug">
.inner
	carousel(:per-page='1' :scrollPerPage='true'
					:paginationEnabled='false'
					:loop='false'
					class='carousel' )
		slide(v-for="( product, index ) in products" :key="index"  )
			.product(:class="index == activeVersion ? 'active' : ''" @click="setActiveItem(index)")
				p.dv Docsvision
				p {{product.name}}
	section(v-if="activeVersion == 0")
		p this is 1
	section(v-if="activeVersion == 1")
		p this is 2
	section(v-if="activeVersion == 2")
		p this is 3
</template>

<script>
	export default {
		data() {
			return {
				activeVersion: 1,
				products: [
					{ id: 1, name: '5.3',  active: false, to: '' },
					{ id: 2, name: '5.4',  active: true, to: ''},
					{ id: 3, name: '5.5',  active: false, to: ''},
				],
			}
		},
		computed: {
		},
		mounted() {
			this.overflow();
			this.setActiveItem(1);
		},
		methods: {
			overflow() { // this is for showing items outside of carousel
				let inner = document.querySelector('.VueCarousel-wrapper')
				inner.style.overflow = 'visible';

			},
			setActiveItem(index) {
				let slider = document.querySelector('.VueCarousel-inner');
				let distance = - ( index * 128 );
				slider.style.transform = "translate3d(" + distance +"px, 0, 0)";
				this.activeVersion = index;
      },
		}
	}
</script>

<style scoped lang="scss">
.inner {
	margin: 0 auto;
}
.carousel {
	width: 130px;
	margin: 0 auto;
	overflow: visible;
}
.carousel .VueCarousel-wrapper {
	overflow: visible !important;
}
.VueCarouser-inner {
}

.product {
	margin: 0 .5rem;
	cursor: pointer;
	padding: .5rem;
	color: $main;
	transition: all .3s ease;
	&.active {
		color: $dv-green;
		background: #eee;
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

