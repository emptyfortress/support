<template lang="pug">
.sign
	.card
		.logo
			img(src="~assets/img/logo.svg")
		h2 Привет, Ольга!
		.mail(contenteditable="true")
			i.icon-user TrachukO@docsvision.com
		form
			input(type="password" placeholder="Пароль")
			br
			br
			br
			.level
				.level-left
					nuxt-link(to="#") Напомнить пароль
				.level-right
					.level-item.button.is-light(@click="back") Назад
					.level-item.button.is-primary(@click="enter") Вход
		.alien
			label
				input(type="checkbox")
				span Чужой компьютер
		nuxt-link(to='' class="registration") Зарегистрироваться
</label>


</template>

<script>
	
	export default {
		layout: 'sign',
		transition: {
			name: 'move',
			mode: 'out-in'
		},
		data() {
			return {
				
			}
		},
		methods: {
			back() {
				this.$router.push('/');
			},
			enter() {
				this.$store.commit( 'signIn' );
				this.$router.push('/');
			}
		}
	}
</script>

<style scoped lang="scss">

.sign {
	width: 100%;
	height: 100vh;
	background-color: #dedede;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23f2f2f2' stroke-width='3.1' %3E%3Cpath d='M-500%2C75c0%2C0%2C125-30%2C250-30S0%2C75%2C0%2C75s125%2C30%2C250%2C30s250-30%2C250-30s125-30%2C250-30s250%2C30%2C250%2C30s125%2C30%2C250%2C30s250-30%2C250-30'/%3E%3Cpath d='M-500%2C45c0%2C0%2C125-30%2C250-30S0%2C45%2C0%2C45s125%2C30%2C250%2C30s250-30%2C250-30s125-30%2C250-30s250%2C30%2C250%2C30s125%2C30%2C250%2C30s250-30%2C250-30'/%3E%3Cpath d='M-500%2C105c0%2C0%2C125-30%2C250-30S0%2C105%2C0%2C105s125%2C30%2C250%2C30s250-30%2C250-30s125-30%2C250-30s250%2C30%2C250%2C30s125%2C30%2C250%2C30s250-30%2C250-30'/%3E%3Cpath d='M-500%2C15c0%2C0%2C125-30%2C250-30S0%2C15%2C0%2C15s125%2C30%2C250%2C30s250-30%2C250-30s125-30%2C250-30s250%2C30%2C250%2C30s125%2C30%2C250%2C30s250-30%2C250-30'/%3E%3Cpath d='M-500-15c0%2C0%2C125-30%2C250-30S0-15%2C0-15s125%2C30%2C250%2C30s250-30%2C250-30s125-30%2C250-30s250%2C30%2C250%2C30s125%2C30%2C250%2C30s250-30%2C250-30'/%3E%3Cpath d='M-500%2C135c0%2C0%2C125-30%2C250-30S0%2C135%2C0%2C135s125%2C30%2C250%2C30s250-30%2C250-30s125-30%2C250-30s250%2C30%2C250%2C30s125%2C30%2C250%2C30s250-30%2C250-30'/%3E%3C/g%3E%3C/svg%3E");
	display: flex;
	justify-content: center;
	align-items: center;
}

.card {
	margin-top: -3rem;
	box-sizing: border-box;
	width: 450px;
	background: #fff;
	padding: 2rem;
	padding-top: 3rem;
	padding-top: 3rem;
	position: relative;
	box-shadow: 0 1px 3px #999;
	h2 {
		text-transform: none;
		margin-bottom: .5rem;
	}
	.icon-user {
		color: $main;
		font-size: 1rem;
	}
	.logo {
		position: absolute;
		top: -3rem;
		left: 50%;
		background: #fff;
		padding: 1rem;
		border-radius: 4rem;
		margin-left: -3rem;
		img {
			width: 4rem;
		}
	}
	form {
		margin-top: 2rem;
		input {
			width: 100%;
			height: 2.5rem;
			border: none;
			border-bottom: 1px dotted #333;
			outline: none;
			font-size: 1.3rem;
		}
		::placeholder {
			color: #ccc;
		}
	}
	a:hover {
		text-decoration: none;
	}
	.alien {
		position: absolute;
		bottom: -1.7rem;
		left: 0;
		input {
			margin-right: 1rem;
		}
	}
	.registration {
		position: absolute;
		bottom: -1.7rem;
		right: 0;
		&:hover {
			text-decoration: underline;
		}
	}
}

</style>
