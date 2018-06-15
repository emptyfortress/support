<template lang="pug">
#addRequest(:class="$store.state.add ? 'active' : '' " v-on:mousemove="logmouse")
	i.icon-close(@click="$store.commit('hideAdd')")
	#sendBt.button.is-medium(@click="$store.commit('hideAdd')") Отправить
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
import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import { required, minLength, between } from 'vuelidate/lib/validators';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Tags from '@/components/Tags';

const touchMap = new WeakMap();
	
	export default {
		data() {
			return {
				name: '',
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
		validations: {
			name: {
				required,
				minLength: minLength(4)
			},
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
		},
		methods: {
			whenReady() {
				let sendBt = document.querySelector('#sendBt');
			},
			selectInputs() {
				let inp = [];
				document.querySelectorAll('.form__input').forEach( e => inp.push(e) )
				document.querySelectorAll('.select').forEach( e => inp.push(e) )
				document.querySelectorAll('.tag').forEach( e => inp.push(e) )
				return inp;
			},
			add() {
				let out = document.querySelector('#zapros');
				out.scrollTop = out.scrollHeight;
			},
			delayTouch($v) {
				$v.$reset()
				if (touchMap.has($v)) {
					clearTimeout(touchMap.get($v))
				}
				touchMap.set($v, setTimeout($v.$touch, 1000))
			},
			setName(value) {
				this.name = value
				this.$v.name.$touch()
			},
			setVer(e) { this.activeVer = e; },
			setNo(e) { this.activeNo = e; },
			setNo1(e) { this.activeNo1 = e; },
			valid() {
				// console.log(1234);
			},
			logmouse(e) {
				let distance = Math.round(Math.sqrt( ( this.butCoord[0] - e.clientX ) * ( this.butCoord[0] - e.clientX ) + ( this.butCoord[1] - e.clientY ) * ( this.butCoord[1] - e.clientY ) ))
				let spread = -3 + 4 * (200 - distance)/100;
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
	.field { margin-top: 1.5rem; }
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
	transition: all .3s cubic-bezier(0.680, -0.550, 0.265, 1.550);
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

