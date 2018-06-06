<template lang="pug">
#addRequest(:class="$store.state.add ? 'active' : '' ")
	i.icon-close(@click="$store.commit('hideAdd')")
	.send.button.is-outlined.is-medium Отправить
	.head Новый запрос
</template>

<script>
	export default {
		data() {
			return {
			}
		},
	}
</script>

<style scoped lang="scss">
#addRequest {
	position: fixed;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	z-index: 10;
	padding: 1rem;
	background: $dv-gray2;
	transform: translateY(100vh);
	transition: transform .3s cubic-bezier(.12,.69,1,1);
	&.active {
		transform: translateY(0);
	}
} 
.icon-close {
	font-size: 1.8rem;
	position: absolute;
	bottom: 3rem;
	right: 3rem;
}
.send {
	position: absolute;
	bottom: 3rem;
	left: 50%;
	transform: translateX(-60px);
}
.head {
	text-align: center;
	font-size: 2rem;
	color: $main;
}


</style>

