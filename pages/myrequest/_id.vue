<template lang="pug">
	h1 fuck
</template>

<script>
	export default {
		transition(to, from) {
			if (!from) return 'slide-right'
			return +to.params.id < +from.params.id ? 'slide-left' : 'slide-right'
		},
	}
</script>
