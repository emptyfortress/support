<template lang="pug">
.container
	p this is platform parent page
	<nuxt-child />
</template>

<script>
	export default {
	layout: 'main',
		
	}
</script>

<style scoped lang="scss">
.container {
	background: #eee;
	margin-top: 4rem;
}

</style>

