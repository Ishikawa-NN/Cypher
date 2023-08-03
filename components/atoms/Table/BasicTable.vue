<template>
  <div>
    <table class="is-pc" border="1">
      <tr v-for="(content, key) in contents" :key="key">
        <th>{{ content.title }}:</th>
        <td>{{ content.text }}</td>
      </tr>
    </table>
    <table class="is-sp" border="1">
      <!-- vue3からtemplate keyは許容されるので無視でOK -->
      <template v-for="(content, key) in contents" :key="key">
        <tr>
          <th>{{ content.title }}:</th>
        </tr>
        <tr>
          <td>{{ content.text }}</td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    contents: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
th {
  background: #c0c0c0;
  font-weight: normal;
  padding: 10px 20px;
}
td {
  padding: 10px 20px;
}
</style>