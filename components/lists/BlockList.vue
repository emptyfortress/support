<template lang="pug">
div
	section(v-for="(item, index) in list" @click="toggle(index)")
		.flex
			.header {{ item.name }} 
			i.icon-arrow-down(:class="{active: item.expand}")/
		ul.list(:class="{active: item.expand}")
			li(v-for="item in item.childs")
				.under(v-if="item.underconstruction")
					img(src='~assets/img/vlc.svg')/ Раздел в разработке
				nuxt-link(:to='item.to' v-else ) {{item.name}}
</template>

<script>
export default {
	props: [ 'list', 'classList' ],

	data() {
		return {
			items: [
				this.list
			]
		}
	},
	methods: {
		toggle(index) {
			this.list[index].expand = !this.list[index].expand;
		}
	},
}
</script>
