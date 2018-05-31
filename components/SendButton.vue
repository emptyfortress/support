<template lang="pug">
#actionButton
	.send(@click="toggleSend" :class="{ active: sendOn }")
		i.icon-plus
	transition(name="jump1")
		.but.but1.tooltip.is-tooltip-info.is-tooltip-left(v-if="sendOn" v-on-click-outside="close" data-tooltip="Отправить новый запрос")
			i.icon-send
	transition(name="jump2")
		.but.but2.tooltip.is-tooltip-info.is-tooltip-left(v-if="sendOn" v-on-click-outside="close" data-tooltip="Мои запросы")
			i.icon-bookmark
	transition(name="jump3")
		.but.but3.tooltip.is-tooltip-info.is-tooltip-left(v-if="sendOn" v-on-click-outside="close" data-tooltip="Новая публикация в Сообществе")
			i.icon-bubbles
</template>

<script>
	export default {
		data() {
			return {
				sendOn: false
			}
		},
		methods: {
			toggleSend() {
				this.sendOn = !this.sendOn;
			},
			close() {
				this.sendOn = false;
			},
		}
		
	}
</script>

<style scoped lang="scss">
#actionButton {
	position: fixed;
	bottom: 2rem;
	right: 2rem;
} 
.send {
	width: 80px;
	height: 80px;
	background: $blue;
	cursor: pointer;
	/* background: #778899; */
	border-radius: 40px;
	box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12), 0 3px 5px -1px rgba(0, 0, 0, .2);
	&:hover {
		box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);
	}
	i {
		display: block;
		font-size: 1.5rem;
		text-align: center;
		color: #fff;
		line-height: 80px;
		transition: all .3s ease;
	}
}

.active {
	i {
		transform: rotate(135deg);
	}
}
.but {
	position: absolute;
	width: 50px;
	height: 50px;
	border-radius: 50px;
	cursor: pointer;
	background: $dv-blue;
	left: 1rem;
	z-index: -2;
	text-align: center;
	line-height: 50px;
	i {
		color: #fff;
		font-size: 1.4rem;
	}
}
.tooltip:before {
	box-sizing: content-box;
	font-size: 2rem;
}
.but1 {
	bottom: 7rem;
}
.but2 {
	bottom: 11rem;
}
.but3 {
	bottom: 19rem;
}

.jump1-enter-active, .jump1-leave-active,
.jump2-enter-active, .jump2-leave-active,
.jump3-enter-active, .jump3-leave-active {
  transition: all .3s cubic-bezier(0.680, -0.550, 0.265, 1.550);
}

.jump1-enter, .jump1-leave-to,
.jump2-enter, .jump2-leave-to,
.jump3-enter, .jump3-leave-to {
	opacity: 0;
}
.jump1-enter, .jump1-leave-to {
	transform: translateY(60px);
}

.jump2-enter, .jump2-leave-to {
	transform: translateY(160px);
}

.jump3-enter, .jump3-leave-to {
	transform: translateY(360px);
}

</style>
