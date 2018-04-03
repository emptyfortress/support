<template lang="pug">
.container
	h2
		i.icon-download/ Загрузить
	BlockList(v-bind:list="downloads")/
	br
	a.button.is-light Показать все статьи (42)
	

</template>

<script>
	import BlockList from '@/components/lists/BlockList';
	
	export default {
		data() {
			return {
				downloads: [
					{
						id: 1, expand: false, name: 'Платформа',
						childs: [
							{ id: 1, to: '', name: 'Docsvision 5.4.2642' },
							{ id: 2, to: '', name: 'Docsvision 5.3.2559' },
							{ id: 3, to: '', name: 'Docsvision 5.3.2559 Украинская локализация' },
							{ id: 4, to: '', name: 'Совместимость доп.модулей и приложений с Docsvision 5.4.2642' },
							{ id: 5, to: '', name: 'Совместимость доп.модулей и приложений с Docsvision 5.3.2559' },
						]
					},
					{
						id: 2, expand: false, name: 'Web-client',
						childs: [
							{ id: 1, to: '', name: 'Версия 10' },
							{ id: 2, to: '', name: 'Версия 9' },
							{ id: 3, to: '', name: 'Версия 8' },
							{ id: 4, to: '', name: 'Версия 7' },
						]
					},
					{
						id: 3, expand: false, name: 'Пульс',
						childs: [
							{ id: 1, underconstruction: true,},
						]
					},
					{
						id: 4, expand: false, name: 'Доп.модули и приложения',
						childs: [
							{ id: 1, underconstruction: true,},
						]
					},
					{
						id: 5, expand: false, name: 'Полезные утилиты',
						childs: [
							{ id: 1, underconstruction: true,},
						]
					},
				]
			}
		},
		components: {
			BlockList
		}
	}
</script>

