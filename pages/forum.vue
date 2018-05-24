<template lang="pug">
	nuxt-child/
</template>

<script>
	export default {
		layout: 'main',
		transition(to, from) {
			if(to.name == 'forum') {
				return 'slide-left'
			}
			else { return 'slide-right' }
		},
	}
</script>
