<template lang="pug">
	div
		ul
			li(v-for="article in articles")
				.title {{ article.title }}
				.section {{ article.section }}
</template>

<script>
	export default {
		data() {
			return {
				articles: [
					{ section: 'База известных ошибок', title: '№39792. Карточка согласования. Множественная подпись в карточке согласования' },
					{ section: 'Общая информация', title: 'Внимание! Техподдержка версий согласно лицензии...' },
					{ section: 'Документация', title: 'Руководства по конструктору согласований Docsvision 5.5' },
					{ section: 'Документация', title: 'Конструктор согласований. Несоотвествие' },
					{ section: 'База известных ошибок', title: 'Конструктор согласований. Несоотвествие иконок в задании на согласование' },
					{ section: 'ЧаВо', title: 'Карточка согласования. Как создать' },
				]
			}
		}
	}
</script>

<style scoped lang="scss">
ul {
	list-style: none;
	margin: 1rem 0;
	padding: 0;
	li {
		margin: 0;
		color: $dv-blue;
		padding: .5rem 1rem;
		cursor: pointer;
		font-size: 1.1rem;
		&:hover {
			background: $dv-gray1;
		}
	}
	.section {
		text-transform: uppercase;
		font-family: $small;
		margin-top: .25rem;
		font-size: .8rem;
		color: $dv-green;
	}
}

</style>
