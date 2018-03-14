<template>
  <div class="container-main">
		<div class="big-header">
			test
		</div>
		<div>
			<div><h1>Это по русски</h1></div>
		</div>
		<Footer />
    <!-- <p><nuxt&#45;link to="/about">About page</nuxt&#45;link></p> -->
    <!-- <p><nuxt&#45;link to="/users">Lists of users</nuxt&#45;link></p> -->
  </div>
</template>

<script>
	import Footer from '@/components/Footer';

export default {
	components: {
		Footer
	}
}

</script>

<style scoped lang="scss">
@import '~assets/css/colors';

.container-main {
	/* height: 100vh; */
	display: grid;
	grid-template-rows: 230px auto;
}

.big-header {
	background: var(--dv-gray2);
}


</style>
