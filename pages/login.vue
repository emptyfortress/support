<template lang="pug">
.card
	.logo
		img(src="~assets/img/logo.svg")
	<!-- .level&#45;left -->
	h2 Привет, Ольга!
	.mail(contenteditable="true")
		i.icon-user TrachukO@docsvision.com
	form
		input(placeholder="Пароль")
		br
		br
		br
		.level
			.level-left
				nuxt-link(to="/") Напомнить пароль
			.level-right
				.level-item.button.is-light(@click="back") Назад
				.level-item.button.is-primary Вход
	.alien
		label
			input(type="checkbox")
			span Чужой компьютер
</label>


</template>

<script>
	
	export default {
		layout: 'sign',
		data() {
			return {
				
			}
		},
		methods: {
			back() {
				this.$router.push('/');
			}
		}
	}
</script>

<style scoped lang="scss">

.card {
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
}

</style>
