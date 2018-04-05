<template lang="pug">
	.container-main
		BigHeader/
		TheSign/
		carousel(:per-page="2")
			slide(v-for="product in products" :key="product.id")
				div {{product.name}}
				div {{ product.id }}
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

// import { Carousel, Slide } from 'vue-carousel';

export default {
	layout: 'default',
	transition: {
		name: 'zoomout',
		mode: 'in-out'
	},
	data() {
		return {
			products: [
				{ id: 1, name: 'Платформа', icon: '', text: '' },
				{ id: 2, name: 'Web-client', icon: '', text: '' },
				{ id: 3, name: 'Платформа', icon: '', text: '' },
				{ id: 4, name: 'Пульс', icon: '', text: '' },
				{ id: 5, name: 'Накопительные обновления', icon: '', text: '' },
				{ id: 6, name: 'Договоры', icon: '', text: '' },
				{ id: 7, name: 'Почтовый клиент', icon: '', text: '' },
				{ id: 8, name: 'Делопроизводство', icon: '', text: '' },
				{ id: 9, name: 'Управление документами', icon: '', text: '' },
			],
		}
	},
	components: {
		Footer,
		BigHeader,
		Section,
		TheSign,
		Last,
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

.my-swiper {
	/* height: 300px; */
	/* width: 100%; */
	background: yellow;
	.swiper-wrapper {
		/* text-align: center; */
		font-size: 38px;
		justify-content: center;
		align-items: center;
		display: flex;
		.swiper-slide {
			/* width: 100%; */
			/* height: 300px; */
			/* width: 300px; */
			/* background: red; */
			div {
				/* margin: 20px; */
				background-color: #eee;
			}
		}
	}
	.swiper-pagination {
		> .swiper-pagination-bullet {
			/* background-color: red; */
		}
	}
}
</style>
