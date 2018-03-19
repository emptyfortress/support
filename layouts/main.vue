<template lang="pug">
	<transition name="zoomin">
		.main
			.header
				Ham/
				Logo/
				.right
					Loud/
					div
						Enter
			.search
				div
					img(src="~assets/img/search.svg")
					input
					.place Поиск
					img(src="")
			<nuxt/>
	</transition>
</template>


<script>
	import Logo from '@/components/Logo';
	import Ham from '@/components/Ham';
	import Loud from '@/components/Loud';
	import Enter from '@/components/Enter';

	export default {
		components: {
			Logo,
			Ham,
			Loud,
			Enter
		}
	}
</script>

<style scoped lang="scss">
.header {
	height: 69px;
	padding: 0 1rem;
	background: $dv-gray1;
	border-bottom: 1px solid $dv-gray2;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.right {
	display: flex;
	align-items: center;
	div {
		margin-left: 14px;
	}
}

.search {
	height: 40px;
	border-bottom: 1px solid $dv-gray2;
	div {
		position: relative;
		width: 780px;
		margin: 0 auto;
		img {
			position: absolute;
			top: 10px;
			right: .5rem;
			opacity: .3;
		}
		input {
			width: 100%;
			height: 40px;
			display: block;
			border: none;
			background: transparent;
			font-size: 1.5rem;
			padding-left: 1rem;
		}
		.place {
			position: absolute;
			top: 12px;
			left: 48%;
			color: $dv-gray3;
		}
	}
}
</style>
