<template lang="pug">
section(v-if="$route.params.id == 1")
	.tabs
		ul
			li(v-for='tab in requests'  :class="activeTab == tab.id ? 'is-active' : ''")
				a(@click="setTab(tab.id)") {{ tab.name }}
	.tags
		.tag.is-rounded.is-medium.pointer(v-for="status in statuses" 
										:class="activeTag == status.id ? 'is-info' : ''"
										@click="setTag(status.id)"
									) {{status.name}}
	p section 1
</template>

<script>
	export default {
		transition(to, from) {
			if (!from) return 'slide-right'
			return +to.params.id < +from.params.id ? 'slide-left' : 'slide-right'
		},
		data() {
			return {
				activeTab: 1,
				activeTag: 1,
				requests: [
					{ id: 1, name: 'Мои запросы' },
					{ id: 2, name: 'Получаемые копии запросов' },
					{ id: 3, name: 'Запросы организаций' },
				],
				statuses: [
					{ id: 1 , active: true, name: 'Любой', to: '', },
					{ id: 2 , active: false, name: 'Открыт', to: '', },
					{ id: 3 , active: false, name: 'Ждет вашего ответа', to: '', },
					{ id: 4 , active: false, name: 'Выполнен', to: '', },

				]
			}
		},
		methods: {
			setTab(e) {
				this.activeTab = e;
			},
			setTag(e) {
				this.activeTag = e;
			},
		},

	}
</script>


<style scoped lang="scss">
@import '~bulma/sass/elements/tag';
@import '~bulma/sass/components/pagination';
@import '~bulma/sass/elements/form';


</style>
