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

.error.field input {
  border: 1px solid red;
  background: #FDD;
}
.test.field input {
	box-shadow: 0 0 4px #f00;
	border: 1px solid red;
}
</style>
