<template lang="pug">
.myrow.level
	.level-left
		i.icon-user.level-item(@mouseover="showInfo" @mouseleave="hideInfo")
			.showup(v-if="hover")
				.level-left
					i.icon-user.level-item
					.level-item
						div
							a.name {{ fio }}
							.join зарегистрирован 2 года назад
							.post Публикаций:
								span {{ reply }}
				
		.attr
			.zag {{ title }}
			.fio {{ fio }} &bull; 3 мес. назад
	.level-right
		.level-item.small.tooltip(data-tooltip="Ответов")
			i.icon-bubbles {{ reply }}
		.level-item.small.tooltip(data-tooltip="Проголосовали")
			i.icon-counter {{ counter }}

</template>

<script>
	export default {
		props: ['title', 'fio', 'reply', 'counter'],
		data() {
			return {
				hover: false
			}
		},
		methods: {
			showInfo() {
				return this.hover = true;
			},
			hideInfo() {
				return this.hover = false;
			}
		}
		
	}
</script>


<style scoped lang="scss">

.myrow {
	border-top: 1px solid #eee;
	padding: .5rem 0;
	i.icon-user {
		font-size: 2.3rem;
		color: $dv-gray3;
		position: relative;
		cursor: pointer;
	}
	&.level {
		margin-bottom: 0;
	}
}
.showup {
	position: absolute;
	background: #fff;
	width: 360px;
	border: 1px solid #ccc;
	border-radius: 5px;
	top: -50px;
	left: 50px;
	z-index: 3;
	padding: 1rem;
	box-shadow: 1px 1px 6px #ccc;
	i.icon-user { font-size: 4rem; }
	.name {
		font-size: 1.2rem;
	}
	.join { font-size: .9rem; }
	.post {
		font-size: 1.1rem;
		color: $black;
		margin-top: 1rem;
		span { font-weight: 900; }
	}
}

.zag {
	font-size: 1.3rem;
	color: $dv-blue;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
}
.fio {
	font-weight: 300;
	margin-top: .4rem;
	color: #ccc;
}
.small i {
	font-size: 1rem;
	margin-left: 1rem;
}
</style>
