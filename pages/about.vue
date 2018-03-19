<template>
  <div class="container">
    <h1>Нужна помощь?</h1>
		<nuxt-link to="/">Home page</nuxt-link><br><br>
    <nuxt-link to="/users">user</nuxt-link>
		<p>lorem alsdkj laskjd laskjd laskjd lkasjd laksjd alksdj laksdgj </p>
  </div>
</template>

<script>
export default {
	layout: 'dark',
	transition: {
		name: 'slide-left',
		mode: 'out-in'
	}
}
</script>

<style scoped lang="scss">

p {
	/* color: var(--dv-blue); */
}
</style>
