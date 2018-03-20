<template lang="pug">
	.loud 
		<i class="icon-loud"></i>
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
		i {
			font-size: 1.3rem;
			color: $main;
		}
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
		&:hover {
			i {
				color: $dv-blue;
			}
		}
	}

</style>
