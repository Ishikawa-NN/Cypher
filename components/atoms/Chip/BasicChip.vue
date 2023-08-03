<template>
  <div class="basic-chip">{{ text }}</div>
</template>
  
  <script>
export default {
  props: {
    text: { type: String, default: "詳しく見る" },
    color: { type: String, default: "#123567" },
  },
};
</script>
  
  <style lang="scss" scoped>
.basic-chip {
  background: v-bind(color);
  color: white;
  padding: 10px 0px;
  width: 140px;
  text-align: center;
}
</style>