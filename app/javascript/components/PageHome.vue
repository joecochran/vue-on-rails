<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.state.message;
    },
  },
};
</script>
