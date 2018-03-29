<template lang="pug">
.level-item.counter
	i.icon-up(@click="counter++")
	.num {{counter}}
	i.icon-down(@click="counter--")
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
		font-weight: 900;
		margin: .3rem auto;
		text-align: center;
	}
	i {
		font-size: .9rem;
		color: $dv-gray2;
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
