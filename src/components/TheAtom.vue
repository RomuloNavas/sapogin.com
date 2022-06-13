<template>
  <a
    href="/"
    class="master-circle"
  >
    <div class="small-circle radial-gradient" />
    <div class="circle rotate-1" />
    <div class="circle rotate-2" />
    <div class="circle rotate-3" />
  </a>
</template>

<style lang="scss" scoped>
$margin-very_big: 48px;

.master-circle {
  margin: 0  auto;
  &:hover .rotate-1 {
  animation: spin-1 5s linear infinite;
  }
  &:hover .rotate-2 {
  animation: spin-2 5s linear infinite;
  }
  &:hover .rotate-3 {
  animation: spin-3 5s linear infinite;
  }
}

.small-circle {
  position: relative;
  float: left;
  margin: 17px;
  border-radius: 100%;
  height: 18px;
  width: 18px;
}
.radial-gradient {
  background-color: #E5E7EB;
  box-shadow: 0px 0px 3px 1px #E5E7EB;
}

.circle {
  position: absolute;
  border: 3px solid #E5E7EB;
  border-radius: 100%;
  height: 50px;
  width: 50px;
}

.rotate-1 {
  -webkit-transform: rotateX(45deg) rotateZ(45deg);
  transform: rotateX(45deg) rotateZ(45deg);
  -webkit-animation: spin-1 15s linear infinite;
  animation: spin-1 15s linear infinite;
}
.rotate-2 {
  -webkit-transform: rotateY(180deg) rotateZ(180deg);
  transform: rotateY(180deg) rotateZ(180deg);
  -webkit-animation: spin-2 15s linear infinite;
  animation: spin-2 15s linear infinite;
}
.rotate-3 {
  -webkit-transform: rotateX(225deg) rotateY(225deg);
  transform: rotateX(265deg) rotateY(265deg);
  -webkit-animation: spin-3 15s linear infinite ;
  animation: spin-3 15s linear infinite;
}

@keyframes spin-1 {
  100% {
    transform: rotateX(405deg) rotateZ(405deg);
  }
}

@keyframes spin-2 {
  100% {
    transform: rotateY(540deg) rotateZ(540deg);
  }
}

@keyframes spin-3 {
  100% {
    transform: rotateX(625deg) rotateY(625deg);
  }
}
</style>
