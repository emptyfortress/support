<template lang="pug">
div
	section(v-for="(item, index) in list" )
		.flex
			.header(@click="goto(item.to)") {{ item.name }} 
			i.icon-info(:class="{active: item.expand}" @click="toggle(index)")/
		.list(:class="{active: item.expand}")
			i(:class="item.icon")
			p {{ item.info }}
</template>

<script>
export default {
	props: [ 'list', ],

	data() {
		return {
			// items: [
			// 	this.list
			// ]
		}
	},
	methods: {
		toggle(index) {
			this.list[index].expand = !this.list[index].expand;
		},
		goto(e) {
			this.$router.push(e)
		}
	},
}
</script>

<style scoped lang="scss">
i { color: $blue; }
::before {
	font-size: 1.5rem;
}
.list {
	margin-left: 0;
	/* padding-top: 1rem; */
	display: flex;
	align-items: center;
	i { color: $main; }
	 ::before {
			font-size: 4rem;
		}
	p {
	}
}
</style>
