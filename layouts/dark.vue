<template>
	<transition name="layout">
	<div class="dark">
		<nuxt/>
	</div>
	</transition>
</template>

<style lang="scss">
.dark {
	position: absolute;
	top: 0;
	left: 0;
	min-height: 100%;
	width: 100%;
	background: #333;
	color: #fff;
	a {
		color: #fff;
	}
}
</style>
