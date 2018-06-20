<template lang="pug">
	.container-main
		BigHeader/
		TheSign(v-if="!$store.state.login")/
		ProductCarousel(v-if="$store.state.login")/
		.navgrid
			Section(v-for="section in ( $store.state.login ? $store.state.sections : defaultSections )" :key="section.id" :icon="section.icon" :name="section.name" :to="section.to" :click="section.click")
		section.lastlist(v-if="$store.state.login")
			section.lastlist
				Popular(:title="titleLast" :list="popular")/
		section.lastlist(v-else)
			Popular(:title="titlePopular" :list="popular")/
		Footer/
</template>

<script>
import Footer from '@/components/Footer';
import BigHeader from '@/components/BigHeader';
import Section from '@/components/Section';
import TheSign from '@/components/TheSign';
import ProductCarousel from '@/components/ProductCarousel';
import Popular from '@/components/lists/Popular';


export default {
	layout: 'default',
	transition: 'zoomout',
	// transition(to, from) {
	// 	if (from.layoutname == 'errorlayout') {
	// 		return 'zoomin'
	// 	} else {
	// 		return 'zoomout'
	// 	}
	// },
	// transition(to, from) {
	// 	if (from.name === 'error') {
	// 		return 'zoomin'
	// 	} else {
	// 		return 'zoomout'
	// 	}
	// },
	// transition: {
	// 	name: 'zoomout',
	// 	mode: 'in-out'
	// },
	data() {
		return {
			titlePopular: "Популярные темы в сообществе",
			titleLast: "Последние действия",
			popular: [
				{ forum: "Конструирование решений", text: "Рекламоноситель восстанавливает имидж предприятия. Ценовая стратегия по-прежнему востребована." },
				{ forum: "Идеи и предложения", text: "Стратегия сегментации ускоряет процесс стратегического планирования." },
				{ forum: "Форум всех вопросов", text: "VIP-мероприятие без оглядки" },
				{ forum: "Форсаж", text: "Тактика выстраивания отношений с коммерсчекими агентами наиболее полно упорядочивает традиционный канал, отвоевывая рыночный сегмент." },
				{ forum: "Форсаж", text: "Стимулирование коммьюнити искажает комплексный сегмент рынка." },
				{ forum: "Демоверсии", text: "Размещение, анализируя результаты рекламной кампании, подсознательно притягивает" },
				{ forum: "Администрирование", text: "Согласно предыдущему, концепция новой" },
				{ forum: "Форум по курсам", text: "Традиционный канал правомочен. Баланс спроса и предложения" },
				{ forum: "Форсаж", text: "Синхронизирует межличностный пул лояльных изданий." },
			],
		}
	},
	computed: {
		defaultSections() {
			return this.$store.state.sections.filter( item => item.firstpage == true )
		}

	},
	components: {
		Footer,
		BigHeader,
		Section,
		TheSign,
		ProductCarousel,
		Popular
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
		margin: 1rem auto;
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
