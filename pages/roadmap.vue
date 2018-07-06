<template lang="pug">
div
	.container
		h1 
			i.icon-map/ Roadmap
		p План развития платформы ДВ
	.timeline
		timeline(ref="timeline"
							:items="items"
							:groups="groups"
							:options="options"
							:events="['select', 'mouseOver']"
							@select='myClickEvent'
							@mouseOver='myClickEvent'
							)
	roadCarousel
</template>


<script>
import roadCarousel from '@/components/roadCarousel';
import { Timeline } from 'vue2vis';
// import moment from 'vue-moment';
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
				{ id:  9, group: 0, start: new Date(), num: 1, rating: "", content: 'Item 1', },
				// { id: 10, group: 0, s''tart: '', end: '', num: 1, rating: "", content: 'Item 1', },
				// { id: 11, group: 0, start: '', end: '', num: 1, rating: "", content: 'Item 1', },
			],
      options: {
        editable: false,
				orientation: 'top',
				// locale: 'ru',
				// moment: function(date) {
				// 	return Timeline.vis.moment(date).utcOffset('+03:00');
				// },
      },
		}
	},
	components: {
		Timeline,
		roadCarousel
	},
	methods: {
		myClickEvent(properties) {
			console.log('select', properties);
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
roadCarousel {
}

.timeline {
	margin-bottom: 2rem;
	/* border: 1px solid red; */
}
</style>
