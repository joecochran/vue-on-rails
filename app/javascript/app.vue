<template>
  <div id="app">
    <LayoutHeader>
      Rails + Vue.js boilerplate
    </LayoutHeader>
    <div class="Container">
      <RouterView />
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
body {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0b0c0c;
  font-weight: 400;
  margin: 0;
}
.Container {
  max-width: 700px;
  margin: 0 auto;
}
</style>
