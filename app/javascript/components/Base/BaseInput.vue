<template>
  <label class="BaseInput">
    <div class="BaseInput__label">{{ label }}</div>
    <input type="text" class="BaseInput__input">
  </label>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    label: String,
    hint: String,
  }
}
</script>


<style lang="scss" scoped>
  .BaseInput {
    display: block;
    margin-bottom: 20px;

    &__label {
      color: #0b0c0c;
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 5px;
    }

    &__input {
      display: block;
      width: 100%;
      appearance: none;
      border: 2px solid #0b0c0c;
      height: 40px;
      padding: 5px;
      box-sizing: border-box;
      font-size: 16px;

      &:focus {
        outline: 3px solid #ffbf47;
        outline-offset: 0;
      }
    }
  }
</style>
