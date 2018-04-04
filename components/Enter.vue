<template lang="pug">
	.enter 
		nuxt-link(to="/login")
			i.icon-signin
</template>


<script>
export default {
}
</script>

<style scoped lang="scss">

.enter a {
	font-size: 1.35rem;
	color: $main;
	&:hover {
		color: $dv-blue;
	}
}

</style>
