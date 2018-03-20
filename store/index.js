import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			navigation: false
		},
		mutations: {
			showNav() {state.navigation = true},
			hideNav() {
				state.navigation = false;
				console.log('testttt');
			},
			toggleNav() {state.navigation = !state.navigation}
		}
	})
}

export default createStore
