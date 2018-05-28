<template lang="pug">
.myrow.level
	.level-left
		i.icon-user.level-item
		.attr
			.zag {{ title }}
			.fio {{ fio }} &bull; 3 мес. назад
	.level-right
		.level-item.small.tooltip(data-tooltip="Ответов")
			i.icon-bubbles {{ reply }}
		.level-item.small.tooltip(data-tooltip="Проголосовали")
			i.icon-counter {{ counter }}

</template>

<script>
	export default {
		props: ['title', 'fio', 'reply', 'counter']
		
	}
</script>


<style scoped lang="scss">

.myrow {
	border-top: 1px solid #eee;
	/* border-bottom: 1px solid #eee; */
	padding: .5rem 0;
	i.icon-user {
		font-size: 2.3rem;
		color: $dv-gray3;
	}
	&.level {
		margin-bottom: 0;
	}
}
.zag {
	font-size: 1.3rem;
	color: $dv-blue;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
}
.fio {
	font-weight: 300;
	margin-top: .4rem;
	color: #ccc;
}
.small i {
	font-size: 1rem;
	margin-left: 1rem;
}
</style>
