<template lang="pug">
.send(@click="test")
	i.icon-send
</template>

<script>
	export default {
		data() {
			return {
				// stat: 1
			}
		},
		methods: {
			test() {
				this.$store.commit('toggleSend');
				console.log(this.$store.state.send);
			}
		}
		
	}
</script>

