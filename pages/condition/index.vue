<template lang="pug">
.container
	h2
		i.icon-condition/ Условия предоставления технической поддержки
	BlockList(v-bind:list="terms")/
	br
	a.button.is-light Показать все статьи (21)

</template>

<script>
import BlockList from '@/components/lists/BlockList';

export default {
	data() {
		return {
			terms: [
				{
					id: 1, expand: false, name: 'Положения об оказании услуг',
					childs: [
						{ id: 1,  to: '', name: 'Поддерживаемые версии' },
						{ id: 2,  to: '', name: 'Экстренная поддержка' },
						{ id: 3,  to: '', name: 'Базовая поддержка' },
						{ id: 4,  to: '', name: 'Расширенная поддержка' },
						{ id: 5,  to: '', name: 'Корпоративная поддержка' },
						{ id: 6,  to: '', name: 'Сроки и виды исправления ошибок' },
						{ id: 7,  to: '', name: 'Таблица определения приоритета ошибок' },
						{ id: 8,  to: '', name: 'Срок регистрации ошибки' },
						{ id: 9,  to: '', name: 'Время реакции на обращение' },
						{ id: 10,  to: '', name: 'Квалификационные требования к специалистам для взаимодействия с службой ТП Доксвижн' },
						{ id: 11, to: '', name: 'Термины и определения' },
					]
				},
				{
					id: 2, expand: false, name: 'Условия предоставления технической поддержки',
					childs: [
						{ id: 1,  to: '', name: 'Условия предоставления технической поддержки' },
						{ id: 2,  to: '', name: 'Экстренная поддержка' },
					]
				},
				{
					id: 3, expand: false, name: 'Правила работы с порталом',
					childs: [
						{ id: 1,  to: '', name: 'Работа с инцидентами на портале' },
						{ id: 2,  to: '', name: 'Регистрация доступа на портал' },
						{ id: 3,  to: '', name: 'Путеводитель по порталу' },
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



