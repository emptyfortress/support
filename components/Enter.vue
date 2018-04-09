<template lang="pug">
	.enter 
		nuxt-link(to="/login")
			i.icon-signin(v-if="!$store.state.login")
			i.icon-user(v-else)
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
.icon-user {
	font-size: 1.6rem;
}

</style>
