<template lang="pug">
	.all(@click="$store.commit( 'toggleNav' )")
		.navTrigger(:class="{active : $store.state.navigation}")
			<i></i><i></i><i></i>
		.txt Разделы
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
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
	&:hover {
		i { background: $dv-blue; }
		.txt { color: $dv-blue; }
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
