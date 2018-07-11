<template lang="pug">
div
	.container
		h1 
			i.icon-map/ Roadmap
		p План развития платформы ДВ
	.prodList
		.prod(v-for="(item, index) in sections" :key="index" 
				:class="index == activeVersion ? 'active' : ''" @click="setActiveVersion(index)") {{ item.name }}
	.timeline
		timeline(ref="timeline"
			:items="timelineItems"
				:groups="groups"
					:options="options"
						:events="['select']"
							@select='myClickEvent'
							)
	reqTable/
</template>


<script>
import reqTable from '@/components/reqTable';
import moment from 'moment';
import { Timeline } from 'vue2vis';
import "vue2vis/dist/vue2vis.css";
import "@/assets/css/timeline.scss";

export default {
	layout: 'main',
	data() {
		return {
			selectedItem: 0,
			activeVersion: 0,
			sections: [
				{ id: 0, name: 'Все продукты',  active: true, to: ''},
				{ id: 1, name: 'Десктоп',  active: false, to: '' },
				{ id: 2, name: 'Веб',  active: false, to: ''},
				{ id: 3, name: 'Пульс',  active: false, to: ''},
			],
			groups: [
				{ id: 1, content: 'Десктоп' },
				{ id: 2, content: 'Веб' },
				{ id: 3, content: 'Пульс' },
			],
			items: [
				{ id:  1, group: 1, start: '2018-06-02' , product: 1,  content: 'Item 1', },
				{ id:  2, group: 1, start: '2018-06-04' , product: 1,  content: 'Item 1', },
				{ id:  3, group: 3, start: '2018-06-05' , product: 3,  content: 'Item 1', },
				{ id:  4, group: 2, start: '2018-06-08' , product: 2,  content: 'Item 1', },
				{ id:  5, group: 2, start: '2018-06-12' , product: 2,  content: 'Item 1', },
				{ id:  6, group: 3, start: '2018-06-12' , product: 3,  content: 'Item 1', },
				{ id:  7, group: 2, start: '2018-06-11' , product: 2,  content: 'Item 1', },
				{ id:  8, group: 1, start: '2018-06-11' , product: 1,  content: 'Item 1', },
			],
			options: {
				editable: false,
				orientation: 'top',
				moment: function(date) {
					return moment(date).utcOffset('+03:00');
				},
				// locale: 'ru',
			},
		}
	},
	updated() {
		this.fitAll();
	},
	computed: {
		timelineItems() {
			if (this.$store.state.currentProduct === 0) {
				return this.items
			} else {
				return this.items.filter( item => item.group == this.$store.state.currentProduct )
			}
		},
	},
	mounted() {
		this.subs();
	},
	components: {
		Timeline,
		reqTable,
	},
	methods: {
		subs() {
			this.$store.subscribe( (mutation, state) => {
				if (mutation.type === 'setTimlineSelection') {
					this.selectItem(mutation.payload.amount)
				}
			})
		},
		myClickEvent(properties) {
			let refTimeline = this.$refs.timeline;  // this var - for not loosing context
			if (properties.items.length == 0) {
				this.selectedItem = 0
				this.$store.commit('setActiveItem', { amount: 0 } )
			} else {
				this.selectedItem = properties.items[0];
				// setTimeout(function() { 
				// 	refTimeline.focus(properties.items);
				// }, 0);
				this.$store.commit('setActiveItem', { amount: properties.items[0] } )
				// console.log(properties.items[0]);
			}
		},
		fitAll() {
			this.$refs.timeline.fit()
		},
		selectItem(id) {
			let refTimeline = this.$refs.timeline;
			if (id == []) {
				return refTimeline.setSelection([]);
				// this.fitAll();
				} else if(id > 8) {
				// refTimeline.focus(id);
				return refTimeline.setSelection(id-5);
			} else {
				// refTimeline.focus(id);
				return refTimeline.setSelection(id);
			}
		},
		setActiveVersion(index) {
			this.activeVersion = index;
			this.$store.commit( "setActiveVersion", { amount: null } );
			this.$store.commit( "setActiveVersion", { amount: index } );
		},
	}
}
</script>

<style scoped lang="scss">
.container {
	padding-top: 4rem;
	margin-bottom: 2rem;
	p { font-size: 1.2rem; color: $main; margin-top: 0; }
	h1 { margin-bottom: 1rem; }
}

.timeline {
	margin-top: 1rem;
	margin-bottom: 1rem;
}

.prodList {
	display: flex;
	font-size: 1.2rem;
	.prod {
		background: #eee;
		padding: .5rem 1.5rem;
		margin-right: 1px;
		cursor: pointer;
		&.active {
			background: $dv-green;
			color: #fff;
		}
	}
}
</style>
