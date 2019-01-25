<template>
  <button class="BaseButton">{{ text }}</button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: String,
  }
}
</script>

<style lang="scss" scoped>
.BaseButton {
  background-color: #00823b;
  box-shadow: 0 2px 0 #003618;
  color: #fff;
  text-align: center;
  vertical-align: top;
  cursor: pointer;
  appearance: none;
  border-radius: 3px;
  border: 2px solid transparent;
  padding: 7px 10px;
  margin-top: 0;
  margin-bottom: 22px;
  font-size: 16px;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;

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
