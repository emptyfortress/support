<template lang="pug">
.field
	label {{ labelText }}
	input

</template>

<script>
	export default {
		props: [ 'labelText', 'inputType']
	}
</script>

<style scoped lang="scss">
.field {
	label { display: block; text-transform: uppercase; color: $main; font-size: .8rem; }
	input { width: 100%; height: 2.3rem; font-size: 1.3rem;}
}
</style>
