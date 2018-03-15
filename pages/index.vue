<template>
  <div class="container-main">
		<BigHeader />
		<div>
			<div><h1>Это по русски</h1></div>
		</div>
		<Footer />
  </div>
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
	/* height: 100vh; */
	display: grid;
	grid-template-rows: 230px auto;
}



</style>
