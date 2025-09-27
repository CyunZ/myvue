<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <button @click="$router.push('/')">跳转至首页</button>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
