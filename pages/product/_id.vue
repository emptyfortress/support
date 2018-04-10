<template lang="pug">
.container
	h2 {{current[0].name}}: уточните тему
	p Выполните поиск или выберите нужную тему из списка ниже.
	<!-- .navgrid -->
	br/
	.tags
		.tag.is-medium(v-for="section in current[0].sections" 
										:class="section.active ? 'is-primary' : ''"
										@click="section.active = !section.active"
									) {{section.name}}
</template>

<script>
import Section from '@/components/Section';

	export default {
		data() {
			return {
				products: [
					{ 
						id: '_platform', name: 'Платформа',
						sections: [
							{ id: 5, active: false, name: 'Карточки', to: '', },
							{ id: 6, active: false, name: 'Справочники', to: '', },
							{ id: 2, active: false, name: 'Решения', to: '', },
							{ id: 2, active: false, name: 'Конструкторы', to: '', },
							{ id: 1, active: false, name: 'Совместимость', to: '', },
							{ id: 3, active: false, name: 'Демоверсии', to: '', },
							{ id: 4, active: false, name: 'Администрирование', to: '', },
							{ id: 7, active: false, name: 'Workflow', to: '', },
						]
					},
					{ id: '_web', name: 'Web-client', },

				],
			}
		},
		computed: {
			current() {
				return this.products.filter( item => item.id == this.$route.params.id )
			}
		},
		components: {
			Section
		}

	}
</script>

<style scoped lang="scss">
@import '~bulma/sass/elements/tag';

.container { margin-top: 4rem; }
h1 { margin-bottom: 1rem; }
p { font-size: 1.2rem; }
.tag {
	cursor: pointer;
}



</style>
