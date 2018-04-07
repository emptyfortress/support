<template lang="pug">
	.signin
		input(placeholder="E-mail")
		.buttons
			nuxt-link.button.is-primary(to="login") Вход
			.button.is-light Регистрация
</template>

<style scoped lang="scss">
.signin {
	display: flex;
	max-width: 480px;
	margin: 0 auto;
	margin-bottom: 2rem;
	input {
		font-size: 1rem;
		border: 1px solid $dv-gray2;
		flex-grow: 1;
		margin-right: .5rem;
		padding-left: 1rem;
	}
}
</style>
