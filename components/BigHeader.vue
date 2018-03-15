<template>
	<div class="big-header">
		<div class="topBar">
			<Ham />
			<Logo />
			<div>lsak</div>
		</div>
		<!-- <div class="logo"> -->
		<!-- 	<img src="~assets/img/logo.svg" alt=""> -->
		<!-- </div> -->
		<div class="search">bottom</div>

	</div>
</template>

<script>
	import Logo from '@/components/Logo'
	import Ham from '@/components/Ham'

	export default {
		components: {
			Logo,
			Ham
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
