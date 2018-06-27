<template lang="pug">
.section(@click="goTo(to)")
	.left
		p {{ date }}
	.center
	.right
		p {{ name }}
</template>

<script>
	export default {
		props: [ 'date', 'name', 'to' ],
		methods: {
			goTo(e) {
				this.$router.push(e)
			}
		}
	}
</script>

<style scoped lang="scss">

.section {
	width: 100%;
	display: flex;
	justify-content: center;
	/* margin: 2rem; */
	div {

	}
	.center {
		width: 15px;
		height: 15px;
		border-radius: 15px;
		border: 3px solid #ccc;
		background: #fff;
		transition: all .2s ease;
		cursor: pointer;
		&:hover {
			width: 25px;
			height: 25px;
			border-color: $blue;
		}
	}
	.left, .right {
		/* width: calc(100% - 40px); */
		width: 30%;
		background: #eee;
	}
	.left {
		text-align: right; 
		margin-right: 2rem;
	}
	.right {
		text-align: left; 
		margin-left: 2rem;
	}
}

</style>
