<template lang="pug">
.user
	i.icon-user/
	.fio
		nuxt-link(to="/") {{ name }}
		br/
		span {{ ago }}
</template>

<script>
	
	export default {
		props: ['name', 'ago'],
	}
</script>

<style scoped lang="scss">

.user {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	span {
		font-size: .95rem;
		font-family: $small;
		color: #ccc;
	}

	i.icon-user {
		font-size: 2.5rem;
		color: $dv-gray2;
		vertical-align: middle;
	}
}

</style>
