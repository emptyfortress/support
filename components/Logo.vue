<template>
	<div class="logo">
		<div>Техподдержка</div>
		<img src="~assets/img/logo.svg" alt="">
		<div>Доксвижн</div>
	</div>
</template>

<script>
export default {
	// transition: 'bounce',
	// layout: 'dark'
}
</script>

<style scoped lang="scss">
	@import '~assets/css/colors';

	.logo {
		display: flex;
		align-items: center;
		font-size: .9rem;
		color: #666;
		font-family: Tahoma;
		img {
			margin: 0 10px;
		}
	}

</style>
