<template lang="pug">
.container
	h2
		i.icon-forum/ Сообщество
	BlockList2(v-bind:list="forums")/
</template>

<script>
import BlockList2 from '@/components/lists/BlockList2';

export default {
	data() {
		return {
			forums: [
				{ id: 1, expand: false, name: 'ЧаВо', to: '/forum/faq', info: "Форум всех вопросов", article: 25, followers: 12 },
				{ id: 2, expand: false, name: 'Идеи и предложения', to: '/forum/idea', info: "Предложения по развитию функционала ДВ",  article: 12, followers: 5 },
				{ id: 3, expand: false, name: 'Администрирование ДВ', to: '/forum/admin', info: "Обсуждение сбоев",  article: 22, followers: 17 },
				{ id: 4, expand: false, name: 'ДВ-информер', to: '/forum/informer', info: "Вопросы по ДВ-информер",  article: 32, followers: 3 },
				{ id: 5, expand: false, name: 'Конструкторы', to: '/forum/construct', info: "Конструирование решений на платформе ДВ",  article: 28, followers: 32 },
				{ id: 6, expand: false, name: 'Форсаж 5', to: '/forum/efficient', info: "Производительность ДВ 5",  article: 8, followers: 31 },
				{ id: 7, expand: false, name: 'Демоверсии', to: '/forum/live', info: "Вопросы Docsvision Live",  article: 15, followers: 8 },
				{ id: 8, expand: false, name: 'Курсы', to: '/forum/program', info: "Основы программирования в решениях ДВ",  article: 31, followers: 5 },
				{ id: 9, expand: false, name: 'Проекты', to: '/forum/project', info: "Вопросы создания СЭД",  article: 36, followers: 8 },
			],
		}
	},
	components: {
		BlockList2
	}
}
</script>

