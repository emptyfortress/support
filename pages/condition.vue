<template lang="pug">
.container
	<!-- Breadcrumb/ -->

	br
	nuxt-link(to="/condition/urgent") test

</template>

<script>
	// import Breadcrumb from '@/components/Breadcrumb';
	
export default {
	layout: 'main',
	name: 'Условия',
	transition: {
		name: 'slide-left',
		mode: 'out-in'
	},
	components: {
		// Breadcrumb
	},
	data() {
		return {
			breads: [
				{ name: 'Главная', to: '/', active: '' },
				{ name: 'Условия', to: '/', active: '' },
			]
		}
	}
}
</script>

<style scoped lang="scss">
/* @import '~bulma/sass/components/breadcrumb'; */

.container {
	max-width: 780px;
	margin: 0 auto;
}

</style>
