<template lang="pug">
#top
	h1 {{ articles[ ($route.params.id - 1) ].title }}
	.level
		.level-item
			Counter/
			.level-item.subs( @click="show" )
				i.icon-star(v-bind:class='{active: subscribe}' title="Подписка")
				span(v-show="subscribe") Подписка
		.level-item
			User( :name="articles[ ($route.params.id - 1) ].name" ago="Обновлено 2 мес. назад" )
</template>

<script>
import User from '@/components/User';
import Counter from '@/components/Counter';
import Comment from '@/components/Comment';
import Addcomment from '@/components/Addcomment';

export default {
	transition(to, from) {
    if (!from) return 'slide-left'
    return +to.params.id > +from.params.id ? 'slide-right' : 'slide-left'
  },
	props: [ 'title', 'user' ],
	data() {
		return {
			subscribe: false,
			articles: [
				{ id: 1, to: '/map/1', name: 'Ольга Трачук', title: 'Регистрация и доступ на портал' },
				{ id: 2, to: '/map/2', name: 'Ольга Трачук', title: 'Путеводитель по порталу' },
				{ id: 3, to: '/map/3', name: 'Ольга Трачук', title: 'Работа с инцидентами на портале' },
			],

			
		}
	},
	methods: {
		show() {
			this.subscribe = !this.subscribe
		}
	},
	components: {
		User,
		Counter,
		Comment,
		Addcomment
	}
}
</script>
