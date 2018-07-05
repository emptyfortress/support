<template lang="pug">
ul
	transition-group(name="fade1" mode="in-out" tag="li")
		li.branchlist(v-for="item in listFeatures" :key="item.id")
			.section(@click="")
				.left
					p {{ item.date }}
				.center
				.right
					p {{ item.name }}
</template>

<script>
export default {
	props: ['listFeatures'],
	data() {
		return {
			
		}
	},
	computed: {
	},
	methods: {
	}
}
</script>

<style scoped lang="scss">
.branchlist {
	margin-bottom: 1rem;
	&:last-child {
		margin-bottom: 0;
	}
}

.section {
	width: 100%;
	display: flex;
	justify-content: center;
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

.fade1-enter-active, .fade1-leave-active {
  transition: all .5s;
}
.fade1-enter, .fade1-leave-to /* .fade1-leave-active below version 2.1.8 */ {
  opacity: 0;
	height: 0;
	transform: translateY(30px);
}

</style>
