<template>
	<div class="footer">
		<div>© 1998 — 2018, ООО «ДоксВижн»</div>
		<div>Портал технической поддержки компании Доксвижн</div>
	</div>
</template>

<script>
export default {
	// transition: 'bounce',
	// layout: 'dark'
}
</script>

<style scoped lang="scss">
	@import '~assets/css/colors';

	.footer {
		font-family: Tahoma, "Helvetica Neue", Helvetica, Arial, sans-serif;
		display: flex;
		justify-content: space-between;
		padding: 1em;
		font-size: .82rem;
		border-top: 1px solid var(--dv-gray2);
		color: #aaa;
	}

</style>
