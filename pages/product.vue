<template lang="pug">
	nuxt-child/
</template>

<script>
	export default {
		layout: 'main',
		transition(to, from) {
			if(to.name == 'product') {
				return 'slide-left'
			}
			else { return 'slide-right' }
		},
	}
</script>
