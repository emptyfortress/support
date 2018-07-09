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
	reqTable/
</template>


<script>
import roadCarousel from '@/components/roadCarousel';
import reqTable from '@/components/reqTable';
import moment from 'moment';

import { Timeline } from 'vue2vis';
import "vue2vis/dist/vue2vis.css";
import "@/assets/css/timeline.scss";

export default {
	layout: 'main',
	data() {
		return {
			groups: [{
      	id: 0,
        content: 'Group 2'
      }],
      items: [
				{ id:  0, group: 0, start: '2018-06-02' , product: 1, rating: "", content: 'Item 1', },
				{ id:  1, group: 0, start: '2018-06-04' , product: 1, rating: "", content: 'Item 1', },
				{ id:  2, group: 0, start: '2018-06-05' , product: 3, rating: "", content: 'Item 1', },
				{ id:  3, group: 0, start: '2018-06-08' , product: 2, rating: "", content: 'Item 1', },
				{ id:  4, group: 0, start: '2018-06-12' , product: 2, rating: "", content: 'Item 1', },
				{ id:  5, group: 0, start: '2018-06-12' , product: 3, rating: "", content: 'Item 1', },
				{ id:  6, group: 0, start: '2018-06-11' , product: 2, rating: "", content: 'Item 1', },
				{ id:  7, group: 0, start: '2018-06-11' , product: 1, rating: "", content: 'Item 1', },
				{ id:  8, group: 0, start: '2018-06-12' , product: 2, rating: "", content: 'Item 1', },
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
				return this.items.filter( item => item.product == this.$store.state.currentProduct )
			}
		}
	},
	components: {
		Timeline,
		roadCarousel,
		reqTable
	},
	methods: {
		myClickEvent(properties) {
			console.log('select', properties);
		},
	fitAll() {
			this.$refs.timeline.fit();
		}
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
