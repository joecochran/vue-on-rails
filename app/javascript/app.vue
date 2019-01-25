<template>
  <div id="app">
    <PageHeader>
        Rails + Vue.js boilerplate
    </PageHeader>
    <div class="Container">
      <BaseInput label="Name" />
      <BaseButton type="button" text="Submit" />
    </div>
    
  </div>
</template>

<script>
import { BaseButton, BaseInput } from './components/Base';
import { PageHeader } from './components/Page';

export default {
  computed: {
    message() {
      return this.$store.state.message
    }
  },
  components: {
    BaseButton,
    BaseInput,
    PageHeader
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
  margin: 0;
}
.Container {
  max-width: 700px;
  margin: 0 auto;
}
</style>
