<template>
  <div id="app">
    <input type="text">

    <BaseButton type="button" text="Submit" />
  </div>
</template>

<script>
import { BaseButton } from './components/Base';

export default {
  computed: {
    message() {
      return this.$store.state.message
    }
  },
  components: {
    BaseButton
  }
}
</script>

<style>
body {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0b0c0c;
  font-weight: 400;
}
</style>
