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
			:items="items1"
			:groups="groups1"
			:options="options"
			:events="['select']"
			@select='myClickEvent'
			v-if="activeVersion === 4"
			)
		timeline(ref="timeline"
			:items="timelineItems"
			:groups="groups"
			:options="options"
			:events="['select']"
			@select='myClickEvent'
			v-else
			)
	.supText(v-if="activeVersion == 4") 
			h3 Здесь какой-то текст про сроки техподдержки
	reqTable(v-else)/
</template>


<script>
import * as moment from 'moment';
import 'moment/locale/ru';
import reqTable from '@/components/reqTable';
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
				{ id: 4, name: 'Техподдержка',  active: false, to: ''},
			],
			groups: [
				{ id: 1, content: 'Десктоп',    },
				{ id: 2, content: 'Веб',        },
				{ id: 3, content: 'Пульс',      },
			],
			groups1: [
				{ id: 4, content: 'DV 5.3',     },
				{ id: 5, content: 'DV 5.4',     },
				{ id: 6, content: 'DV 5.5',     },
				{ id: 7, content: 'Web-client', },
				{ id: 8, content: 'Пульс',      },
			],
			items: [
				{ id:  1, group: 1, start: '2018-07-02', content: 'Item 1', },
				{ id:  2, group: 1, start: '2018-07-04', content: 'Item 2', },
				{ id:  3, group: 3, start: '2018-07-05', content: 'Item 3', },
				{ id:  4, group: 2, start: '2018-07-08', content: 'Item 4', },
				{ id:  5, group: 2, start: '2018-07-12', content: 'Item 5', },
				{ id:  6, group: 3, start: '2018-07-12', content: 'Item 6', },
				{ id:  7, group: 2, start: '2018-07-11', content: 'Item 7', },
				{ id:  8, group: 1, start: '2018-07-11', content: 'Item 8', },
			],
			items1: [
				{ id:  9, group: 4, type: 'point', start: '2018-01-01', className: 'support', content: 'Прекращение поддержки', },
				{ id: 10, group: 5, type: 'point', start: '2020-01-01', className: 'support', content: 'Прекращение поддержки', },
				{ id: 11, group: 6, type: 'point', start: '2021-05-01', className: 'support', content: 'Прекращение поддержки', },
				{ id: 12, group: 7, type: 'point', start: '2023-01-01', className: 'support', content: 'Прекращение поддержки', },
				{ id: 13, group: 8, type: 'point', start: '2025-01-01', className: 'support', content: 'Прекращение поддержки', },
			],

			options: {
				editable: false,
				orientation: 'top',
				moment: function(date) {
					return moment(date).utcOffset('+03:00');
				},
				locale: 'ru',
				stack: true,
				// align: 'right',
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
			console.log(this.$refs.timeline);
			this.$refs.timeline.fit({ animation: {duration: 2000} })
		},
		selectItem(id) {
			let refTimeline = this.$refs.timeline;
			if (id == []) {
				return refTimeline.setSelection([]);
				this.fitAll();
				} else if(id > 8) {
				return refTimeline.setSelection(id-5);
			} else {
				return refTimeline.setSelection(id);
			}
		},
		setActiveVersion(index) {
			this.activeVersion = index;
			this.$store.commit( "setActiveVersion", { amount: null } );
			this.$store.commit( "setActiveVersion", { amount: index } );
			if (index < 4) {
				this.showMain()
			} else {
				this.showTP()
			}
		},
		showMain() {
			// this.$store.commit( "setActiveVersion", { amount: 4 } );
			document.querySelector('.vis-content').classList.remove('support');
			// this.$refs.timeline.redraw();
			// this.fitAll();
		},
		showTP() {
			// this.$store.commit( "setActiveVersion", { amount: 0 } );
			document.querySelector('.vis-content').classList.add('support');
			// this.fitAll();
			// this.$refs.timeline.redraw();
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
	font-size: 1.0rem;
	.prod {
		background: #eee;
		padding: .5rem 1.5rem;
		margin-right: 1px;
		cursor: pointer;
		&:hover {
			background: darken(#eee, 7%);
		}
		&.active {
			background: $dv-green;
			color: #fff;
			&:hover {
				background: darken($dv-green, 4%);
			}
		}
	}
}

</style>
