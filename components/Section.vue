<template lang="pug">
	nuxt-link(to="/about")
		.item(@click="$store.commit('hideNav')" )
			i(:class="'icon-' + icon")
			p {{name}}
</template>


<script>

export default {
	props: ['name', 'icon']
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
	background: #fff;
	text-align: center;
	justify-content: center;
	font-size: 1rem;
	cursor: pointer;
	&:hover {
		border: 1px solid $dv-gray2;
	}
	p {
		margin-top: 0.7rem;
	}
	i { 
		color: #A6A6A6;
		/* color: $dv-green; */
		font-size: 2rem;
	}
}


</style>
