<template lang="pug">
div
	.container
		h1 
			i.icon-map/ Roadmap
		p План развития платформы ДВ
	roadCarousel
	.timeline
		timeline(ref="timeline"
							:items="items"
							:groups="groups"
							:options="options"
							:events="['select', 'mouseOver']"
							@select='myClickEvent'
							@mouseOver='myClickEvent'
							)
	reqTable/
</template>


<script>
import roadCarousel from '@/components/roadCarousel';
import reqTable from '@/components/reqTable';

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
				{ id:  9, group: 0, start: new Date(), num: 1, rating: "", content: 'Item 1', },
				{ id:  10, group: 0, start: '2018-06-02' , num: 1, rating: "", content: 'Item 1', },
			],
      options: {
        editable: false,
				orientation: 'top',
      },
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
