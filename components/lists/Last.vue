<template lang="pug">
	.item-group
		.forum FAQ - форум всех вопросов
		.action
			.header Как прикрепить основной файл к карточке документа во время проведения согласования?
			.time 1 д назад
</template>

<style scoped lang="scss">
	.item-group {
		margin-bottom: 1.5rem;
		.forum {
			color: $dv-green;
			font-size: 1.2rem;
			margin-bottom: .5rem;
			cursor: pointer;
			&:hover {
				text-decoration: underline;
			}
		}
		.action {
			display: flex;
			.header { 
				color: $dv-blue;
				cursor: pointer;
				&:hover {
					text-decoration: underline;
				}
			}
			.time {
				width: 30%;
				text-align: right;
				color: $dv-gray3;
			}
		}
	}

</style>
