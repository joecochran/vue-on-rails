<template>
  <button class="BaseButton">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.BaseButton {
  appearance: none;
  background-color: #00823b;
  border-radius: 0;
  border: 2px solid transparent;
  box-shadow: 0 2px 0 #003618;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  font-size: 16px;
  margin-bottom: 22px;
  margin-top: 0;
  padding: 7px 10px;
  position: relative;
  text-align: center;
  vertical-align: top;

  &:hover {
    background-color: #00692f;
  }

  &:active {
    box-shadow: none;
    top: 2px;
  }

  &:focus {
    background-color: #00692f;
    outline: 3px solid #ffbf47;
    outline-offset: 0;
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    background-color: #00823b;
    cursor: default;
    opacity: .5;
    top: 0;
    box-shadow: 0 2px 0 #003618;
  }
}
</style>
