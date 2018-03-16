<template lang="pug">
	.loud 
		img(src='~assets/img/loud.svg')
		.dot
</template>


<script>
export default {
}
</script>

<style scoped lang="scss">

	.loud {
		cursor: pointer;
		position: relative;
		.dot {
			width: 12px;
			height: 12px;
			border-radius: 10px;
			border: 1px solid #fff;
			background: $red;
			position: absolute;
			top: -5px;
			right: -5px;
		}
	}

</style>
