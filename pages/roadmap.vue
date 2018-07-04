<template lang="pug">
div
	.container
		h1 
			i.icon-map/ Roadmap
		p План развития платформы ДВ
	div.cal
		<timeline ref="timeline" :items="items" :groups="groups" :options="options"></timeline>
	roadCarousel
</template>

<script>
import { Timeline } from 'vue2vis';
import "vue2vis/dist/vue2vis.css";
import roadCarousel from '@/components/roadCarousel';

export default {
	layout: 'main',
	data() {
		return {
			groups: [{
      	id: 0,
        content: 'Group 2'
      }],
      items: [{
      	id: 0,
        group: 0,
        start: new Date(),
        content: 'Item 1'
      }],
      options: {
        editable: true,
      },
		}
	},
	components: {
		Timeline,
		roadCarousel
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

.cal {
	margin-bottom: 2rem;
	/* border: 1px solid red; */
}

</style>
