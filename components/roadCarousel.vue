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
	RoadTree/
</template>

<script>
import RoadTree from '@/components/RoadTree';
	
export default {
	data() {
		return {
			activeVersion: 0,
			products: [
				{ id: 1, name: '5.3',  active: false, to: '' },
				{ id: 2, name: '5.4',  active: true, to: ''},
				{ id: 3, name: '5.5',  active: false, to: ''},
			],
		}
	},
	mounted() {
		this.overflow();
		this.setActiveItem(0);
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
			this.$store.commit( "setActiveVersion", { amount: index } )
			console.log(index);
			console.log( "actiev" + this.$store.state.activeVersion);
		},
	},
	components: {
		RoadTree: RoadTree
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
	p {
		font-size: 1.3rem;
		text-align: center;
	}
	.dv {
		font-size: .9rem;
	}
}

</style>


