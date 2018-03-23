<template lang="pug">
.container
	h1
		i.icon-book/ Документация
	
	section(v-for="(doc, index) in docs" @click="doc.expand = !doc.expand")
		.flex
			.header {{ doc.name }}
			i.icon-arrow-down/
		transition(name='fade')
			ul.list(v-if="doc.expand")
				li this is cool

</template>

<script>
	
export default {
	data() {
		return {
			docs: [
				{ id: 1, to: '', expand: false, name: 'Платформа' },
				{ id: 2, to: '', expand: false, name: 'Web-client' },
				{ id: 3, to: '', expand: false, name: 'Пульс' },
				{ id: 4, to: '', expand: false, name: 'Накопительные обновления' },
				{ id: 5, to: '', expand: false, name: 'Приложение «Договоры»' },
				{ id: 6, to: '', expand: false, name: 'Приложение «Почтовый клиент»' },
				{ id: 7, to: '', expand: false, name: 'Приложение «Делопроизводство»' },
				{ id: 8, to: '', expand: false, name: 'Приложение «Управление документами»' },
			]
		}
	},
}
</script>

<style scoped lang="scss">

.container {
	margin-top: 4rem;
}

.flex {
	margin-bottom: 1px;
	padding: 1rem .5rem;
	border-top: 1px solid #fff;
	cursor: pointer;
	display: flex;
	&:hover {
		background: $dv-gray1;
		border-top: 1px dotted $dv-gray2;
	}
	.header {
		flex-grow: 1;
		color: $dv-blue;
		font-size: 1.4rem;
	}

	.icon-arrow-down {
		width: 10%;
		text-align: right;
		font-size: .7rem;
		line-height: 1.5rem;
		margin-right: .5rem;
	}
}
</style>


