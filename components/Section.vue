<template>
	<div class="item">
		<img :src="icon + '.svg'" alt="" >
		<p>{{name}}</p>
	</div>
</template>


<script>

export default {
	props: ['name', 'icon']
}

</script>

<style scoped lang="scss">

.item {
	display: flex;
	flex-flow: column;
	width: 156px;
	height: 130px;
	background: #fff;
	text-align: center;
	justify-content: center;
	font-size: 1rem;
	cursor: pointer;
	&:hover {
		/* background: $dv-gray1; */
		border: 1px solid $dv-gray2;
		/* img { opacity: .4; } */
	}
	p {
		margin-top: 0.7rem;
	}
	img { opacity: .2; }
}


</style>
