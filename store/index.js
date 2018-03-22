import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			navigation: false,
			sections: [
				{ id:  1, icon: 'condition', to: 'condition', name: 'Условия' },
				{ id:  2, icon: 'map',       to: 'map',          name: 'Путеводитель' },
				{ id:  3, icon: 'download',  to: 'download',          name: 'Загрузить' },
				{ id:  4, icon: 'book',      to: 'book',          name: 'Документация' },
				{ id:  5, icon: 'forum',     to: 'forum',          name: 'Сообщество' },
				{ id:  6, icon: 'send',      to: 'send',          name: 'Отправить запрос' },
				{ id:  7, icon: 'bookmark',  to: 'bookmark',          name: 'Мои запросы' },
				{ id:  8, icon: 'code',      to: 'code',          name: 'Разработчикам' },
				{ id:  9, icon: 'faq',       to: 'faq',          name: 'ЧаВо' },
				{ id: 10, icon: 'mail',      to: 'mail',          name: 'Контакты' },
			]
		},
		mutations: {
			showNav(state) {state.navigation = true},
			hideNav(state) { state.navigation = false },
			toggleNav(state) {state.navigation = !state.navigation}
		}
	})
}

export default createStore
