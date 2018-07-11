<template lang="pug">
div
	.head
	.treeContainer
		roadItem(:listFeatures="item1")
		<!-- roadItem(:listFeatures="version54" v&#45;if="$store.state.currentProduct==1") -->
		<!-- roadItem(:listFeatures="version54" v&#45;if="$store.state.currentProduct==2") -->
		<!-- roadItem(:listFeatures="version54" v&#45;if="$store.state.currentProduct==3") -->
		<!-- roadItem(:listFeatures="version54" v&#45;if="$store.state.currentProduct==4") -->
		<!-- roadItem(:listFeatures="version54" v&#45;if="$store.state.currentProduct==5") -->
	.tail
</template>

<script>
import roadItem from '@/components/lists/roadItem';

export default {
	data() {
		return {
			item1: [
				{ id: 0, rating: 234, content: 'alsdkjals l als' },
				{ id: 1, rating: 234, content: 'alsdkjals l als' },
				{ id: 2, rating: 234, content: 'alsdkjals l als' },
			]
			
		}
	},
	computed: {
	},
	methods: {
	},
	components: {
		roadItem
	}
}
</script>

<style scoped lang="scss">

</style>
