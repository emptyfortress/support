<template lang="pug">
.container
	div
		p test
		<nuxt-link to="/">back</nuxt-link><br><br>
		<nuxt-link to="/users">users</nuxt-link><br><br>

</template>

<script>
export default {
	layout: 'main',
	transition: {
		name: 'slide-left',
		mode: 'out-in'
	}
}
</script>

<style scoped lang="scss">
@import '~bulma/sass/components/breadcrumb';

.container {
	max-width: 780px;
	margin: 0 auto;
}

</style>
