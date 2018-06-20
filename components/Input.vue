<template lang="pug">
.field(:class="{ 'form-group--error': $v.name.$error }")
	label.form__label {{ labelText }}
	<!-- input.form__input( v&#45;model.trim='$v.name.$model' @input="delayTouch($v.name)" ) -->
	input.form__input.invalid( v-model.trim='$v.name.$model' @input="delayTouch($v.name)" )
	.error(v-if="!$v.name.required && $v.name.$error") Пожалуйста, заполните это поле
	.error(v-if="!$v.name.minLength && $v.name.$error")
		| {{ labelText }} должно содеражать не меньше {{$v.name.$params.minLength.min}} букв.

</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators';
const touchMap = new WeakMap();

	export default {
		props: [ 'labelText', 'imodel' ],
		data() {
			return {
				name:  this.imodel,
			}
		},
		computed: {
			inputt() {
				let inputt = document.querySelectorAll('.form__input');
				return inputt;
			}
		},
		validations: {
			name: {
				required,
				minLength: minLength(4)
			},
		},
		methods: {
			delayTouch($v) {
				$v.$reset()
				if (touchMap.has($v)) {
					clearTimeout(touchMap.get($v))
				}
				touchMap.set($v, setTimeout($v.$touch, 1000))
				if ($v.$invalid) {
					this.inputt.forEach(function(item, index) {
						item.classList.add('invalid');
					}) 
				} else {
					this.inputt.forEach(function(item, index) {
						item.classList.remove('invalid');
					}) 
				}
				if (this.name == 'next') {
					this.$store.commit('showOne');
				}
			},
		}
	}
</script>

<style scoped lang="scss">
.field {
	label { display: block; text-transform: uppercase; color: $main; font-size: .8rem; }
	input { width: 100%; height: 2.3rem; font-size: 1.3rem; outline: none; border: 1px solid #fff;}
}
.field .error {
	color: $red;
	font-family: $small;
	font-size: .8rem;
}
.form-group--error {
	-webkit-animation: shake-horizontal 0.6s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
  animation: shake-horizontal 0.6s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
	.form__label {color: $red;}
	input {
		border: 1px solid $red;
		outline: none;
	}

}

.error.field input {
	border: none;
}



</style>
