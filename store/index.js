import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			navigation: false
		},
		mutation: {
			showNav() {navigation = true},
			hideNav() {navigation = false},
			toggleNav() {navigation = !navigation}
		}
	})
}

export default createStore
