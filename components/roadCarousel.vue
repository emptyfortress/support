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
	.head
	.treeContainer
		.branchlist(v-if="activeVersion == 0" v-for="item in version53")
			Branch(:name="item.name" :date="item.date")
		section(v-if="activeVersion == 1")
		section(v-if="activeVersion == 2")
	.tail
</template>

<script>
import Branch from '@/components/Branch';
	
export default {
	data() {
		return {
			activeVersion: 0,
			products: [
				{ id: 1, name: '5.3',  active: false, to: '' },
				{ id: 2, name: '5.4',  active: true, to: ''},
				{ id: 3, name: '5.5',  active: false, to: ''},
			],
			version53: [
				{ id: 0, date: "Раз в 2-3 месяца (по мере накопления багов)", name: "Накопительное обновление", to: "" },
				{ id: 1, date: "Конец 2019 года", name: "Поддержка прекращена", to: "" },
			]
		}
	},
	computed: {
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
		},
	},
	components: {
		Branch: Branch
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

.treeContainer {
	width: 600px;
	margin: 0 auto;
	background: url(~assets/img/vert.png) repeat-y center top;
	border: 1px solid red; 
}
.branchlist {
	margin-bottom: 2rem;
	&:last-child { margin-bottom: 0; }
}

.tail {
	width: 10px;
	height: 45px;
	margin: 0 auto;
	background: url(~assets/img/tail.png) no-repeat center top;
}
.head {
	width: 10px;
	height: 45px;
	margin: 0 auto;
	background: url(~assets/img/head.png) no-repeat center top;
}

</style>


