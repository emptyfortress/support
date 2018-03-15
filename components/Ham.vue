<template>
	<div class="navTrigger" v-bind:class="{active : isActive}" v-on:click="isActive = !isActive">
		<i></i><i></i><i></i>
	</div>
</template>

<script>
export default {
	data: function(){
		return {isActive: false}
	},
	// methods: {
	// 	activate() {
	// 		this.isActive = !this.isActive;
	// 	}
	// }

}
</script>
