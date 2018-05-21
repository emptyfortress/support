<template lang="pug">
	div
		<i class="icon-close" v-if="!showPop" @click="clearSearch"></i>
		<i class="icon-search" v-else></i>
		input#search(v-model="search" placeholder="Поиск по всем разделам" @focus="complete = true" @blur="complete = false")
		.autocomplete(v-show="complete")
			div(v-show="showPop")
				Autocomplete/
			div(v-if="hint")
				.hint Enter для поиска, Esc для отмены
			div(v-if="hint1")
				Hint/
</template>

<script>
	import Autocomplete from '@/components/Autocomplete';
	import Hint from '@/components/Hint';
	
	export default {
		data() {
			return {
				complete: false,
				search: '',
			}
		},
		computed: {
			showPop() {
				return this.search.length == 0 ? true : false
			},
			hint() {
				return this.search.length > 2 && this.search.length <=4 ? true : false
			},
			hint1() {
				return this.search.length > 4 ? true : false
			},
		},
		components: {
			Autocomplete,
			Hint
		},
		methods: {
			clearSearch() {
				this.search = '';
				document.querySelector('#search').focus();
			}

		}
	}
</script>

<style scoped lang="scss">
div {
	position: relative;
	max-width: 780px;
	margin: 0 auto;
	i {
		position: absolute;
		top: 14px;
		right: .5rem;
		font-size: 1.2rem;
		color: $main;
		cursor: pointer;
	}
	input {
		width: 100%;
		height: 50px;
		display: block;
		border: none;
		outline: none;
		font-size: 1.5rem;
		padding-left: 1rem;
		margin-top: 1rem;
	}
	::placeholder {
		color: $dv-gray3;
		font-size: 1.4rem;
	}
	.autocomplete {
		width: 100%;
		/* min-height: 100px; */
		background: #fff;
		border: 1px solid #eee;
		box-shadow: 0 2px 9px #666;
		position: absolute;
		top: 50px;
		border-radius: 0 0 5px 5px;
		z-index: 10;
	}
	.hint {
		color: $dv-green;
		font-size: 1.1rem;
		margin: 1rem;
	}
}

</style>
