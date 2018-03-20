<template lang="pug">
	<transition name="zoomin" mode="out-in">
		.main
			.header
				.all(@click="toggleNav")
					.navTrigger(:class="{active : nav}")
						<i></i><i></i><i></i>
					.txt Разделы
				Logo/
				.right
					Loud/
					div
						Enter
			.nav(:class="{active : nav}")
				.navgrid
					SectionLight(v-for="section in sections" :key="section.id" :icon="section.icon" :name="section.name")
			.search
				div
					<i class="icon-search"></i>
					input(placeholder="Поиск")
					.autocomplete
			<nuxt/>
	</transition>
</template>


<script>
	import Logo from '@/components/Logo';
	import Loud from '@/components/Loud';
	import Enter from '@/components/Enter';
	import SectionLight from '@/components/SectionLight';


	export default {
		data() {
			return {
				nav: false,
				sections: [
					{ id:  1, icon: 'condition', name: 'Условия' },
					{ id:  2, icon: 'map',       name: 'Путеводитель' },
					{ id:  3, icon: 'download',  name: 'Загрузить' },
					{ id:  4, icon: 'book',      name: 'Документация' },
					{ id:  5, icon: 'lifering',  name: 'Техподдержка' },
					{ id:  6, icon: 'send',      name: 'Отправить запрос' },
					{ id:  7, icon: 'bookmark',  name: 'Мои запросы' },
					{ id:  8, icon: 'code',      name: 'Разработчикам' },
					{ id:  9, icon: 'faq',       name: 'ЧаВо' },
					{ id: 10, icon: 'mail',      name: 'Контакты' },
				]
			}
		},
		methods: {
			toggleNav() {
				this.nav = !this.nav;
			}
		},
		components: {
			Logo,
			Loud,
			Enter,
			SectionLight
		}
	}
</script>

<style scoped lang="scss">
.header {
	height: 69px;
	padding: 0 1rem;
	background: $dv-gray1;
	border-bottom: 1px solid $dv-gray2;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.right {
	display: flex;
	align-items: center;
	div {
		margin-left: 14px;
	}
}

.search {
	height: 40px;
	border-bottom: 1px solid $dv-gray2;
	div {
		position: relative;
		max-width: 780px;
		margin: 0 auto;
		i {
			position: absolute;
			top: 10px;
			right: .5rem;
			font-size: 1.2rem;
			color: $main;
		}
		input {
			width: 100%;
			height: 40px;
			display: block;
			border: none;
			background: transparent;
			font-size: 1.5rem;
			padding-left: 1rem;
		}
		::placeholder {
			color: $dv-gray3;
			font-size: 1.1rem;
		}
		.autocomplete {
			width: 100%;
			height: 200px;
			border: 1px solid #eee;
			box-shadow: 0 3px 5px #ccc;
			position: relative;
			top: -1px;
		}
	}
}

.nav {
	height: 0;
	background: $dv-blue;
	transition: all .3s cubic-bezier(.77,.06,.46,.97);
	-moz-box-shadow:    inset 0 2px 10px #000;
	-webkit-box-shadow: inset 0 2px 10px #000;
	box-shadow:         inset 0 2px 10px #000;
	overflow: hidden;
	&.active {
		height: 320px;
	}

}
.navgrid {
	max-width: 780px;
	height: auto;
	margin: 2rem auto;
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;
}

/* this is styles for ham */

.all {
	display: flex;
	align-items: center;
	cursor: pointer;
	.txt {
		font-family: $small;
		color: #666;
		font-size: .9rem;
		margin-left: .5rem;
	}
	/* width: 70px; */
}
.navTrigger {
  cursor: pointer;
  width: 30px; 
  height: 25px;
  i {
    background-color: #999;
    border-radius: 2px;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
  }
  i:nth-child(1) {
    -webkit-animation:outT 0.5s backwards;
    animation:outT 0.5s backwards;
    -webkit-animation-direction:reverse;
    animation-direction:reverse;
  }
  i:nth-child(2) {
    margin: 5px 0;
    -webkit-animation:outM 0.5s backwards;
    animation:outM 0.5s backwards;
    -webkit-animation-direction:reverse;
    animation-direction:reverse;
  }
  i:nth-child(3) {
    -webkit-animation:outBtm 0.5s backwards;
    animation:outBtm 0.5s backwards;
    -webkit-animation-direction:reverse;
    animation-direction:reverse;
  }
  &.active {
    i:nth-child(1) {
      -webkit-animation:inT 0.5s forwards;
      animation:inT 0.5s forwards;
    }
    i:nth-child(2) {
      -webkit-animation:inM 0.5s forwards;
      animation:inM 0.5s forwards;
    }
    i:nth-child(3) {
      -webkit-animation:inBtm 0.5s forwards;
      animation:inBtm 0.5s forwards;
    }
  }
}
@-webkit-keyframes inM{
50%{-webkit-transform:rotate(0deg);}
100%{-webkit-transform:rotate(45deg);}
}
@keyframes inM{
50%{transform:rotate(0deg);}
100%{transform:rotate(45deg);}
}

@-webkit-keyframes outM{
50%{-webkit-transform:rotate(0deg);}
100%{-webkit-transform:rotate(45deg);}
}
@keyframes outM{
50%{transform:rotate(0deg);}
100%{transform:rotate(45deg);}
}

@-webkit-keyframes inT{
0%{-webkit-transform: translateY(0px) rotate(0deg);}
50%{-webkit-transform: translateY(9px) rotate(0deg);}
100%{-webkit-transform: translateY(9px) rotate(135deg);}
}
@keyframes inT{
0%{transform: translateY(0px) rotate(0deg);}
50%{transform: translateY(9px) rotate(0deg);}
100%{transform: translateY(9px) rotate(135deg);}
}

@-webkit-keyframes outT{
0%{-webkit-transform: translateY(0px) rotate(0deg);}
50%{-webkit-transform: translateY(9px) rotate(0deg);}
100%{-webkit-transform: translateY(9px) rotate(135deg);}
}
@keyframes outT{
0%{transform: translateY(0px) rotate(0deg);}
50%{transform: translateY(9px) rotate(0deg);}
100%{transform: translateY(9px) rotate(135deg);}
}

@-webkit-keyframes inBtm{
0%{-webkit-transform: translateY(0px) rotate(0deg);}
50%{-webkit-transform: translateY(-9px) rotate(0deg);}
100%{-webkit-transform: translateY(-9px) rotate(135deg);}
}
@keyframes inBtm{
0%{transform: translateY(0px) rotate(0deg);}
50%{transform: translateY(-9px) rotate(0deg);}
100%{transform: translateY(-9px) rotate(135deg);}
}

@-webkit-keyframes outBtm{
0%{-webkit-transform: translateY(0px) rotate(0deg);}
50%{-webkit-transform: translateY(-9px) rotate(0deg);}
100%{-webkit-transform: translateY(-9px) rotate(135deg);}
}
@keyframes outBtm{
0%{transform: translateY(0px) rotate(0deg);}
50%{transform: translateY(-9px) rotate(0deg);}
100%{transform: translateY(-9px) rotate(135deg);}
}
</style>
