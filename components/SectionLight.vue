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
	&:active {
		.item p { color: $dv-green; }
		.item i { color: $dv-green; }
		
	}
}

.item {
	display: flex;
	flex-flow: column;
	width: 156px;
	height: 100px;
	text-align: center;
	justify-content: center;
	font-size: 1rem;
	cursor: pointer;
	color: $blue;
	&:hover {
		border: 1px solid $blue;
	}
	p {
		margin-top: 0.7rem;
	}
	i { 
		color: #4A90E2;
		font-size: 1.5rem;
	}
}


</style>
