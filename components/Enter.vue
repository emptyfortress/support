<template lang="pug">
	.enter 
		nuxt-link(to="/login" v-if="!$store.state.login")
			i.icon-signin
		.dropdown.is-hoverable.is-right(v-else)
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
