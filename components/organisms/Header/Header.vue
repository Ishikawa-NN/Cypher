<template>
  <header class="header">
    <!-- pcのヘッダー -->
    <div class="pc-header">
      <nav class="nav">
        <ul class="nav-list">
          <li v-for="(page, key) in pageList" :key="key">
            <nuxt-link :to="page.to">{{ page.title }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <!-- spのヘッダー -->
    <div class="sp-header">
      <button @click="isClickMenu" class="menu-button">
        <img src="@/assets/svg/hamburger.svg" alt="" class="stroke" />
      </button>
      <div v-show="isOpenedMenu" class="display-menu">
        <ul class="nav-list-sp">
          <li v-for="(page, key) in pageList" :key="key">
            <nuxt-link :to="page.to">{{ page.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  setup() {
    const isOpenedMenu = ref(false);
    const isClickMenu = () => {
      isOpenedMenu.value = !isOpenedMenu.value;
    };
    const pageList = reactive([
      { to: "#", title: "ホーム" },
      { to: "#", title: "私達について" },
      { to: "#", title: "選ばれる理由" },
      { to: "#", title: "ワークフロー" },
      { to: "#", title: "FAQ" },
      { to: "#", title: "事例紹介" },
      { to: "#", title: "会社概要" },
      { to: "#", title: "お問合せ・お見積" },
    ]);
    return { pageList, isOpenedMenu, isClickMenu };
  },
};
</script>



<style lang='scss' scoped>
header {
  position: absolute;
  z-index: 10;
  width: 100%;
}

.pc-header {
  display: block;
  @include mobile {
    display: none;
  }
}

.sp-header {
  width: 100%;
  display: none;
  @include mobile {
    display: block;
  }
}

.nav {
  &-list {
    display: flex;
    gap: 20px;
    padding: 20px;
    a {
      color: #fff;
      &:hover {
        opacity: 0.7;
      }
    }
    &-sp {
      display: block;
      padding: 50px;
      li {
        padding-bottom: 20px;
      }
      a {
        color: #2d2d2d;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
}

.menu-button {
  width: 32px;
  height: 32px;
  position: fixed;
  right: 0;
  margin: 10px;
  z-index: 10;
}

.display-menu {
  z-index: 9;
  display: initial;
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: auto;
  top: 0;
  right: 0;
}
</style>