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
				{ id: 1, expand: false, name: 'ЧаВо', to: '/faq', info: "Форум всех вопросов", article: 25, followers: 12 },
				{ id: 2, expand: false, name: 'Идеи и предложения', to: '/faq', info: "Предложения по развитию функционала ДВ",  article: 12, followers: 5 },
				{ id: 3, expand: false, name: 'Администрирование ДВ', to: '/faq', info: "Обсуждение сбоев",  article: 20, followers: 17 },
				{ id: 4, expand: false, name: 'ДВ-информер', to: '/faq', info: "Вопросы по ДВ-информер",  article: 32, followers: 3 },
				{ id: 5, expand: false, name: 'Конструкторы', to: '/faq', info: "Конструирование решений на платформе ДВ",  article: 28, followers: 32 },
				{ id: 6, expand: false, name: 'Форсаж 5', to: '/faq', info: "Производительность ДВ 5",  article: 8, followers: 31 },
				{ id: 7, expand: false, name: 'Демоверсии', to: '/faq', info: "Вопросы Docsvision Live",  article: 15, followers: 8 },
				{ id: 8, expand: false, name: 'Курсы', to: '/faq', info: "Основы программирования в решениях ДВ",  article: 31, followers: 5 },
				{ id: 9, expand: false, name: 'Проекты', to: '/faq', info: "Вопросы создания СЭД",  article: 36, followers: 8 },
				{ id: 10, expand: false, name: 'ЧаВо', to: '/faq', info: "Форум всех вопросов", article: 25, followers: 12 },
				{ id: 11, expand: false, name: 'Идеи и предложения', to: '/faq', info: "Предложения по развитию функционала ДВ",  article: 12, followers: 5 },
				{ id: 12, expand: false, name: 'Администрирование ДВ', to: '/faq', info: "Обсуждение сбоев",  article: 20, followers: 17 },
				{ id: 13, expand: false, name: 'ДВ-информер', to: '/faq', info: "Вопросы по ДВ-информер",  article: 32, followers: 3 },
				{ id: 14, expand: false, name: 'Конструкторы', to: '/faq', info: "Конструирование решений на платформе ДВ",  article: 28, followers: 32 },
				{ id: 15, expand: false, name: 'Форсаж 5', to: '/faq', info: "Производительность ДВ 5",  article: 8, followers: 31 },
				{ id: 16, expand: false, name: 'Демоверсии', to: '/faq', info: "Вопросы Docsvision Live",  article: 15, followers: 8 },
				{ id: 17, expand: false, name: 'Курсы', to: '/faq', info: "Основы программирования в решениях ДВ",  article: 31, followers: 5 },
				{ id: 18, expand: false, name: 'Проекты', to: '/faq', info: "Вопросы создания СЭД",  article: 36, followers: 8 },
			],
		}
	},
	components: {
		BlockList2
	}
}
</script>

