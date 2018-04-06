<template lang="pug">
	.container-main
		BigHeader/
		TheSign/
		ProductCarousel/
		.navgrid
			Section(v-for="section in $store.state.sections" :key="section.id" :icon="section.icon" :name="section.name" :to="section.to")
		section.lastlist
			h2 Последние действия
			<section v-for="n in 10">
				Last/
			</section>
		Footer/
</template>

<script>
import Footer from '@/components/Footer';
import BigHeader from '@/components/BigHeader';
import Section from '@/components/Section';
import TheSign from '@/components/TheSign';
import Last from '@/components/lists/Last';
import ProductCarousel from '@/components/ProductCarousel';

// import { Carousel, Slide } from 'vue-carousel';

export default {
	layout: 'default',
	transition: {
		name: 'zoomout',
		mode: 'in-out'
	},
	data() {
		return {
		}
	},
	components: {
		Footer,
		BigHeader,
		Section,
		TheSign,
		Last,
		ProductCarousel
		// Carousel,
		// Slide
	}
}

</script>

<style scoped lang="scss">

.container-main {
	.lastlist { width: 780px;
		margin: 1rem auto;
		margin-top: 3rem;
		h2 {
			font-weight: 300;
			color: #aaa;
			margin-bottom: 1rem;
			border-bottom: 1px solid $dv-gray2;
		}
	}

	.navgrid {
		max-width: 780px;
		height: auto;
		margin: 2rem auto;
		margin-top: 0;
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: center;
	}
	.product {
		width: 175px;
		height: 180px;
		/* border: 1px solid red; */
		margin: .5rem;
		box-shadow: 0 2px 5px #ccc;
	}
}

</style>
