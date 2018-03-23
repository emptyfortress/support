<template lang="pug">
.container
	h1
		i.icon-book/ Документация
	
	section(v-for="n in 10")
		<!-- .action -->
		.header thlaksdjl laksjdl aksjd alskj 
		.arrow 2 dllkkd

</template>

<script>
	import Last from '@/components/lists/Last';
	
export default {
	components: {
		Last
	}
}
</script>

<style scoped lang="scss">

.container {
	margin-top: 2rem;
}

section {
	margin-bottom: 1px;
	padding: 1rem 0;
	border-top: 1px solid #fff;
	cursor: pointer;
	display: flex;
	&:hover {
		background: $dv-gray1;
		border-top: 1px solid $dv-gray2;
	}
	.header {
		flex-grow: 1;
		color: $dv-blue;
		font-size: 1.1rem;
	}

	.arrow {
		width: 10%;
		text-align: right;
		color: $dv-gray3;
		/* background: red; */
	}
}
</style>


