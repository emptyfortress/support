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
					SectionLight(v-for="section in sections" :key="section.id" :icon="section.icon" :name="section.name")
			Search/
			<nuxt/>
	</transition>
</template>

<script>
	import Logo from '@/components/Logo';
	import Loud from '@/components/Loud';
	import Enter from '@/components/Enter';
	import Ham from '@/components/Ham';
	import SectionLight from '@/components/SectionLight';
	import Search from '@/components/Search';

	export default {

		data() {
			return {
				sections: [
					{ id:  1, icon: 'condition', name: 'Условия' },
					{ id:  2, icon: 'map',       name: 'Путеводитель' },
					{ id:  3, icon: 'download',  name: 'Загрузить' },
					{ id:  4, icon: 'book',      name: 'Документация' },
					{ id:  5, icon: 'lifering',  name: 'Техподдержка' },
					{ id:  6, icon: 'send',      name: 'Отправить запрос' },
					{ id:  7, icon: 'bookmark',  name: 'Мои запросы' },
					{ id:  8, icon: 'code',      name: 'Разработчикам' },
					{ id:  9, icon: 'faq',       name: 'ЧаВо' },
					{ id: 10, icon: 'mail',      name: 'Контакты' },
				],
			}
		},

		components: {
			Logo,
			Loud,
			Enter,
			Ham,
			Search,
			SectionLight
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
