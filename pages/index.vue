<template lang="pug">
	.container-main
		BigHeader/
		.navgrid
			Section(v-for="section in sections" :key="section.id" :name="section.name")
		Footer/
</template>

<script>
	import Footer from '@/components/Footer';
	import BigHeader from '@/components/BigHeader';
	import Section from '@/components/Section';

export default {
	data: function() {
		return {
			sections: [
				{ id: 1, name: 'one' },
				{ id: 2, name: 'two' },
				{ id: 3, name: 'three' },
				{ id: 4, name: 'one' },
				{ id: 5, name: 'one' },
				{ id: 6, name: 'one' },
				{ id: 7, name: 'one' },
			]
		}
	},

	components: {
		Footer,
		BigHeader,
		Section
	}
}

</script>

<style scoped lang="scss">
@import '~assets/css/colors';

.container-main {
	height: 100%;
	display: grid;
	grid-template-rows: 230px auto;
	.navgrid {
		max-width: 780px;
		height: auto;
		margin: 2rem auto;
		background: #eee;
		display: flex;
		flex-flow: row wrap;
	}
}



</style>
