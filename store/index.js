import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			navigation: false,
			notifications: false,
			login: false,
			send: false,
			add: false,
			allValid: false,

			sections: [

				{ id: 1,  icon: 'bookmark',  firstpage: false,  innerpage: true, to: '/myrequest/1',  name: 'Мои запросы' },
				{ id: 2,  icon: 'send',      firstpage: false,  innerpage: true, to: '/',      name: 'Отправить запрос', click: 'this.sendOn = true' },
				{ id: 3,  icon: 'forum',     firstpage: false,  innerpage: true, to: '/forum',     name: 'Сообщество' },
				{ id: 4,  icon: 'code',      firstpage: false,  innerpage: true, to: '/code',      name: 'Разработчикам' },
				{ id: 5,  icon: 'download',  firstpage: false,  innerpage: true, to: '/download',  name: 'Загрузить' },
				{ id: 6,  icon: 'condition', firstpage: true,  innerpage: false, to: '/condition', name: 'Условия' },
				{ id: 7,  icon: 'compass',   firstpage: true,  innerpage: false, to: '/map',       name: 'Путеводитель' },
				{ id: 8,  icon: 'book',      firstpage: true,  innerpage: true, to: '/docs',      name: 'Документация' },
				{ id: 9,  icon: 'faq',       firstpage: true,  innerpage: false, to: '/forum/faq',       name: 'ЧаВо' },
				{ id: 10, icon: 'mail',      firstpage: true,  innerpage: false, to: '/',      name: 'Контакты' },
				{ id: 11, icon: 'map',      firstpage: true,  innerpage: false, to: '/roadmap',      name: 'Roadmap' },

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
			docs1: [
				{ id: 1, to: '', expand: false, name: 'Платформа' },
				{ id: 2, to: '', expand: false, name: 'Web-client' },
				{ id: 3, to: '', expand: false, name: 'Пульс' },
				{ id: 4, to: '', expand: false, name: 'Накопительные обновления' },
				{ id: 5, to: '', expand: false, name: 'Договоры' },
				{ id: 6, to: '', expand: false, name: 'Почтовый клиент' },
				{ id: 7, to: '', expand: false, name: 'Делопроизводство' },
				{ id: 8, to: '', expand: false, name: 'Управление документами' },
			],

			platforma: [
				{ id: 1, to: '/docs/platform/1', title: 'Установка и администрирование Docsvision 5.2.2450' },
				{ id: 2, to: '/docs/platform/2', title: 'Конструктор согласований Docsvision 5.4.2642' },
				{ id: 3, to: '/docs/platform/3', title: 'Установка и администрирование Docsvision 5.3.2559' },
				{ id: 4, to: '/docs/platform/4', title: 'Установка и администрирование Docsvision 5.2.2542' },
			],

			map: [
				{ id: 1, to: '/map/1', title: 'Регистрация и доступ на портал' },
				{ id: 2, to: '/map/2', title: 'Путеводитель по порталу' },
				{ id: 3, to: '/map/3', title: 'Работа с инциндентами на портале' },
			]

		},
		mutations: {
			showNav(state) {state.navigation = true},
			hideNav(state) { state.navigation = false },
			toggleNav(state) {state.navigation = !state.navigation},
			toggleNotifications(state) {state.notifications = !state.notifications},
			closeNotifications(state) {state.notifications = false},
			signIn(state) { state.login = true },
			signOut(state) { state.login = false },
			toggleSend(state) { state.send = !state.send },
			showSend(state) { state.send = true },
			hideSend(state) { state.send = false },
			showAdd(state) { state.add = true },
			hideAdd(state) {state.add = false},
			toggleAdd(state) {state.add = !state.add},
			showOne(state) {state.allValid = true},
			hideOne(state) {state.allValid = false},
		}
	})
}


export default createStore
