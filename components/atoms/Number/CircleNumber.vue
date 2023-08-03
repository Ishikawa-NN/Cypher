<template>
  <div class="circle-number">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "1" },
  },
};
</script>
  
  <style lang="scss" scoped>
.circle-number {
  background: gray;
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>