<template>
  <div class="top-page">
    <div class="top-section"></div>
    <div class="philosophy">
      <h2>理念の文章が入ります</h2>
      <p>
        母体が内装解体専門会社であるからこそ、一般的な施工会社よりも解体費用を抑えることができます。つまり、解体費用を抑えることで、余力のある資金が生まれ、使い道を広げることができるということです。<br />選択のできる予算の使途も合わせてご提案します。
      </p>
    </div>
    <div class="section section-center">
      <h3>
        建築デザインああああああああああああああああうううううううううううううう
      </h3>
      <p>
        タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
      </p>
    </div>
    <div class="section">
      <h3>経営理念 PHILOSOPHY</h3>
      <div class="two-columns">
        <div class="column">
          <img src="@/assets/img/sec-img02.png" alt="" />
        </div>
        <div class="column">
          <p>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          </p>
        </div>
      </div>
      <div class="two-columns">
        <!-- mobileでは画像を上にしたい -->
        <div class="column is-sp">
          <img src="@/assets/img/sec-img02.png" alt="" />
        </div>
        <div class="column">
          <p>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          </p>
        </div>
        <!-- pcでは画像を右にしたい -->
        <div class="column is-pc">
          <img src="@/assets/img/sec-img02.png" alt="" />
        </div>
      </div>
      <div class="two-columns">
        <div class="column">
          <div class="column-image">
            <img src="@/assets/img/sec-img02.png" alt="" />
          </div>
          <h4>テキストが入ります。</h4>
          <p>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          </p>
        </div>
        <div class="column">
          <div class="column-image">
            <img src="@/assets/img/sec-img02.png" alt="" />
          </div>
          <h4>テキストが入ります。</h4>
          <p>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          </p>
        </div>
      </div>
      <div class="two-columns">
        <div class="column">
          <h4>テキストが入ります。</h4>
          <p>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          </p>
        </div>
        <div class="column">
          <BasicTable :contents="TableContents" class="table-content" />
        </div>
      </div>
    </div>
    <hr />
    <div class="section">
      <h3>事業目的 VISION</h3>
      <div class="three-columns">
        <div class="column">
          <div class="column-image">
            <img src="@/assets/img/sec-img02.png" alt="" />
          </div>
          <p>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          </p>
          <div class="link">
            <LinkButton />
          </div>
        </div>
        <div class="column">
          <div class="column-image">
            <img src="@/assets/img/sec-img02.png" alt="" />
          </div>
          <p>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          </p>
          <div class="link">
            <LinkButton />
          </div>
        </div>
        <div class="column">
          <div class="column-image">
            <img src="@/assets/img/sec-img02.png" alt="" />
          </div>
          <p>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          </p>
          <div class="link">
            <LinkButton />
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="section">
      <h3>事業使命 MISSION</h3>
      <div class="four-columns">
        <div class="column">
          <div class="num-text">
            <CircleNumber text="1" />
            <h4>技術確認</h4>
          </div>
          <div class="column-image">
            <img src="@/assets/img/sec-img02.png" alt="" />
          </div>
          <p>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          </p>
        </div>
        <div class="column">
          <div class="num-text">
            <CircleNumber text="1" />
            <h4>技術確認</h4>
          </div>
          <div class="column-image">
            <img src="@/assets/img/sec-img02.png" alt="" />
          </div>
          <p>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          </p>
        </div>
        <div class="column">
          <div class="num-text">
            <CircleNumber text="1" />
            <h4>技術確認</h4>
          </div>
          <div class="column-image">
            <img src="@/assets/img/sec-img02.png" alt="" />
          </div>
          <p>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          </p>
        </div>
        <div class="column">
          <div class="num-text">
            <CircleNumber text="1" />
            <h4>技術確認</h4>
          </div>
          <div class="column-image">
            <img src="@/assets/img/sec-img02.png" alt="" />
          </div>
          <p>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div class="section">
      <h3>情報技術とデザインと思想</h3>
      <div class="five-columns">
        <div class="column">
          <div class="card">
            <img src="@/assets/img/sec-img02.png" alt="" />
            <div class="card-description">
              <h3>テキスト</h3>
              <p>
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src="@/assets/img/sec-img02.png" alt="" />
            <div class="card-description">
              <h3>テキスト</h3>
              <p>
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src="@/assets/img/sec-img02.png" alt="" />
            <div class="card-description">
              <h3>テキスト</h3>
              <p>
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src="@/assets/img/sec-img02.png" alt="" />
            <div class="card-description">
              <h3>テキスト</h3>
              <p>
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src="@/assets/img/sec-img02.png" alt="" />
            <div class="card-description">
              <h3>テキスト</h3>
              <p>
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="section">
      <h3>デザインの概要</h3>
      <ResponsiveTable class="responsive-table">
        <template #head>
          <th>空間に与える印象</th>
          <th>写真</th>
          <th>使用のポイント</th>
        </template>
        <template #content>
          <tr>
            <td>空間を和らげ、安らぎを感じる</td>
            <td>
              <img src="@/assets/img/sec-img02.png" alt="" />
            </td>
            <td>
              昨今、情報技術は目まぐるしい勢いで進化を続け、インダーネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる兵法量は江戸時代の1年分とも言われています。
            </td>
          </tr>
          <tr>
            <td>空間を和らげ、安らぎを感じる</td>
            <td><img src="@/assets/img/sec-img02.png" alt="" /></td>
            <td>
              昨今、情報技術は目まぐるしい勢いで進化を続け、インダーネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる兵法量は江戸時代の1年分とも言われています。
            </td>
          </tr>
          <tr>
            <td>空間を和らげ、安らぎを感じる</td>
            <td><img src="@/assets/img/sec-img02.png" alt="" /></td>
            <td>
              昨今、情報技術は目まぐるしい勢いで進化を続け、インダーネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる兵法量は江戸時代の1年分とも言われています。
            </td>
          </tr>
          <tr>
            <td width="280px">空間を和らげ、安らぎを感じる</td>
            <td><img src="@/assets/img/sec-img02.png" alt="" /></td>
            <td>
              昨今、情報技術は目まぐるしい勢いで進化を続け、インダーネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる兵法量は江戸時代の1年分とも言われています。
            </td>
          </tr>
        </template>
        <template #sp-table>
          <tr>
            <th>空間を和らげ、安らぎを感じる</th>
          </tr>
          <tr>
            <td>
              <img src="@/assets/img/sec-img02.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              昨今、情報技術は目まぐるしい勢いで進化を続け、インダーネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる兵法量は江戸時代の1年分とも言われています。
            </td>
          </tr>
          <tr>
            <th>空間を和らげ、安らぎを感じる</th>
          </tr>
          <tr>
            <td>
              <img src="@/assets/img/sec-img02.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              昨今、情報技術は目まぐるしい勢いで進化を続け、インダーネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる兵法量は江戸時代の1年分とも言われています。
            </td>
          </tr>
          <tr>
            <th>空間を和らげ、安らぎを感じる</th>
          </tr>
          <tr>
            <td>
              <img src="@/assets/img/sec-img02.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              昨今、情報技術は目まぐるしい勢いで進化を続け、インダーネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる兵法量は江戸時代の1年分とも言われています。
            </td>
          </tr>
          <tr>
            <th>空間を和らげ、安らぎを感じる</th>
          </tr>
          <tr>
            <td>
              <img src="@/assets/img/sec-img02.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              昨今、情報技術は目まぐるしい勢いで進化を続け、インダーネットでは、1日に膨大な量の情報が飛び交っています。インターネットで現代人が1日に触れる兵法量は江戸時代の1年分とも言われています。
            </td>
          </tr>
        </template>
      </ResponsiveTable>
    </div>
    <hr />
    <div class="section">
      <h3>デザイン受賞歴</h3>
      <p class="design-award">
        タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
      </p>
      <div class="award-list">
        <p>2012年8月</p>
        <div>
          <p>・JDC金賞受 居酒屋まる</p>
          <p>・JDG審査委員特別賞 大湊都美術館 まなとぴあ</p>
        </div>
      </div>
      <div class="award-list">
        <p>2012年8月</p>
        <div>
          <p>・JDC金賞受 居酒屋まる</p>
          <p>・JDG審査委員特別賞 大湊都美術館 まなとぴあ</p>
        </div>
      </div>
      <div class="award-list">
        <p>2012年8月</p>
        <div>
          <p>・JDC金賞受 居酒屋まる</p>
          <p>・JDG審査委員特別賞 大湊都美術館 まなとぴあ</p>
        </div>
      </div>
    </div>
    <hr />
    <div class="section">
      <h3>代表デザイン事例</h3>
      <div class="chip-list">
        <BasicChip text="店舗" />
        <BasicChip text="テナント" />
        <BasicChip text="オフィス" />
        <BasicChip text="インテリア" />
        <BasicChip text="什器" />
      </div>
      <div>
        <h3>店の名前が入ります</h3>
        <CarouselSlider :images="imageList" />
        <div class="slide-description">
          <p>
            スライドスライドスライドスライドスライドスライドスライドスライドスライドスライドスライドスライドスライドスライドスライドスライドスライドスライドスライドスライドスライドスライドスライドスライド
          </p>
        </div>
      </div>
    </div>
    <div class="section">
      <h4 class="point">製作時のポイント</h4>
      <div class="accordion-area">
        <BasicAccordion
          text="製作時のポイント"
          description="アコーディオン展開アコーディオン展開アコーディオン展開アコーディオン展開"
        />
        <BasicAccordion
          text="製作時のポイント"
          description="アコーディオン展開アコーディオン展開アコーディオン展開アコーディオン展開"
        />
        <BasicAccordion
          text="製作時のエピソード"
          description="アコーディオン展開アコーディオン展開アコーディオン展開アコーディオン展開"
        />
      </div>
    </div>
    <div class="section">
      <h3>未来の展望</h3>
      <div class="future">
        <p>
          タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります
        </p>
      </div>
      <div class="future-button">
        <LinkButton
          text="お問合せ・お見積り"
          to="#"
          width="280px"
          height="80px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { BasicAccordion } from "../components/atoms/Accordion";
import { BasicChip } from "../components/atoms/Chip";
import { BasicTable, ResponsiveTable } from "../components/atoms/Table";
import { CarouselSlider } from "../components/atoms/Carousel";
import { CircleNumber } from "../components/atoms/Number";
import { LinkButton } from "../components/atoms/Button";

export default {
  components: {
    BasicAccordion,
    BasicChip,
    BasicTable,
    CarouselSlider,
    CircleNumber,
    LinkButton,
    ResponsiveTable,
  },
  setup() {
    const TableContents = reactive([
      {
        title: "竣工年",
        text: "2017年",
      },
      { title: "計画地", text: "愛知県名古屋市" },
      { title: "構造・面積", text: "木造2階建 96㎡" },
      { title: "工期", text: "2017年9月~11月" },
      { title: "業務内容", text: "インテリアデザイン、施工マネジメント" },
      { title: "クライアント", text: "個人" },
    ]);
    const imageList = ref([
      "sec-img02.png",
      "sec-img02.png",
      "sec-img02.png",
      "sec-img02.png",
    ]);
    return { TableContents, imageList };
  },
};
</script>
  
<style lang="scss" scoped>
.top {
  &-section {
    width: 100%;
    height: 600px;
    background-image: url("@/assets/img/sec-img02.png");
    background-size: cover;
    position: relative;
    @include mobile {
      background-position: center bottom;
    }
  }
}
.philosophy {
  position: absolute;
  top: 10%;
  margin-top: 50px;
  right: 0%;
  margin-right: 120px;
  color: white;
  h2 {
    font-size: 34px;
  }
  p {
    font-size: 16px;
    width: 400px;
    padding-top: 40px;
  }
  @include mobile {
    margin-right: 0px;
    padding: 20px;
    h2 {
      font-size: 32px;
      text-align: center;
    }
    p {
      width: 100%;
    }
  }
}
.section {
  margin: 100px 100px;
  h3 {
    font-size: 30px;
    text-align: center;
    padding-bottom: 40px;
    font-weight: normal;
  }
  @include mobile {
    margin: 100px 20px;
  }
}
.section-center {
  padding: 0px 10%;
  @include mobile {
    padding: 0;
  }
}
@mixin flex-column($gap, $num) {
  display: flex;
  gap: $gap;
  padding: 30px 0;
  @include mobile {
    display: block;
  }
  .column {
    width: calc(100% / $num);

    @include mobile {
      width: 100%;
      p {
        padding-top: 20px;
      }
    }
  }
}
.column-image {
  margin: 50px 0;
}
.two-columns {
  align-items: center;
  justify-content: center;
  @include flex-column(80px, 2);
  h4 {
    font-size: 28px;
    padding-bottom: 20px;
  }
}
.three-columns {
  @include flex-column(40px, 3);
}
.four-columns {
  @include flex-column(30px, 4);
}
.five-columns {
  justify-content: center;
  flex-wrap: wrap;
  @include flex-column(30px, 4);
}

.num-text {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
  h4 {
    font-size: 30px;
    font-weight: normal;
  }
}

.responsive-table {
  th {
    background: #c0c0c0;
    font-weight: normal;
    padding: 10px 20px;
    color: white;
  }
  td {
    padding: 10px 20px;
    img {
      width: 150px;
      height: 100px;
      @include mobile {
        width: 100%;
        height: auto;
      }
    }
  }
}
.design-award {
  text-align: center;
}
.award-list {
  width: 850px;
  display: flex;
  gap: 120px;
  border-bottom: 1px solid #c0c0c0;
  margin: 40px auto;
  padding-bottom: 40px;
  @include mobile {
    width: 100%;
    display: block;
    padding-bottom: 0px;
    p {
      margin-bottom: 10px;
    }
  }
}
.chip-list {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 50px;
  flex-wrap: wrap;
}
.slide-description {
  padding: 10px 20px;
  border: 1px solid gray;
  max-width: 880px;
  margin: 0 auto;
}
.point {
  font-size: 32px;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
  font-weight: normal;
}

.future {
  margin-bottom: 80px;
  &-button {
    a {
      margin: 0 auto;
    }
  }
}
img {
  width: 100%;
  height: auto;
}
.link {
  a {
    margin: 10px auto;
  }
}
.table-content {
  width: 450px;
  @include mobile {
    margin-top: 30px;
    width: 100%;
  }
}
.card {
  background: #c0c0c0;
  max-width: 300px;
  @include mobile {
    margin: 20px auto;
    max-width: none;
    width: 100%;
  }
  img {
    max-width: 300px;
    height: 170px;
    @include mobile {
      max-width: none;
      width: 100%;
    }
  }
  &-description {
    padding: 30px;
  }
}
</style>