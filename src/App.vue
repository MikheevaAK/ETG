<template>
  <Transition name="page" mode="out-in">
    <router-view />
  </Transition>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
.page-enter-active {
  animation: page-in 1s;
}
/* .page-leave-active {
  animation: page-in 0.5s reverse;
} */
@keyframes page-in {
  0% {
    transform: scale(0.8, 0.7);
  }
  /* 50% {
    transform: scale(1.25);
  } */
  100% {
    transform: scale(1, 1);
  }
}
</style>