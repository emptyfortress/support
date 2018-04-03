<template lang="pug">
	<nuxt-child />
</template>

<script>
export default {
	layout: 'main',
	transition(to, from) {
    if (!from) return 'slide-right'
		return +to.matched.length < +from.matched.length ? 'slide-left' : 'slide-right'
  },
}
</script>

<style scoped lang="scss">
</style>
