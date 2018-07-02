<template lang="pug">
.write
	i.icon-user
	<textarea class="textarea" placeholder="Комментировать"></textarea>
</template>

<style scoped lang="scss">
.write {
	display: flex;
	margin-top: 1rem;
	.icon-user {
		font-size: 2.5rem;
		color: $dv-gray2;
		vertical-align: top;
	}
	.textarea {
		width: 100%;
		-webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
		border: none;
		font-size: 1.0rem;
		padding: .7rem;
	}
}
</style>
	

