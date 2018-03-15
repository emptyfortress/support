<template lang="pug">
	.big-header
		.topBar
			Ham/
			Logo/
			Loud/
		.search Bottom

</template>

<script>
	import Logo from '@/components/Logo';
	import Ham from '@/components/Ham';
	import Loud from '@/components/Loud';

	export default {
		components: {
			Logo,
			Ham,
			Loud
		}
	}
</script>

<style scoped lang="scss">
@import '~assets/css/colors';

.big-header {
	display: grid;
	grid-template-rows: 30% 70%; 
	padding: 0 1rem;
	background: linear-gradient(white, var(--dv-gray2));
	border-bottom: 1px solid var(--dv-gray3);
}

.topBar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* background: red; */
}



</style>
