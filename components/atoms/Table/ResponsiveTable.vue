<template>
  <div>
    <table class="is-pc" border="1">
      <tr>
        <slot name="head"></slot>
      </tr>
      <slot name="content"></slot>
    </table>
    <table class="is-sp" border="1">
      <slot name="sp-table"></slot>
    </table>
  </div>
</template>
  
<script>
export default {};
</script>
  
<style lang="scss" scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
</style>