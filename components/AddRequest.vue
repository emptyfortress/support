<template lang="pug">
#addRequest(:class="$store.state.add ? 'active' : '' " v-on:mousemove="logmouse")
	i.icon-close(@click="$store.commit('hideAdd')")
	#sendBt.button.is-medium(@click="sendReq") Отправить
	form#zapros
		.head Новый запрос
		.inner
			Select( labelText="Тип услуги" :list="type" )/
			Tags( :list="versions" label="Версия Доксвижн" )/
			Tags( :list="no" label="Накопительное обновление" )/
			Select( labelText="Модуль" :list="module" )/
			Tags( :list="no1" label="Накопительное обновление модуля" )/
			Input( labelText="Компания-клиент" imodel='')
			Tags( :list="rejim" label="Режим использования")/
			transition(name="slide")
				section#one(v-if="$store.state.one")
					Tags( :list="incindent" label="Воздействие инциндента" )
					Tags( :list="character" label="Характер обращения" )
					Input( labelText="Копия" imodel='')

</template>


<script>
import Input from '@/components/Input';
import Select from '@/components/Select';
import Tags from '@/components/Tags';
	
	export default {
		data() {
			return {
				name: '',
				distance: 999,
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
				no1: [ { id: 1, name: "Не установлено" } ],
				rejim: [ { id: 1, name: "Изучение" }, { id: 2, name: "Внедрение" }, { id: 'one', name: "Эксплуатация" }, ],
				incindent: [ { id: 1, name: "Без классификации" }, { id: 2, name: "Другое" }, ],
				character: [
					{ id: 1, name: "Зависание" },
					{ id: 2, name: "Замедление" },
					{ id: 3, name: "Ошибка" },
					{ id: 4, name: "Поведение не соответствует документации" },
					{ id: 5, name: "Вопрос по функциональности" },
				],
			}
		},
		computed: {
			butCoord() {
				let rect = sendBt.getBoundingClientRect();
				return [Math.round(rect.x + rect.width/2), Math.round(rect.y + rect.height/2)];
			},
		},
		updated() {
			this.whenReady();
			this.selectInputs();
			this.add();
			this.selectInputs().forEach( function(item) {
				item.style.boxShadow = '0 0 2px -3px #f00'
			} )
		},
		methods: {
			whenReady() {
				let sendBt = document.querySelector('#sendBt');
			},
			selectInputs() {
				let inp = [];
				// document.querySelectorAll('.invalid').forEach( function(e) {
				// 	inp.push(e)
				// } )
				// document.querySelectorAll('#zapros .select').forEach( e => inp.push(e) )
				document.querySelectorAll('#zapros .invalid').forEach( e => inp.push(e) )
				return inp;
			},
			add() {
				let out = document.querySelector('#zapros');
				out.scrollTop = out.scrollHeight;
			},
			setName(value) {
				this.name = value
				this.$v.name.$touch()
			},
			setVer(e) { this.activeVer = e; },
			setNo(e) { this.activeNo = e; },
			setNo1(e) { this.activeNo1 = e; },
			sendReq() {
				this.distance = 999
				this.$store.commit('hideAdd')
				this.$notify({
					group: "foo",
					type: "success",
					title: "Спасибо!",
					text: "Ваш запрос отправлен по адресу",
				})
				this.$router.push('/myrequest/1')
			},

			logmouse(e) {
				this.distance = Math.round(Math.sqrt( ( this.butCoord[0] - e.clientX ) * ( this.butCoord[0] - e.clientX ) + ( this.butCoord[1] - e.clientY ) * ( this.butCoord[1] - e.clientY ) ))
				let spread = -3 + 4 * (200 - this.distance)/100;
				this.selectInputs().forEach( function(item) {
					item.style.boxShadow = '0 0 2px ' + spread + 'px #f00'
				} )
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

.form-group--error input, .form-group--error textarea, .form-group--error input:focus, .form-group--error input:hover {
    border-color: #f79483;
		outline: none;
}
.form-group--error {
	-webkit-animation: shake-horizontal 0.6s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
  animation: shake-horizontal 0.6s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}

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
	overflow: auto;
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
	}
}

.head {
	text-align: center;
	font-size: 2rem;
	color: $main;
}
#zapros {
	padding: 0 1rem;
	overflow: auto;
	/* box-shadow: 0 -2px 4px inset #ccc; */
	height: calc(100vh - 170px);
	.field { margin-top: 2rem; }
	.inner { width: 500px; margin: 0 auto; margin-bottom: 2rem;
	}
}
#sendBt {
	position: absolute;
	bottom: 3rem;
	left: 50%;
	transform: translateX(-50px);
}

#one {
	margin-top:2rem;
	margin-bottom: 4rem;
}

.slide-enter-active, .slide-leave-active {
	/* transition: all .5s cubic-bezier(0.680, -0.550, 0.265, 1.550); */
	transition: all .5s ease-out;
}
.slide-enter, .slide-leave-to {
	opacity: 0
}
.slide-enter, .slide-leave-to {
	transform: translateY(-60px);
}



// ========================================
// animation
// ========================================

/* ----------------------------------------------
 * Generated by Animista on 2018-6-9 12:38:36
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation shake-horizontal
 * ----------------------------------------
 */
@-webkit-keyframes shake-horizontal {
  0%,
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-10px);
            transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(10px);
            transform: translateX(10px);
  }
  80% {
    -webkit-transform: translateX(8px);
            transform: translateX(8px);
  }
  90% {
    -webkit-transform: translateX(-8px);
            transform: translateX(-8px);
  }
}
@keyframes shake-horizontal {
  0%,
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-10px);
            transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(10px);
            transform: translateX(10px);
  }
  80% {
    -webkit-transform: translateX(8px);
            transform: translateX(8px);
  }
  90% {
    -webkit-transform: translateX(-8px);
            transform: translateX(-8px);
  }
}


</style>

