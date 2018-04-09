<template lang="pug">
	.search
		div
			.icon
				<i class="icon-close" v-if="!showPop" @click="clearSearch"></i>
				<i class="icon-search" v-else></i>
			<!-- input#search(v&#45;model="search" placeholder="Поиск" @focus="complete = true" @blur="complete = false") -->
			input#search(v-model="search" placeholder="Поиск" @focus="focuss" @blur="blurr")
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
			},
			focuss() {
				this.complete = true;
				document.querySelector('.icon').classList.add('focused');
			},
			blurr() {
				this.complete = false;
				this.search.length == 0 ?  ( document.querySelector('.icon').classList.remove('focused') ) : ( document.querySelector('.icon').classList.add('focused') );
			}
	}
}
</script>

<style scoped lang="scss">
.search {
	height: 42px;
	border-bottom: 1px solid $dv-gray2;
	div {
		position: relative;
		max-width: 960px;
		margin: 0 auto;
		.icon {
			position: absolute;
			top: 10px;
			right: 53%;
			font-size: 1.2rem;
			color: $main;
			transition: all .3s ease;
			&.focused {
				right: 0;
				cursor: pointer;
			}
			i {
				position: absolute;
				top: 0;
				right: 0;
			}
		}
		input {
			width: 100%;
			height: 40px;
			display: block;
			border: none;
			outline: none;
			font-size: 1.5rem;
		}
		::placeholder {
			color: $dv-gray3;
			font-size: 1.1rem;
			padding-left: 49%;
			transition: all .3s ease;
		}
		:focus::placeholder {
			padding-left: 0;
		}
		.autocomplete {
			width: 100%;
			background: #fff;
			z-index: 5;
			/* min-height: 100px; */
			border: 1px solid #eee;
			box-shadow: 0 2px 3px #ccc;
			position: relative;
			top: 0px;
			border-radius: 0 0 5px 5px;
		}
	}
	.hint {
		color: $dv-green;
		font-size: 1.1rem;
		margin: 1rem;
	}
}



</style>
