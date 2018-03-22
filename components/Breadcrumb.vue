<template lang="pug">
	.container
		.breadcrumb
			ul
				li.is-active <nuxt-link to="/">back</nuxt-link>
				li <nuxt-link to="/">back</nuxt-link>

</template>

<style scoped lang="scss">
@import '~bulma/sass/components/breadcrumb';

.container {
	margin: 0 auto;
	max-width: 780px;
}
.breadcrumb {
	margin-left: 0;
	li a {
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
	li.is-active a {
		color: $dv-gray3;
	}
}


</style>

