<template lang="pug">
	.big-header
		.topBar
			Ham/
			Logo/
			.right
				Loud/
				div
					Enter/
		.search
			p Нужна помощь?
			.input
				img(src="~assets/img/search.svg")
				input(placeholder="Поиск по всем разделам")

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
@import '~assets/css/colors';

.big-header {
	display: grid;
	grid-template-rows: 30% 70%; 
	align-items: center;
	padding: 0 1rem;
	background: linear-gradient(white, var(--dv-gray2));
	border-bottom: 1px solid var(--dv-gray3);
}

.topBar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* background: red; */
}

.right {
	display: flex;
	align-items: center;
	div {
		margin-left: 14px;
	}
}

.search {
	text-align: center;
	/* align-items: center; */
	p {
		font-size: 32px;
		font-weight: 300;
		color: #000;
		text-transform: uppercase;
	}
	.input {
		width: 780px;
		margin: 0 auto;
		position: relative;
		img {
			position: absolute;
			top: 36px;
			right: 10px;
			opacity: .2;
			cursor: pointer;
		}
	}
	input {
		height: 50px;
		width: 780px;
		margin-top: 20px;
		font-size: 1.3rem;
		padding-left: 1rem;
		border: 1px solid #dedede;
	}
	::placeholder {
		opacity: .5;
	}
}

</style>
