<template lang="pug">
div
	nuxt-link(to="/docs/platform/id") this is platform index page 
	<nuxt-child />
</template>

<script>
export default {
	transition: {
		name: 'slide-left',
		mode: 'out-in'
	},
}
</script>
