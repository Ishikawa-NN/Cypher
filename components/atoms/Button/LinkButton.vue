<template>
  <nuxt-link :to="to" class="link-button">{{ text }}</nuxt-link>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "詳しく見る" },
    to: { type: String, default: "#" },
    color: { type: String, default: "#123567" },
    width: { type: String, default: "160px" },
    height: { type: String, default: "40px" },
  },
};
</script>

<style lang="scss" scoped>
.link-button {
  background: v-bind(color);
  color: white;
  border-radius: 8px;
  width: v-bind(width);
  height: v-bind(height);
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.7;
  }
}
</style>