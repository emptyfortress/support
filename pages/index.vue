<template>
	<section class="container">
		<div>
				<h1 class="title">support</h1>
				<h2 class="subtitle"> DV support site </h2>

				<div class="links"> 
					<nuxt-link to="/test">test</nuxt-link>
				</div>
		</div>
	</section>
</template>

<script>

</script>

<style lang = "scss">
.container {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.title {
	font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	/* color: #f00; */
	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	/* padding-top: 15px; */
}
</style>
