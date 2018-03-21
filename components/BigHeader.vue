<template lang="pug">
	.big-header
		.topBar
			.ham
			Logo/
			.right
				Loud/
				div
					Enter/
		.search
			p Нужна помощь?
			.input
				<i class="icon-search"></i>
				input(placeholder="Поиск по всем разделам")

</template>

<script>
	import Logo from '@/components/Logo';
	import Loud from '@/components/Loud';
	import Enter from '@/components/Enter';

	export default {
		components: {
			Logo,
			Loud,
			Enter,
		}
	}
</script>

<style scoped lang="scss">
.ham {
	width: 80px;
}

.big-header {
	height: 230px;
	display: grid;
	grid-template-rows: 30% 70%; 
	align-items: center;
	padding: 0 1rem;
	background: linear-gradient(white, $dv-gray2);
	border-bottom: 1px solid $dv-gray3;
}

.topBar {
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

.search {
	text-align: center;
	p {
		font-size: 2.5rem;
		font-weight: 300;
		color: #000;
		text-transform: uppercase;
	}
	.input {
		max-width: 780px;
		min-width: 250px;
		height: 50px;
		margin: 0 auto;
		position: relative;
		i {
			position: absolute;
			top: 24px;
			right: 10px;
			cursor: pointer;
			color: $main;
			font-size: 1.2rem;
		}
	}
	input {
		height: 50px;
		width: 100%;
		margin-top: .5rem;
		font-size: 1.3rem;
		padding-left: 1rem;
		border: 1px solid #dedede;
	}
	::placeholder {
		opacity: .5;
	}
}

</style>
