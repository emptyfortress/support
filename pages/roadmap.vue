<template lang="pug">
div
	.container
		h1 
			i.icon-map/ Roadmap
		p Стратегический план развития платформы ДВ (сроки примерные)
	<!-- .start Docsvision 5.4 -->
	roadCarousel
</template>

<script>
import roadCarousel from '@/components/roadCarousel';
	export default {
		layout: 'main',
		data() {
			return {
				
			}
		},
		components: {
			roadCarousel
		}
	}
</script>

<style scoped lang="scss">
.container {
	padding-top: 4rem;
	text-align: center;
	margin-bottom: 2rem;
	p { font-size: 1.2rem; color: $main; margin-top: 0; }
	h1 { margin-bottom: 1rem; }
}
roadCarousel {
}

</style>
