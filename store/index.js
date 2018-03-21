import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			navigation: false
		},
		mutations: {
			showNav(state) {state.navigation = true},
			hideNav(state) { state.navigation = false },
			toggleNav(state) {state.navigation = !state.navigation}
		}
	})
}

export default createStore
