<template lang="pug">
div
	.container
		h1 
			i.icon-map/ Roadmap
		p План развития платформы ДВ
	roadCarousel
	.timeline
		timeline(ref="timeline"
							:items="timelineItems"
							:groups="groups"
							:options="options"
							:events="['select']"
							@select='myClickEvent'
							)
	<!-- reqTable(v&#45;if="selectedItem == 0")/ -->
	reqTable/
</template>


<script>
import roadCarousel from '@/components/roadCarousel';
import reqTable from '@/components/reqTable';
import RoadTree from '@/components/RoadTree';
import moment from 'moment';

import { Timeline } from 'vue2vis';
import "vue2vis/dist/vue2vis.css";
import "@/assets/css/timeline.scss";

export default {
	layout: 'main',
	data() {
		return {
			selectedItem: 0,
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
				// { id:  8, group: 2, start: '2018-06-12' , product: 2,  content: 'Item 1', },
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
	components: {
		Timeline,
		roadCarousel,
		reqTable,
		RoadTree
	},
	methods: {
		myClickEvent(properties) {
			let refTimeline = this.$refs.timeline;  // this var - for not loosing context
			if (properties.items.length == 0) {
				this.selectedItem = 0
				this.$store.commit('setActiveItem', { amount: 0 } )
				// console.log('nothing');
				// console.log(this.$store.state.currentItem);
			} else {
				this.selectedItem = properties.items[0];
				setTimeout(function() { 
					refTimeline.focus(properties.items);
				}, 0);
				this.$store.commit('setActiveItem', { amount: properties.items[0] } )
				console.log(properties.items[0]);
			}
		},
	fitAll() {
			this.$refs.timeline.fit()
		},
	}
}
</script>

<style scoped lang="scss">
.container {
	padding-top: 4rem;
	text-align: center;
	margin-bottom: 2rem;
	p { font-size: 1.2rem; color: $main; margin-top: 0; }
	h1 { margin-bottom: 1rem; }
}

.timeline {
	margin-top: 1rem;
	margin-bottom: 1rem;
	/* border: 1px solid red; */
}
</style>
