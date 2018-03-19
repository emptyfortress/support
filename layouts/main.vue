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

</style>
