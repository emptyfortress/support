<template lang="pug">
.forums
	.card(v-for="(item, index) in list" @click="goto(item.to)")
		.title {{ item.name }} 
		.info {{ item.info }}
		.article.tooltip(data-tooltip='Публикации')
			i.icon-forum
				span {{ item.article }}
		.followers.tooltip(data-tooltip='Подписчики') 
			i.icon-star
				span {{ item.followers }}
</template>

<script>
export default {
	props: [ 'list', ],

	methods: {
		goto(e) {
			this.$router.push(e)
		}
	},
}
</script>

<style scoped lang="scss">

i { color: $dv-gray3; }
::before {
	font-size: 1.0rem;
}
.forums {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
.card {
	position: relative;
	border: 1px solid #cecece;
	background: #fff;
	width: 304px;
	margin: .5rem;
	border-radius: 5px;
	padding: 1rem;
	cursor: pointer;
	&:hover { 
		/* border: 1px solid $blue; */
		/* background: $dv-gray1; */
		box-shadow: 0 0 4px $blue;
	}
	text-align: center;
}
.title {
	font-size: 1.4rem;
	margin-bottom: 1rem;
	color: $dv-blue;
}
.info {
	font-weight: 300;
	margin-bottom: 2rem;
}
.article {
	position: absolute;
	bottom: .5rem;
	left: .5rem;
}

.followers {
	position: absolute;
	bottom: .5rem;
	right: .5rem;
}
</style>
