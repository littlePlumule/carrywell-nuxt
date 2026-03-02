<template>
  <section id="faq" class="main-faq container">
    <h2 class="main-faq__headline hl3">常見問題</h2>
    <ul class="main-faq__list">
      <li
        v-for="(faq, index) in faqList"
        :key="faq.id"
        class="main-faq__item"
        :class="{ 'main-faq__item--open': openedIndex === index }"
        @click="toggle(index)"
      >
        <div class="main-faq__title">
          <h3 class="main-faq__question hl5">{{ faq.question }}</h3>
          <TheIcon name="downArrow" class="main-faq__icon hl4" />
        </div>
        <p
          :ref="(el) => (answerRefs[index] = el as HTMLElement)"
          class="main-faq__answer hl6"
          :style="{ height: openedIndex === index ? `${heights[index]}px` : 0 }"
        >
          {{ faq.answer }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import TheIcon from '../shared/TheIcon.vue'

interface FAQ {
  id: number
  question: string
  answer: string
}

const faqList: FAQ[] = [
  {
    id: 1,
    question: '錢包是什麼材質製成的？',
    answer:
      '我們的錢包主要使用高品質的真皮（例如：頭層牛皮、二層牛皮）、PU皮革以及特殊的機能性布料。每款產品的材質都會在商品頁面詳細說明，請您在選購前仔細查看。',
  },
  {
    id: 2,
    question: '錢包有保固服務嗎？',
    answer:
      '所有商品提供一年保固，請保存購買憑證。若商品有任何品質問題，我們會為您提供換貨或維修服務。',
  },
  {
    id: 3,
    question: '如何清潔和保養錢包？',
    answer:
      '建議使用乾淨柔軟的布料輕輕擦拭，有污漬時可用專用皮革清潔劑，避免使用水洗或化學藥品，以延長錢包使用壽命。',
  },
  {
    id: 4,
    question: '購買後可以退換貨嗎？',
    answer:
      '本店支持七天鑑賞期內無條件退換貨，商品須保持全新狀態並附完整包裝，有任何問題請在收到商品後盡快聯繫客服。',
  },
  {
    id: 5,
    question: '錢包尺寸和收納空間如何？',
    answer:
      '每款錢包尺寸及收納空間皆在商品詳情頁標示，您可根據需求選擇合適的款式與大小。',
  },
]

const openedIndex = ref<number | null>(0)
const heights = ref<number[]>([])
const answerRefs = ref<HTMLElement[]>([])

function toggle(index: number) {
  openedIndex.value = openedIndex.value === index ? null : index
}

onMounted(() => {
  nextTick(() => {
    heights.value = answerRefs.value.map((el) => el?.scrollHeight ?? 0)
  })
})
</script>

<style lang="scss" scoped>
.main-faq {
  &__item {
    border-bottom: 1px solid var(--regal-blue);
    padding: 8px;
    cursor: pointer;

    &:first-child {
      border-top: 1px solid var(--regal-blue);
    }
  }

  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__question {
    font-weight: var(--bold);
    padding-block: 8px;
    color: var(--nobel);
  }

  &__item--open &__question {
    color: var(--regal-blue);
  }

  &__icon {
    color: var(--nobel);
    transform: rotate(0);
    transition: transform 0.3s;
  }

  &__item--open &__icon {
    color: var(--regal-blue);
    transform: rotate(180deg);
  }

  &__answer {
    letter-spacing: 1.2px;
    position: relative;
    color: var(--regal-blue);
    font-weight: var(--semi-bold);
    overflow: hidden;
    height: 0;
    transition: height 1s;
  }
}
</style>
