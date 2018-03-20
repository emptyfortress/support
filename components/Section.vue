<template>
	<nuxt-link to="/about">
		<div class="item">
			<i :class="'icon-' + icon"></i>
			<p>{{name}}</p>
		</div>
	</nuxt-link>
</template>


<script>

export default {
	props: ['name', 'icon']
}

</script>

<style scoped lang="scss">
a {
	text-decoration: none;
	color: $black;
}

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
		border: 1px solid $dv-gray2;
	}
	p {
		margin-top: 0.7rem;
	}
	i { 
		color: #A6A6A6;
		font-size: 2rem;
	}
}


</style>
