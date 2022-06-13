<template>
  <div class="min-h-full bg-cover bg-top sm:bg-top">
    <div class="max-w-7xl mx-auto px-4 py-4 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48 flex-col items-center justify-start flex">
      <router-link to="/">
        <div flex items-center justify-start>
          <h2 text-8xl font-900 text-gray-200 dark:text-gray-200 tracking-tight sm:text-8xl mx-2>
            4
          </h2>
          <div>
            <div class="small-circle radial-gradient" />
            <div class="circle rotate-1" />
            <div class="circle rotate-2" />
            <div class="circle rotate-3" />
          </div>
          <h2 text-8xl font-900 text-gray-200 dark:text-gray-200 tracking-tight sm:text-8xl mx-2>
            4
          </h2>
        </div>
      </router-link>

      <h1 text-4xl font-900 text-blue tracking-tight sm:text-7xl>
        Такой страницы нет у <span text-red text-4xl font-900 tracking-tight sm:text-7xl> sapogin</span>.com
      </h1>
      <router-link to="/">
        <button btn mt-8>
          На главную страницу
        </button>
      </router-link>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>

<style lang="scss" scoped>
$diameter: 100px;
$border-thickness: 5px;

.small-circle {
  position: relative;
  float: left;
  border-radius: 100%;
  height: $diameter;
  width:  $diameter;
  margin: calc(($diameter / 2) / 2);
}
.radial-gradient {
  background-color: #E5E7EB;
  box-shadow: 0px 0px 3px 1px #E5E7EB;
}

.circle {
  position: absolute;
  border: $border-thickness solid #E5E7EB;
  border-radius: 100%;
  height: calc($diameter + ($diameter / 2));
  width:  calc($diameter + ($diameter / 2));
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
