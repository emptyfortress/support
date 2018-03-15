<template lang="pug">
	.container-main
		BigHeader/
		.navgrid
			.item
			.item
			.item
			.item
			.item
			.item
			.item
			.item
			.item
			.item
		Footer/
</template>

<script>
	import Footer from '@/components/Footer';
	import BigHeader from '@/components/BigHeader';

export default {

	components: {
		Footer,
		BigHeader
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
		width: 780px;
		height: auto;
		margin: 2rem auto;
		background: #eee;
		display: flex;
		flex-flow: row wrap;
		.item {
			width: 20%;
			height: 130px;
			background: #fff;
			border: 1px solid #333;

		}
	}
}



</style>
