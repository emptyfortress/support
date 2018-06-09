<template lang="pug">
.field
	label {{ labelText }}
	.select
		select
			option(v-for="item in list") {{ item }}

</template>

<script>
	export default {
		props: [ 'labelText', 'list']
	}
</script>

<style scoped lang="scss">
@import '~bulma/sass/elements/form';

.field {
	label { display: block; text-transform: uppercase; color: $main; font-size: .8rem; }
	.select { width: 100%; select { width: 100% } }
}

.error.field input, .error.field select {
  border: 1px solid red;
  background: #FDD;
}
</style>
