<template lang="pug">
	.container-main
		BigHeader/
		TheSign/
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

export default {
	layout: 'default',
	transition: {
		name: 'zoomout',
		mode: 'in-out'
	},
	data: function() {
		return {
		}
	},

	components: {
		Footer,
		BigHeader,
		Section,
		TheSign,
		Last
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
}

</style>
