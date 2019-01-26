<template>
  <header class="LayoutHeader">
    <slot />
  </header>
</template>

<style lang="scss" scoped>
.LayoutHeader {
  color: #fff;
  background: #0b0c0c;
  border-bottom: 10px solid #005ea5;
  padding: 10px 30px;
  font-size: 24px;
  line-height: 1.25;
}
</style>
