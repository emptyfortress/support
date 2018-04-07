<template lang="pug">
	.big-header
		.topBar
			.ham
			Logo/
			.right
				Loud/
				div
					Enter/
		.center
			p Нужна помощь?
			Search0/
			<!-- .input -->
			<!-- 	<i class="icon&#45;search"></i> -->
			<!-- 	input(placeholder="Поиск по всем разделам") -->

</template>

<script>
	import Logo from '@/components/Logo';
	import Loud from '@/components/Loud';
	import Enter from '@/components/Enter';
	import Search0 from '@/components/Search0';

	export default {
		components: {
			Logo,
			Loud,
			Enter,
			Search0
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
	margin-bottom: 2rem;
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

.center {
	p {
		text-align: center;
		font-size: 2.5rem;
		font-weight: 300;
		color: #000;
		text-transform: uppercase;
	}
}

</style>
