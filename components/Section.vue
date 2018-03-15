<template lang="pug">
	.item
		p {{ name }}
		<!-- p hello -->
</template>

<script>

export default {
	props: ['name', 'url']
}

</script>

<style scoped lang="scss">
@import '~assets/css/colors';

.item {
	width: 156px;
	height: 130px;
	background: #fff;
	border: 1px solid #333;
}


</style>
