<template lang="pug">
.container
	h2 {{current[0].name}}: уточните тему
	p Выполните поиск или выберите нужную тему из списка ниже.
	<!-- .navgrid -->
	.tags
		.tag(v-for="section in current[0].sections" :key="section.id" :icon="section.icon" :name="section.name" :to="section.to") {{section.name}}
		<!-- .tag test -->
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
							{ id: 5, name: 'Карточки', to: '', },
							{ id: 6, name: 'Справочники', to: '', },
							{ id: 2, name: 'Решения', to: '', },
							{ id: 2, name: 'Конструкторы', to: '', },
							{ id: 1, name: 'Совместимость', to: '', },
							{ id: 3, name: 'Демоверсии', to: '', },
							{ id: 4, name: 'Администрирование', to: '', },
							{ id: 7, name: 'Workflow', to: '', },
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
.navgrid {
	/* background: #eee; */
	max-width: 960px;
	height: auto;
	/* margin: 1rem auto; */
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	/* justify-content: center; */
}

.item {
	border: 1px solid #fff;
	width: 220px;
	margin-bottom: 1rem;
	margin-right: 1rem;
	padding: .5rem;
	text-transform: uppercase;
	border-radius: 2rem;
	&:hover {
		border: 1px solid #ccc;
	}
}

</style>
