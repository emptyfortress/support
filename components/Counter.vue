<template lang="pug">
.level-item.counter
	i.icon-arrow-up(@click="counter++")
	.num {{counter}}
	i.icon-arrow-down(@click="counter--")
</template>

<script>
	export default {
		data() {
			return {
				counter: 5
			}
		}
	}
</script>

<style scoped lang="scss">

.counter {
	text-align: center;
	width: 2rem;
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	margin-right: 1rem;
	.num {
		margin: .3rem auto;
		text-align: center;
	}
	i {
		font-size: .9rem;
		color: $dv-gray3;
		cursor: pointer;
		&::before {
			display: inline;
		}
		&:hover {
			color: $dv-blue;
		}
		&:active {
			color: $dv-green;
		}
	}
}


</style>
