<template lang="pug">
	.signin
		input(placeholder="E-mail")
		.buttons
			.button.is-primary Вход
			.button.is-light Регистрация
</template>

<style scoped lang="scss">
.signin {
	display: flex;
	max-width: 480px;
	margin: 2rem auto;
	input {
		font-size: 1rem;
		border: 1px solid $dv-gray2;
		flex-grow: 1;
		margin-right: .5rem;
		padding-left: 1rem;
	}
}
</style>
