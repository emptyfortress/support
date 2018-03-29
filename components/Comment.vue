<template lang="pug">
div
	.level
		.level-left
			.level-item
				User( name="Семен Семенович" ago="24 авг 2017" link="true" )
		.level-right
			.level-item
				Counter/
			.level-item
				.link.tooltip(data-tooltip='Скопировать постоянную ссылку')
					i.icon-link
	.comment Исправлена ошибка, из-за которой у Согласующего при выборе варианта завершения Согласовано на экране появлялось сообщение о невозможности выполнить данную операцию в связи с ограничением прав доступа».

</template>

<script>
import User from '@/components/User';
import Counter from '@/components/Counter';

props: [ 'user', 'text' ]

export default {
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

</style>
