<template>
  <div>
    <form>
      <BaseInput label="Name" />
      <BaseButton
        type="button"
        text="Submit"
      />
    </form>
  </div>
</template>

<script>
import { BaseButton, BaseInput } from './Base';

export default {
  components: {
    BaseButton,
    BaseInput,
  },
  computed: {
    message() {
      return this.$store.state.message;
    },
  },
};
</script>
