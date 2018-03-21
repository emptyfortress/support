<template lang="pug">
	.search
		div
			<i class="icon-search"></i>
			input(v-model="search" placeholder="Поиск" @focus="complete = true" @blur="complete = false")
			.autocomplete(v-show="complete")
				div(v-show="showPop")
					Autocomplete/
					<!-- h3 Популярные статьи -->
					<!-- ul -->
					<!-- 	li(v&#45;for="article in articles") {{ article }} -->
</template>

<script>
import Autocomplete from '@/components/Autocomplete';

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
			}
		},
		components: {
			Autocomplete
		}
	}
</script>

<style scoped lang="scss">
.search {
	height: 42px;
	border-bottom: 1px solid $dv-gray2;
	div {
		position: relative;
		max-width: 780px;
		margin: 0 auto;
		i {
			position: absolute;
			top: 10px;
			right: .5rem;
			font-size: 1.2rem;
			color: $main;
		}
		input {
			width: 100%;
			height: 40px;
			display: block;
			border: none;
			outline: none;
			font-size: 1.5rem;
			padding-left: 1rem;
		}
		::placeholder {
			color: $dv-gray3;
			font-size: 1.1rem;
		}
		.autocomplete {
			width: 100%;
			min-height: 100px;
			border: 1px solid #eee;
			box-shadow: 0 2px 3px #ccc;
			position: relative;
			top: 0px;
			border-radius: 0 0 5px 5px;
		}
	}
}

</style>
