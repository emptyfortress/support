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
			currentProduct: 0,
			currentItem: 0,
			timelineSelection: 0,

			sections: [

				{ id: 6,  icon: 'condition',firstpage: true,  logged: true,  innerpage: false, to: '/condition', name: 'Условия' },
				{ id: 7,  icon: 'compass',  firstpage: true,  logged: true,  innerpage: false, to: '/map',       name: 'Путеводитель' },
				{ id: 8,  icon: 'book',     firstpage: true,  logged: true,  innerpage: true, to: '/docs',      name: 'Документация' },
				{ id: 9,  icon: 'faq',      firstpage: true,  logged: true,  innerpage: false, to: '/forum/faq',       name: 'ЧаВо' },
				{ id: 11, icon: 'map',      firstpage: false, logged: true,  innerpage: true, to: '/roadmap',      name: 'Roadmap' },
				{ id: 1,  icon: 'bookmark', firstpage: false, logged: true,  innerpage: true, to: '/myrequest/1',  name: 'Мои запросы' },
				{ id: 2,  icon: 'send',     firstpage: false, logged: true,  innerpage: false, to: '/',      name: 'Отправить запрос', click: 'this.sendOn = true' },
				{ id: 3,  icon: 'forum',    firstpage: false, logged: true,  innerpage: true, to: '/forum',     name: 'Сообщество' },
				{ id: 4,  icon: 'code',     firstpage: false, logged: true,  innerpage: true, to: '/code',      name: 'Разработчикам' },
				{ id: 5,  icon: 'download', firstpage: false, logged: true,  innerpage: true, to: '/download',  name: 'Загрузить' },
				{ id: 10, icon: 'mail',     firstpage: true,  logged: false,  innerpage: false, to: '/',      name: 'Контакты' },

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
			],
			
			documentation: [
				{
					id: 1, expand: false, name: 'Платформа',
					childs: [
						{ id: 1, to: '/docs/platform/1', name: 'Установка и администрирование Docsvision 5.2.2450' },
						{ id: 2, to: '/docs/platform/2', name: 'Конструктор согласований Docsvision 5.4.2642' },
						{ id: 3, to: '/docs/platform/3', name: 'Установка и администрирование Docsvision 5.3.2559' },
						{ id: 4, to: '/docs/platform/4', name: 'Установка и администрирование Docsvision 5.2.2542' },
					]
				},
				{ 
					id: 2, expand: false, name: 'Web-client',
					childs: [
						{ id: 1, to: '/docs/platform/1', name: 'Web-client, версия 9' },
						{ id: 1, to: '/docs/platform/2', name: 'Web-client, версия 10' },
					]
				},
				{
					id: 3, expand: false, name: 'Пульс',
					childs: [
						{ id: 1, underconstruction: true,},
					]
				},
				{ id: 4, expand: false, name: 'Накопительные обновления',
					childs: [
						{ id: 1, underconstruction: true,},
					]
				},
				{ id: 5, expand: false, name: 'Договоры',
					childs: [
						{ id: 1, to: '/docs/platform/1', name: 'Приложение «Договоры» v.5.4.3' },
					]
				},
				{ id: 6, expand: false, name: 'Почтовый клиент',
					childs: [
						{ id: 1, to: '/docs/platform/1', name: 'Приложение «Почтовый клиент»' },
					]
				},
				{ id: 7, expand: false, name: 'Делопроизводство',
					childs: [
						{ id: 1, to: '/docs/platform/1', name: 'Приложение «Делопроизводство» v.5.4.4' },
					] 
				}, 
				{ id: 8, expand: false, name: 'Управление документами',
					childs: [
						{ id: 1, to: '/docs/platform/1', name: 'Приложение «Управление документами» Docsvision 5.4.2642' },
						{ id: 1, to: '/docs/platform/2', name: 'Приложение «Управление документами» Docsvision 5.3.2559' },
						{ id: 2, to: '/docs/platform/3', name: 'Приложение «Управление документами» Docsvision 5.3.2529' },
						{ id: 3, to: '/docs/platform/4', name: 'Приложение «Управление документами» Docsvision 5.2.2450' },
					]
				},
				{ id: 9,  expand: false, name: 'Открытое множество непредсказуемо',
					childs: [ {id: 1, underconstruction: true} ]
				},
				{ id: 10, expand: false, name: 'Аксиома допускает многомерный предел функции',
					childs: [ {id: 1, underconstruction: true} ]
				},
				{ id: 11, expand: false, name: 'В общем, дифференциальное исчисление соответствует',
					childs: [ {id: 1, underconstruction: true} ]
				},
				{ id: 12, expand: false, name: 'Абстрактный предел функции',
					childs: [ {id: 1, underconstruction: true} ]
				},
				{ id: 13, expand: false, name: 'Нечетная функция накладывает убывающий критерий сходимости Коши',
					childs: [ {id: 1, underconstruction: true} ]
				},
				{ id: 14, expand: false, name: 'Таким образом сбылась мечта идиота',
					childs: [ {id: 1, underconstruction: true} ]
				},
				{ id: 15, expand: false, name: 'Утверждение полностью доказано',
					childs: [ {id: 1, underconstruction: true} ]
				},
				{ id: 16, expand: false, name: 'Интеграл от функции, имеющий конечный разрыв',
					childs: [ {id: 1, underconstruction: true} ]
				},
				{ id: 17, expand: false, name: 'Однородно изменяет интеграл от функции',
					childs: [ {id: 1, underconstruction: true} ]
				},
				{ id: 18, expand: false, name: 'Комплексной переменной',
					childs: [ {id: 1, underconstruction: true} ]
				},
				{ id: 19, expand: false, name: 'Огибающая семейства прямых позиционирует',
					childs: [ {id: 1, underconstruction: true} ]
				},
				{ id: 20, expand: false, name: 'Положительный тройной интеграл',
					childs: [ {id: 1, underconstruction: true} ]
				},
				{ id: 21, expand: false, name: 'Скалярное поле, очевидно, отображает интеграл',
					childs: [ {id: 1, underconstruction: true} ]
				},
				{ id: 22, expand: false, name: 'От функции комплексной переменной',
					childs: [ {id: 1, underconstruction: true} ]
				},
				{ id: 23, expand: false, name: 'Математическое моделирование однозначно показывает',
					childs: [ {id: 1, underconstruction: true} ]
				},
				{ id: 24, expand: false, name: 'Что двойной интеграл существенно обуславливает',
					childs: [ {id: 1, underconstruction: true} ]
				},
				{ id: 25, expand: false, name: 'Изоморфный Наибольший Общий Делитель',
					childs: [ {id: 1, underconstruction: true} ]
				},
				{ id: 26, expand: false, name: 'Длина вектора позиционирует Наибольший Общий Делитель',
					childs: [ {id: 1, underconstruction: true} ]
				},
				{ id: 27, expand: false, name: 'Что несомненно приведет нас к истине',
					childs: [ {id: 1, underconstruction: true} ]
				}
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
			setActiveVersion(state, payload) {
				state.currentProduct = payload.amount;
			},
			setActiveItem(state, payload) {
				state.currentItem = payload.amount;
			},
			setTimlineSelection(state, payload) {
				state.timelineSelection = payload.amount;
			}
		}
	})
}


export default createStore
