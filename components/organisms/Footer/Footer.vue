<template>
  <footer class="footer">
    <div class="c-inner">
      <div class="logo">
        <img src="@/assets/svg/logo.svg" alt="cypher" />
        <img
          src="@/assets/svg/logo-text.svg"
          alt="interior design & Construction"
        />
      </div>
      <div class="nav">
        <ul class="list">
          <li v-for="(page, key) in pageListFirst" :key="key">
            <nuxt-link :to="page.to">{{ page.title }}</nuxt-link>
          </li>
        </ul>
        <ul class="list">
          <li v-for="(page, key) in pageListSecond" :key="key">
            <nuxt-link :to="page.to">{{ page.title }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="site-info">
        <p>
          建築・建築デザイン・原状回復・内装解体・建物
          解体・アスベスト除去工事はウラシコにお任せく ださい！<br /><br />
          <strong
            >株式会社ウラシコ<br class="is-sp" />CYPHER（サイファー）</strong
          ><br />

          〒454-0982<br />
          愛知県名古屋市中川区西伏屋2丁目617番地<br />
          TEL : 052-655-4146
        </p>
        <div class="sns">
          <a href="" class="icon">
            <img src="@/assets/svg/icon-facebook.svg" alt="facebook" />
          </a>
          <a href="" class="icon">
            <img src="@/assets/svg/icon-instagram.svg" alt="instagram" />
          </a>
          <a href="" class="icon">
            <img src="@/assets/svg/icon-pintarest.svg" alt="pintarest" />
          </a>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>Copyright(c) 店舗設計・デザイン ・施工CYPHER. AllRights Reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  setup() {
    const pageListFirst = reactive([
      { to: "#", title: "ホーム" },
      { to: "#", title: "私達について" },
      { to: "#", title: "選ばれる理由" },
      { to: "#", title: "ワークフロー" },
      { to: "#", title: "FAQ" },
      { to: "#", title: "事例紹介" },
    ]);
    const pageListSecond = reactive([
      { to: "#", title: "会社概要" },
      { to: "#", title: "お問合せ・お見積" },
      { to: "#", title: "個人情報保護法について" },
    ]);
    return { pageListFirst, pageListSecond };
  },
};
</script>



<style lang='scss' scoped>
.footer {
  background-color: #756d6d;
  color: #fff;
}
.c-inner {
  display: flex;
  justify-content: center;
  padding-block: 60px;
  @include mobile {
    flex-direction: column;
    padding-block: 30px;
  }
}
.logo {
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  @include mobile {
    justify-content: center;
    margin-inline: auto;
    width: vwSP(250);
  }
  img {
    width: 70%;
    &:last-of-type {
      width: 140px;
      @include mobile {
        width: vwSP(150);
      }
    }
  }
}

.nav {
  display: flex;
  gap: 60px;
  margin-inline: 60px;
  @include mobile {
    flex-direction: column;
    gap: 10px;
    margin-inline: 30px;
    margin-block: 50px;
  }
}
.list {
  & > * + * {
    margin-block-start: 10px;
  }

  li {
    a {
      color: #fff;
    }
  }
}

.site-info {
  width: contWidth(600, 1920);
  @include mobile {
    width: 100%;
  }
  p {
    border: double 5px #fff;
    padding: 15px 10px;
    margin-block-end: 10px;

    strong {
      @include mobile {
        display: inline-block;
        margin-block-end: 20px;
      }
    }
  }
}

.sns {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  @include mobile {
    display: none;
  }
  .icon {
    img {
      width: 45px;
    }
  }
}
.copyright {
  background-color: #fff;
  box-shadow: 0 0 0 100vmax #fff;
  clip-path: inset(0 -100vmax);
  padding-block: 20px;
  p {
    color: $colorText;
    text-align: center;
    box-shadow: 0 0 0 -100vmax;
    font-size: 22px;
    @include mobile {
      font-size: 11px;
    }
  }
}
</style>