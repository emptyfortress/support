<template lang="pug">
div
	.level.small
		.level-left
			.level-item
				User( :name="user" ago="24 авг 2017" )
		.level-right
			.level-item
				Counter/
			.level-item
				.link.tooltip(data-tooltip='Скопировать постоянную ссылку')
					i.icon-link
	.comment {{ text }}

</template>

<script>
import User from '@/components/User';
import Counter from '@/components/Counter';


export default {
	props: [ 'user', 'text' ],
	components: {
		User,
		Counter,
	}
	
}

</script>

<style scoped lang="scss">

.comment {
	font-size: 1rem;
	line-height: 150%;
	padding-bottom: 1.5rem;
	border-bottom: 1px dotted #ccc;
}
.icon-link {
	color: $dv-gray3;
	cursor: pointer;
	&:hover {
		color: $dv-blue;
	}
}
.level.small {
	/* margin-bottom: 1rem; */
}

</style>
