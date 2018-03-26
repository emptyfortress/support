<template lang="pug">
.flex
	.article-list
		h3 Статьи в разделе
	.content
		.flex
			h2 {{$route.params.id}}
			button.button.is-light Подписаться
</template>

<script>
export default {
	transition: {
		name: 'slide-left',
		mode: 'out-in'
	},
		
}
</script>


<style scoped lang="scss">
.flex {
	display: flex;
}
.article-list {
	width: 30%;
	h3 {
		font-size: .9rem;
		font-weight: normal;
	}
}
.content {
	background: #ccc;
	width: 100%;
}
h2 {
	font-weight: 300;
	text-transform: uppercase;
	flex-grow: 1;
}

</style>
