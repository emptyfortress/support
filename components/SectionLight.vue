<template lang="pug">
	nuxt-link(:to='to')
		.item(@click="$store.commit('hideNav')" )
			i(:class="'icon-' + icon")
			p {{name}}
</template>
<script>

export default {
	props: ['name', 'icon', 'to']
}

</script>

<style scoped lang="scss">
a {
	text-decoration: none;
	color: $black;
}

.item {
	display: flex;
	flex-flow: column;
	width: 156px;
	height: 130px;
	text-align: center;
	justify-content: center;
	font-size: 1rem;
	cursor: pointer;
	&:hover {
		border: 1px solid $blue;
		/* background: #0E2B45; */
	}
	p {
		margin-top: 0.7rem;
		color: #fff;
	}
	i { 
		color: #4A90E2;
		font-size: 2rem;
	}
}


</style>
