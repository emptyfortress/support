<template>
	<div class="footer">
		<div>© 1998 — 2018, ООО «ДоксВижн»</div>
		<div>Портал технической поддержки</div>
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
		display: flex;
		justify-content: space-between;
		padding: 1em;
		font-size: .86rem;
		border-top: 1px solid var(--dv-gray2);
		color: #aaa;
	}

</style>
