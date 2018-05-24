<template lang="pug">
	nuxt-link(:to="to")
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
	&:active {
		color: $dv-green;
		i { color: $dv-green; }
	}
}

.item {
	display: flex;
	flex-flow: column;
	width: 156px;
	height: 130px;
	background: #fff;
	text-align: center;
	justify-content: center;
	font-size: 1rem;
	cursor: pointer;
	&:hover {
		border: 1px solid $dv-gray2;
	}
	p { margin-top: 0.7rem; }
	i { color: $gray; font-size: 2rem; }
}


</style>
