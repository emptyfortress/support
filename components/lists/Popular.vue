<template lang="pug">
section
	h2 {{ title }}
	div
		<section v-for="item in list">
			.item-group
				.forum {{ item.forum }}
				.action
					.header {{ item.text }}
					.time 1 д назад
		</section>
</template>

<script>
	export default {
		props: ['title', 'list' ]
	}
</script>

<style scoped lang="scss">
	h2 {
		font-weight: 300;
		color: #aaa;
		margin-bottom: 1rem;
		border-bottom: 1px solid $dv-gray2;
	}
	.item-group {
		margin-bottom: 1.5rem;
		.forum {
			color: $dv-green;
			font-size: 1.2rem;
			margin-bottom: .5rem;
			cursor: pointer;
			&:hover {
				text-decoration: underline;
			}
		}
		.action {
			display: flex;
			.header { 
				color: $dv-blue;
				cursor: pointer;
				flex-grow: 1;
				&:hover {
					text-decoration: underline;
				}
			}
			.time {
				width: 30%;
				text-align: right;
				color: $dv-gray3;
			}
		}
	}

</style>
