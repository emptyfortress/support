<template lang="pug">
.container
	Breadcrumb/

</template>

<script>
	import Breadcrumb from '@/components/Breadcrumb';
	
export default {
	layout: 'main',
	transition: {
		name: 'slide-left',
		mode: 'out-in'
	},
	components: {
		Breadcrumb
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
@import '~bulma/sass/components/breadcrumb';

.container {
	max-width: 780px;
	margin: 0 auto;
}

</style>
