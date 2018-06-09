<template lang="pug">
.field
	label {{ label }}
	.tags
		.tag.is-rounded.is-medium(v-for="item in list" :key="item.id"
										:class="activeTag == item.id ? 'is-info' : ''"
										@click="setTag(item.id)"
										) {{ item.name }}
</template>

<script>
	export default {
		props: [ 'list', 'activeTag', 'label' ],
		methods: {
			setTag(e) {
				if (this.activeTag == e) {
					return this.activeTag = ''
				} else {
					return this.activeTag = e
				}
			},
		}
	}
</script>

<style scoped lang="scss">
@import '~bulma/sass/elements/tag';
.field {
	label { display: block; text-transform: uppercase; color: $main; font-size: .8rem; }
}
.tags { margin-top: .3rem; }

.error.field .tag {
  border: 1px solid red;
  background: #FDD;
}
</style>
