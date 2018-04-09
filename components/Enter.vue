<template lang="pug">
	.enter 
		nuxt-link(to="/login" v-if="!$store.state.login")
			i.icon-signin
		<!-- .dropdown.is&#45;hoverable.is&#45;right(v&#45;else) -->
		.dropdown.is-hoverable.is-right(v-else)
			<!-- nuxt&#45;link(to="" v&#45;else) -->
			<!-- 	i.icon&#45;user -->
			.dropdown-trigger
				nuxt-link(to="")
					i.icon-user
			.dropdown-menu#dropdown-menu
				.dropdown-content
					p
						i.icon-user Trachuk Olga
					.dropdown-divider
					a.dropdown-item Мои действия
					a.dropdown-item Мой профиль
					a.dropdown-item Сменить пароль
					a.dropdown-item(@click="$store.commit( 'signOut' )") Выйти

</template>


<script>
export default {
}
</script>

<style scoped lang="scss">
@import '~bulma/sass/components/dropdown';

.enter a {
	font-size: 1.35rem;
	color: $main;
	&:hover {
		color: $dv-blue;
	}
}
.icon-user {
	font-size: 1.6rem;
}
.dropdown {
	font-size: 1rem;
	a {
		font-size: 1rem;
		&:hover { text-decoration: none; }
	}
	p {
		text-align: center;
		i {
			font-size: 1rem;
			color: $main;
		}
	}
}

</style>
