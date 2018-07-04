<template lang="pug">
.inner
	carousel(:per-page='1' :scrollPerPage='true'
					:paginationEnabled='false'
					:loop='false'
					class='carousel' )
		slide(v-for="( item, index ) in sections" :key="index"  )
			.item(:class="index == activeVersion ? 'active' : ''" @click="setActiveItem(index)")
				p {{item.name}}
	RoadTree/
</template>

<script>
import RoadTree from '@/components/RoadTree';
	
export default {
	data() {
		return {
			activeVersion: 0,
			sections: [
				{ id: 1, name: 'Функционал',  active: false, to: '' },
				{ id: 2, name: 'Приоритеты',  active: true, to: ''},
				{ id: 3, name: 'Календарь',  active: false, to: ''},
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
			let flexB = parseInt(slider.style.flexBasis);
			let distance = - ( index * flexB );
			slider.style.transform = "translate3d(" + distance +"px, 0, 0)";
			this.activeVersion = index;
			this.$store.commit( "setActiveVersion", { amount: index } )
			console.log(flexB);
			// console.log();
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
	width: 160px;
	margin: 0 auto;
	overflow: visible;
}
.carousel .VueCarousel-wrapper {
	overflow: visible !important;
}
.VueCarouser-inner {
}

.item {
	margin: 0 .5rem;
	cursor: pointer;
	padding: .5rem 1rem;
	color: $main;
	border: 1px solid $dv-gray2;
	border-radius: 1rem;
	&.active {
		color: $dv-green;
		border-color: $dv-green;
		&:hover { color: $dv-green; }
	}
	&:hover { border-color: $dv-gray3; color: #000}
	p {
		text-transform: uppercase;
		text-align: center;
	}
}

</style>


