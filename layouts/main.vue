<template lang="pug">
	<transition name="zoomin" mode="out-in">
		.main
			.header
				Ham/
				Logo/
				.right
					Loud/
					div
						Enter
			.nav(:class="{active : $store.state.navigation}")
				.navgrid
					SectionLight(v-for="section in $store.state.sections" :key="section.id" :icon="section.icon" :name="section.name" :to="section.to")
			Search/
			Breadcrumb/
			.container
				<nuxt/>
			Footer/

	</transition>
</template>

<script>
	import Footer from '@/components/Footer';
	import Logo from '@/components/Logo';
	import Loud from '@/components/Loud';
	import Enter from '@/components/Enter';
	import Ham from '@/components/Ham';
	import SectionLight from '@/components/SectionLight';
	import Search from '@/components/Search';
	import Breadcrumb from '@/components/Breadcrumb';

	export default {

		data() {
			return {
			}
		},

		components: {
			Footer,
			Logo,
			Loud,
			Enter,
			Ham,
			Search,
			SectionLight,
			Breadcrumb
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

.nav {
	height: 0;
	background: $dv-blue;
	transition: all .3s cubic-bezier(.77,.06,.46,.97);
	-moz-box-shadow:    inset 0 2px 10px #000;
	-webkit-box-shadow: inset 0 2px 10px #000;
	box-shadow:         inset 0 2px 10px #000;
	overflow: hidden;
	&.active {
		height: 320px;
	}
}

.navgrid {
	max-width: 780px;
	height: auto;
	margin: 2rem auto;
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;
}

</style>
