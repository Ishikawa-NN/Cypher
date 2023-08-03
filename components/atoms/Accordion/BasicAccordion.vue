<template>
  <div class="contents">
    <button class="basic-accordion" @click="clickAccordion()">
      <p class="text">{{ text }}</p>
      <p class="mark">
        <span v-show="!isAccordion"> + </span>
        <span v-show="isAccordion"> - </span>
      </p>
    </button>
    <div v-show="isAccordion" class="description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "" },
    description: { type: String, default: "" },
  },
  setup() {
    const isAccordion = ref(false);
    const clickAccordion = () => {
      isAccordion.value = !isAccordion.value;
    };
    return { isAccordion, clickAccordion };
  },
};
</script>

<style lang="scss" scoped>
.contents {
  margin: 30px 0px;
}
.basic-accordion {
  width: 100%;
  background: gray;
  display: flex;
  border: none;
  cursor: pointer;
  p {
    font-size: 28px;
    background: none;
  }
  .text {
    width: 95%;
    padding-left: 20px;
    text-align: left;
    color: white;
  }
  .mark {
    color: white;
  }
}
.description {
  background: #c0c0c0;
  padding: 10px 10px 40px 10px;
}
</style>