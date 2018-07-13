<template lang="pug">
.container
	h2
		i.icon-compass/ Путеводитель
	ul.listP
		li(v-for="item in $store.state.map")
			nuxt-link(:to='item.to') {{item.title}}
	<nuxt-child />
</template>

<script>
export default {
	transition(to, from) {
    if (!from) return 'slide-right'
		return +to.matched.length < +from.matched.length ? 'slide-left' : 'slide-right'
  },
}

</script>

<style scoped lang="scss">

</style>
