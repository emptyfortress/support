import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			navigation: false,
			notifications: false,
			sections: [
				{ id:  1, icon: 'condition', to: '/condition', name: 'Условия' },
				{ id:  2, icon: 'map',       to: '/map',       name: 'Путеводитель' },
				{ id:  3, icon: 'download',  to: '/download',  name: 'Загрузить' },
				{ id:  4, icon: 'book',      to: '/docs',      name: 'Документация' },
				{ id:  5, icon: 'forum',     to: '/forum',     name: 'Сообщество' },
				{ id:  6, icon: 'send',      to: '/send',      name: 'Отправить запрос' },
				{ id:  7, icon: 'bookmark',  to: '/bookmark',  name: 'Мои запросы' },
				{ id:  8, icon: 'code',      to: '/code',      name: 'Разработчикам' },
				{ id:  9, icon: 'faq',       to: '/faq',       name: 'ЧаВо' },
				{ id: 10, icon: 'mail',      to: '/mail',      name: 'Контакты' },
			],

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

			platforma: [
				{ id: 1, to: '/docs/platform/1', title: 'Установка и администрирование Docsvision 5.2.2450' },
				{ id: 2, to: '/docs/platform/2', title: 'Конструктор согласований Docsvision 5.4.2642' },
				{ id: 3, to: '/docs/platform/3', title: 'Установка и администрирование Docsvision 5.3.2559' },
				{ id: 4, to: '/docs/platform/4', title: 'Установка и администрирование Docsvision 5.2.2542' },
			]


		},
		mutations: {
			showNav(state) {state.navigation = true},
			hideNav(state) { state.navigation = false },
			toggleNav(state) {state.navigation = !state.navigation},
			toggleNotifications(state) {state.notifications = !state.notifications},
		}
	})
}


export default createStore
