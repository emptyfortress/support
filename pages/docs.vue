<template lang="pug">
	<nuxt-child />
</template>

<script>
export default {
	layout: 'main',
	transition: {
		name: 'slide-right',
		mode: 'out-in'
	},
}
</script>

<style scoped lang="scss">
</style>
