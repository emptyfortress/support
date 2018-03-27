<template lang="pug">
.flex
	.article-list
		h3 Статьи в разделе
		ul
			li.current Установка и администрирование Docsvision 5.2.2450
			li(v-for="item in articles")
				nuxt-link(to="/") {{ item.title }} 
	.content
		h2 {{ articles[0].title }}
		.flex
			.user
				i.icon-user/
				.fio Екатерина
					br/
					span Обновлено 2 мес. назад
			button.button.is-light.is-rounded + Подписаться
</template>

<script>
export default {
	transition: {
		name: 'slide-right',
		mode: 'out-in'
	},
	data() {
		return {
			articles: [
				{ title: 'Установка и администрирование Docsvision 5.2.2450', to: '' },
				{ title: 'Руководства по конструктору согласований Docsvision 5.4.2642', to: '' },
				{ title: 'Руководство по установке и администрированию Docsvision 5.3.2559', to: '' },
				{ title: 'Руководство по установке и администрированию Docsvision 5.2.2450', to: '' },
			]
		}

	}
}
</script>


<style scoped lang="scss">
.flex {
	display: flex;
	justify-content: space-between;
}
.article-list {
	width: 30%;
	margin-right: 3rem;
	h3 {
		font-size: .9rem;
		font-weight: normal;
	}
	ul {
		margin-top: 1rem;
		li {
			margin-bottom: 1.5rem;
			line-height: 150%;
			&.current {
				color: $dv-green;
			}
		}
	}
}
.content {
	/* background: #ccc; */
	width: 100%;
}
h2 {
	font-weight: 300;
	text-transform: uppercase;
	color: #666;
	margin-bottom: 2rem;
	/* color: $black; */
}
.user {
	display: flex;
	justify-content: center;
	align-items: center;
	span {
		font-size: .95rem;
		font-family: $small;
		color: #ccc;
	}

	i.icon-user {
		font-size: 2.5rem;
		color: $dv-gray2;
		vertical-align: middle;

	}
}

</style>
