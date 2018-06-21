<template lang="pug">
.field
	label {{ labelText }}
	.select
		select(v-model="selected" @change="checkSel" :class="selectValid == false ? 'invalid' : 'valid'" )
			option(v-for="( item, index ) in list" v-bind:value="index") {{ item }}

</template>

<script>
	export default {
		props: [ 'labelText', 'list'],
		data() {
			return {
				selectValid: false,
				selected: ""
			}
		},
		methods: {
			checkSel() {
				this.selected == '' ? this.selectValid = false : this.selectValid = true
			}
		}
	}
</script>

<style scoped lang="scss">
@import '~bulma/sass/elements/form';

.field {
	label { display: block; text-transform: uppercase; color: $main; font-size: .8rem; }
	.select {
		width: 100%; 
		select {
			width: 100%;
			&.valid {
				border: 1px solid $dv-green;
				background: #EAFFD6;
			}
		}
	}
}

.error.field select {
	box-shadow: 0 0 3px 2px $red;
}
</style>
