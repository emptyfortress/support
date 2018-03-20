<template>
	<nuxt-link class="logo" to="/">
		<div>Поддержка</div>
		<img src="~assets/img/logo.svg" alt="">
		<div>Доксвижн</div>
	</nuxt-link>
</template>

<script>
export default {
	// transition: 'bounce',
	// layout: 'dark'
}
</script>

<style scoped lang="scss">

	.logo {
		display: flex;
		align-items: center;
		font-size: .9rem;
		color: #666;
		font-family: Tahoma;
		text-decoration: none;
		img {
			margin: 0 10px;
		}
	}

</style>
