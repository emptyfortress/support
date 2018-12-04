<template lang="pug">
.container
	h2
		i.icon-book/ Документация

	BlockList(v-bind:list="documents")/
	br
	a.button(@click="seeAll = !seeAll").is-light 
		span(v-if="!seeAll") Показать все статьи (27)
		span(v-if="seeAll") Показать главное
	br
	br
	hr
	br
	nav(v-if="!seeAll").pagination.is-rounded
		a.pagination-previous Previous
		a.pagination-next Next
		ul.pagination-list
			li
				a.pagination-link.is-current 1
			li
				a.pagination-link 2
			li
				a.pagination-link 3
</template>

<script>
import BlockList from '@/components/lists/BlockList';

export default {
	data() {
		return {
			seeAll: false
		}
	},
	computed: {
		docs () {
			return  this.$store.state.documentation
		},
		docs1 () {
			let one = this.docs
			return one.slice(0, 8)
		},
		documents () {
			return this.seeAll ? this.docs : this.docs1
		}
	},
	components: {
		BlockList
	}
}
</script>

<style scoped lang="scss">
@import '~bulma/sass/components/pagination';

nav a {
	text-decoration: none;
}
.pagination-link {
	&.is-current {
		background: $blue;
		border-color: $blue;
	}
}

</style>
