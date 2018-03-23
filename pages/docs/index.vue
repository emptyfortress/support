<template lang="pug">
.container
	h1
		i.icon-book/ Документация
	
	section(v-for="(doc, index) in docs" @click="toggle(index)")
		.flex
			.header {{ doc.name }} 
			i.icon-arrow-down/
		ul.list(:class="{active: doc.expand}")
			li this is cool {{index}}

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
			],
			showList: false
		}
	},
	methods: {
		toggle(index) {
			this.docs[index].expand = !this.docs[index].expand;
		}
	}
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
.list {
	max-height: 0;
	background: #eee;
	overflow: hidden;
	transition: all .3s cubic-bezier(.77,.06,.46,.97);
	&.active {
		max-height: 200px;
	}
}

</style>


