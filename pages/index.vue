<template>
  <div class="top-page">
    <div class="top-section flash-3"></div>
    <transition name="fade">
      <div class="logo" v-show="section1">
        <img class="logo-svg" src="@/assets/svg/logo.svg" alt="cypher" />
        <img
          class="logo-text"
          src="@/assets/svg/logo-text.svg"
          alt="interior design & Construction"
        />
      </div>
    </transition>
    <div class="scroll-area">
      <img class="flash" src="@/assets/svg/scroll.svg" alt="" />
      <p>
        建築デザインあああああああああああああああああああああああああああああああああ
        ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
      </p>
    </div>
    <section class="concept-section" data-concept="01">
      <div class="c-inner">
        <transition name="float">
          <div class="-details" v-show="section2step1">
            <h2>内装解体をデザインする</h2>
            <p>
              母体が母体が母体が母体が母体が母体が母体が母体が母体が母体が母体が母体が
            </p>
            <div class="link">
              <nuxt-link to="#">read more</nuxt-link>
            </div>
          </div>
        </transition>
      </div>
    </section>

    <section class="concept-section" data-concept="02">
      <div class="c-inner">
        <transition name="float">
          <div class="-details right-detail" v-show="section2step2">
            <h2>予算もデザインする</h2>
            <p>私たちは</p>
            <div class="link">
              <nuxt-link to="#">read more</nuxt-link>
            </div>
          </div>
        </transition>
      </div>
    </section>

    <section class="concept-section" data-concept="03">
      <transition name="float">
        <div class="c-inner" v-show="section2step4">
          <div class="-details">
            <h2>情報技術とデザインと思想</h2>
            <p>私たちは</p>
            <div class="link">
              <nuxt-link to="#">read more</nuxt-link>
            </div>
          </div>
          <div class="img">
            <img src="@/assets/svg/mark.svg" alt="" />
          </div>
        </div>
      </transition>
    </section>
    <section class="concept-section" data-concept="other">
      <div class="c-inner">
        <div class="-details">
          <div class="item">
            <nuxt-link to="#">
              <h3>建築の流れ</h3>
              <img src="@/assets/img/flow-img.png" class="flash-2" alt="" />
              <p>
                CYPHERは、企画・デザイン・設計・施工・アフターメンテナンスまで一貫して携わりながら、情報技術の負荷価値もご提供していきます。
              </p>
            </nuxt-link>
          </div>
          <div class="item">
            <nuxt-link to="#">
              <h3>過去の事例</h3>
              <img src="@/assets/img/jirei-img.png" class="flash-2" alt="" />
              <p>
                情報技術とデザイン思想を結び付けたCYPHERの事例をご覧ください。
              </p>
            </nuxt-link>
          </div>
          <div class="item">
            <nuxt-link to="#">
              <h3>お問合せ・お見積</h3>
              <img src="@/assets/img/contact-img.png" class="flash-2" alt="" />
              <p>CYPHERへのアクセスとなります。</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="news-section">
      <div class="c-inner">
        <h3 class="news-section__title">NEWS</h3>
        <div class="news-section__box">
          <ul class="news-list">
            <li v-for="(page, key) in newsList" :key="key">
              <nuxt-link :to="page.to">
                <div class="img">
                  <img :src="page.src" alt="" />
                </div>
                <div class="content">
                  <span class="date">{{ page.date }}</span>
                  <h4 class="title">{{ page.title }}</h4>
                  <p class="text">{{ page.text }}</p>
                </div>
              </nuxt-link>
            </li>
          </ul>
          <div class="more">
            <nuxt-link to="https://nuxtjs.org"> read more </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<script >
export default {
  setup() {
    onMounted(() => {
      window.addEventListener("scroll", getScroll);
      setTimeout(() => {
        section1.value = true;
      }, 1000);
    });
    const scrollY = ref(0);
    const getScroll = () => {
      scrollY.value = window.scrollY;

      if (scrollY.value > 400) {
        section2step1.value = true;
      }
      if (scrollY.value > 1500) {
        section2step2.value = true;
      }
      if (scrollY.value > 2000) {
        section2step3.value = true;
      }
      if (scrollY.value > 2500) {
        section2step4.value = true;
      }
    };
    const section1 = ref(false);
    const section2step1 = ref(false);
    const section2step2 = ref(false);
    const section2step3 = ref(false);
    const section2step4 = ref(false);

    const newsList = reactive([
      {
        to: "#",
        title: "タイトル",
        date: "20230214",
        text: "テキスト",
        src: "https://placehold.jp/150x150.png",
      },
      {
        to: "#",
        title: "タイトル",
        date: "20230214",
        text: "テキスト",
        src: "https://placehold.jp/150x150.png",
      },
      {
        to: "#",
        title: "タイトル",
        date: "20230214",
        text: "テキスト",
        src: "https://placehold.jp/150x150.png",
      },
    ]);
    return {
      newsList,
      section1,
      section2step1,
      section2step2,
      section2step3,
      section2step4,
      scrollY,
    };
  },
};
</script>

<style lang="scss" scoped>
.top {
  &-section {
    width: 100%;
    height: 800px;
    background-image: url("@/assets/img/kv-img01.png");
    background-size: cover;
    position: relative;
    @include mobile {
      background-position: center bottom;
    }
  }
}
.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  &-svg {
    width: 300px;
    margin-bottom: 80px;
  }
  &-text {
    width: 300px;
  }
}
.concept {
  &-section {
    height: 950px;
    margin-block-end: 70px;

    .c-inner {
      display: flex;
      flex-wrap: wrap;
    }
    &[data-concept="01"] {
      background: url("@/assets/img/sec-img01.png") no-repeat center center /
        cover;
    }
    &[data-concept="02"] {
      background: url("@/assets/img/sec-img02.png") no-repeat center center /
        cover;
      .c-inner {
        flex-direction: row-reverse;
      }
    }
    &[data-concept="03"] {
      background-color: #756d6d;
    }
    &[data-concept="other"] {
      height: auto;
      .-details {
        display: flex;
        width: 100%;
        gap: 20px;
        margin-block-start: 0;
        @include mobile {
          display: block;
        }
        .item {
          width: calc(100%);
          @include mobile {
            margin: 60px 0;
          }
          a {
            color: $colorText;
            &:hover {
              opacity: 0.7;
            }
          }
          h3 {
            text-align: center;
            margin-block-end: 20px;
          }
          img {
            margin-block-end: 40px;
          }
          p {
            font-size: 14px;
            margin-block-end: 0;
          }
        }
      }
    }
    .-details {
      width: contWidth(750, 1920);
      color: #fff;
      margin-block-start: 150px;
      @include mobile {
        width: 100%;
      }
      h2 {
        font-size: 40px;
        margin-block-end: 40px;
      }
      p {
        font-size: 26px;
        margin-block-end: 60px;
      }
      .link {
        text-align: right;
        a {
          color: #fff;
          border-bottom: 1px solid white;
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
    .img {
      width: contWidth(290, 1920);
      margin-inline: auto;
      margin-block-start: 240px;
      @include mobile {
        width: 140px;
        margin-inline: 0;
        margin-block-start: 0;
        margin: 80px auto;
      }
    }
  }
}
.news {
  &-section {
    margin-block: 80px 80px;
    &__title {
      font-size: 36px;
      text-align: center;
      margin-bottom: 60px;
    }
    &__box {
      margin-inline: 60px;
      border: 1px solid #000;
      padding: 20px;
      @include mobile {
        margin-inline: 0px;
        padding: 15px;
      }
      .more {
        text-align: right;
        a {
          font-size: 20px;
          color: $colorText;
          border-bottom: 1px solid black;
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }

  &-list {
    margin-block-end: 60px;
    li {
      padding: 10px;

      a {
        display: flex;
        gap: 40px;
        color: $colorText;
        @include mobile {
          flex-direction: column;
          gap: 20px;
        }
        &:hover {
          opacity: 0.7;
        }
        img {
          width: 260px;
          @include mobile {
            margin-inline: auto;
          }
        }
      }

      .date {
      }
      .title {
        @include mobile {
          margin-block-end: 20px;
        }
      }
      .text {
      }
    }
  }
}
.scroll-area {
  text-align: center;
  img {
    width: 100px;
    margin: 20px auto;
  }
  p {
    margin: 20px auto;
    padding: 0 150px;
    font-weight: bold;
    @include mobile {
      padding: 0 50px;
    }
  }
}
/* 表示時の状態 */
.fade-enter-from {
  opacity: 0;
}
/* 表示時のアクティブ状態 */
.fade-enter-active {
  transition: all 2s;
}
/* 表示時の終了状態 */
.fade-enter-to {
  opacity: 1;
}
/* 非表示時の状態 */
.fade-leave-from {
  opacity: 1;
}
/* 非表示時のアクティブ状態 */
.fade-leave-active {
  transition: all 0.5s;
}
/* 非表示時の終了状態 */
.fade-leave-to {
  opacity: 0;
}

/* 表示時の状態 */
.float-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
/* 表示時のアクティブ状態 */
.float-enter-active {
  transition: all 4s;
}
/* 表示時の終了状態 */
.float-enter-to {
  opacity: 1;
}
/* 非表示時の状態 */
.float-leave-from {
  opacity: 1;
}
/* 非表示時のアクティブ状態 */
.float-leave-active {
  transition: all 2s;
}
/* 非表示時の終了状態 */
.fade-leave-to {
  opacity: 0;
}

.flash {
  animation: flash 1s linear infinite;
}

.flash-2 {
  animation: flash 5s linear infinite;
}
.flash-3 {
  animation: flash-img 10s steps(1, end) infinite;
  // 3枚で10sという意味,4枚なら12sにすれば一枚当たり3s表示
}
@keyframes flash {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

@keyframes flash-img {
  // 3枚を割り算して表示
  0%,
  100% {
    opacity: 1;
    background-image: url("@/assets/img/kv-img01.png");
  }

  66% {
    opacity: 1;
    background-image: url("@/assets/img/flow-img.png");
  }

  33% {
    opacity: 1;
    background-image: url("@/assets/img/jirei-img.png");
  }
}
.right-detail {
  padding-right: 100px;
  @include mobile {
    padding: 0;
  }
}
</style>