<template lang="pug">
	.zapros
		div Нашли опечатку или неточность? Выделите ее и нажмите
			span Ctrl
			= '+'
			span Enter
		
</template>

<style scoped lang="scss">

.zapros {
	height: 60px;
	background: $dv-gray1;
	width: 100%;
	border-top: 1px solid $dv-gray2;
	border-bottom: 1px solid $dv-gray2;
	padding: 0 1rem;
	font-size: .95rem;
	div { 
		color: $main;
		line-height: 64px;
		span {
			display: inline-block;
			margin: 0 .3rem;
			color: $green;
			padding: 0 .5rem;
			border: 1px solid $green;
			border-radius: 4px;
			line-height: 20px;
		}
	}

}

</style>
