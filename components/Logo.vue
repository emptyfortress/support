<template id="top" >
		<span @click="$store.commit('hideNav')">
			<nuxt-link class="logo" to="/" >
				<div>Docvision</div>
				<img src="~assets/img/logo.svg" alt="">
				<div>Support</div>
			</nuxt-link>
		</span>
</template>

<script>
export default {
	// transition: 'bounce',
	// layout: 'dark'
}
</script>

<style scoped lang="scss">

.logo {
	display: flex;
	align-items: center;
	font-size: .9rem;
	color: #666;
	font-family: Tahoma;
	text-decoration: none;
	img {
		transition: all .4s cubic-bezier(.55,0,.1,1);
		margin: 0 10px;
	}
	&:hover {
		img {
			transform: rotate(-30deg);
		}
	}
}

</style>
