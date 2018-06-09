<template lang="pug">
#addRequest(:class="$store.state.add ? 'active' : '' " v-on:mousemove="logmouse")
	i.icon-close(@click="$store.commit('hideAdd')")
	.head Новый запрос
	form.zapros
		Select( labelText="Тип услуги" :list="type" )/
		Input( labelText="Тема" )/
		Tags( :list="versions" label="Версия Доксвижн" )/
		Tags( :list="no" label="Накопительное обновление" )/
		Select( labelText="Модуль" :list="module" )/
		Tags( :list="no1" label="Накопительное обновление модуля" )/
		Input( labelText="Компания-клиент" )
		Tags( :list="versions" label="Режим использования")/
		#mybut.send.button.is-medium(@mouseenter="valid") Отправить

</template>


<script>
import Input from '@/components/Input';
import Select from '@/components/Select';
import Tags from '@/components/Tags';

	
	export default {
		data() {
			return {
				type: [ 'Расширенная техническая поддержка', 'Корпоративная техническая поддержка', 'Консультация', 'Экстренная техподдержка'],
				module: ['-- Выберите модуль --', 'Office toolbar 1', 'Office toolbar 2', 'Web-client 6', 'Web-client 7', 'Web-client 8', 'Web-client 9',],
				versions: [
					{ id: 1, name: "5.5" },
					{ id: 2, name: "5.4" },
					{ id: 3, name: "5.3" },
					{ id: 4, name: "5.2" },
					{ id: 5, name: "4.5" },
				],
				no: [
					{ id: 1, name: "8" },
					{ id: 2, name: "9" },
					{ id: 3, name: "10" },
					{ id: 4, name: "11" },
					{ id: 5, name: "Не установлено" },
				],
				no1: [ { id: 1, name: "Не установлено" } ]
			}
		},
		computed: {
			butX() {
				let rect = mybut.getBoundingClientRect();
				return rect;
			}
		},
		mounted() {
			this.whenReady();
		},
		methods: {
			whenReady() {
				let mybut = document.querySelector('#mybut');
			},
			setVer(e) { this.activeVer = e; },
			setNo(e) { this.activeNo = e; },
			setNo1(e) { this.activeNo1 = e; },
			valid() {
				console.log(1234);
				console.log(mybut);
				console.log(this.butX);
				// let match = document.querySelectorAll(".field");
				// match.forEach( function(item) {
				// 	item.classList.add("test")
				// } )
			},
			logmouse(e) {
				// console.log(e.clientX);
			}
		},
		components: {
			Input,
			Select,
			Tags
		}
	}
</script>

<style scoped lang="scss">
@import '~bulma/sass/elements/tag';
@import '~bulma/sass/elements/form';

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
	cursor: pointer;
	transition: all .2s;
	&:hover {
		color: $red;
		/* transform: rotate(90deg); */
	}
}

.send {
	margin-top: 4rem;
	/* position: absolute; */
	/* bottom: 3rem; */
	/* left: 50%; */
	/* transform: translateX(-60px); */
}

.head {
	text-align: center;
	font-size: 2rem;
	color: $main;
}
.zapros {
	width: 500px;
	margin: 2rem auto;
	.field { margin-top: 1.5rem; }
}
</style>

