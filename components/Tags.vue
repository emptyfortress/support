<template lang="pug">
.field
	label {{ label }}
	.tags
		.tag.is-rounded.is-medium(v-for="item in list" :key="item.id"
										:class="activeTag == item.id ? 'is-info' : '' || activeTag=='' ? 'invalid' : ''"
										@click="setTag(item.id)"
										) {{ item.name }}
</template>

<script>
	export default {
		props: [ 'list', 'label' ],
		data() {
			return {
				activeTag: '',
			}
		},
		methods: {
			setTag(e) {
				if (this.activeTag == '') {
					return this.activeTag = e
				} else if (this.activeTag == e) {
						return this.activeTag = '';
				} else {
						return this.activeTag = e
				}  
			}
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
	border: none;
	box-shadow: 0 0 3px 2px $red;
}
</style>
