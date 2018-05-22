<template lang="pug">
transition(name='zoomin', mode='out-in')
	.main
		.header
			Ham/
			Logo/
			.right
				Loud/
				div
					Enter
		.nav(:class="{active : $store.state.navigation}")
			smallCarousel(v-if="$store.state.login")/
			.navgrid
				SectionLight(v-for="section in ( $store.state.login ? filteredPage : defaultSections )" :key="section.id" :icon="section.icon" :name="section.name" :to="section.to")
		Search/
		Breadcrumb/
		.container
			<nuxt/>
		Footer/
		SendButton(v-show="but")/
		<!-- .send(v&#45;show="but") -->
		<!-- 	i.icon&#45;send -->
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
import smallCarousel from '@/components/smallCarousel';
import SendButton from '@/components/SendButton';


export default {
	data() {
		return {
		}
	},
	computed: {
		filteredPage() {
			return this.$store.state.sections.filter( item => item.innerpage == true )
		},
		defaultSections() {
			return this.$store.state.sections.filter( item => item.firstpage == true )
		},
		but() {
			return this.$route.fullPath.indexOf('condition') == -1 ? true : false
			// return this.$route.fullPath.indexOf('1') == -1 ? true : false;
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
		Breadcrumb,
		smallCarousel,
		SendButton
	}
}

</script>

<style scoped lang="scss">

/* .main { position: relative; } */

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
	max-height: 0;
	background: $dv-blue;
	transition: all .3s cubic-bezier(.77,.06,.46,.97);
	-moz-box-shadow:    inset 0 2px 10px #000;
	-webkit-box-shadow: inset 0 2px 10px #000;
	box-shadow:         inset 0 2px 10px #000;
	overflow: hidden;
	&.active {
		max-height: 380px;
	}
}

.navgrid {
	max-width: 960px;
	height: auto;
	margin: 2rem auto;
	/* margin-top: 0; */
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;
}

</style>
