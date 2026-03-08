<template>
  <main class="about-container container">
    <section class="about">
      <AboutItem
        v-for="aboutItem in aboutList"
        :key="aboutItem.id"
        :image="aboutItem.image"
        :alt="aboutItem.alt"
        :title="aboutItem.title"
        :content="aboutItem.content"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import AboutItem from '~/components/about/AboutItem.vue'
import aboutImage1 from '~/assets/images/about-us.jpg'
import aboutImage2 from '~/assets/images/about-us2.jpg'
import aboutImage3 from '~/assets/images/about-us3.jpg'

definePageMeta({
  bannerTitle: 'About us',
})

interface About {
  id: number
  image: string
  title: string
  alt: string
  content: string[]
}

const aboutList: About[] = [
  {
    id: 1,
    image: aboutImage1,
    alt: 'about us',
    title: '我們的初心與願景',
    content: [
      '我們相信，每個細節都值得被用心對待。從最初對皮革紋理的迷戀，到親手觸摸每一張皮革的溫潤，再到鑽研每一個剪裁與縫線的弧度，CarryWell團隊走遍各地，只為尋找最優質的材料，並與擁有匠心精神的工藝師合作，將這份對美好的堅持，融入到每一款錢包之中。',
      '我們的願景很簡單： 讓CarryWell的錢包，成為您日常生活中不可或缺的質感夥伴，陪伴您承載夢想，展現您的獨特品味，並在每一次的開啟與閉合間，都能感受到那份由內而外的從容與自信。',
    ],
  },
  {
    id: 2,
    image: aboutImage2,
    alt: 'about us',
    title: '品質與工藝的堅持',
    content: [
      '傳承匠心工藝： 每一只 CarryWell 錢包，都凝結著匠師的精湛技藝。從精準的皮革切割，到細膩的邊緣處理，再到手工縫線的紮實與整齊，每一道工序都由經驗豐富的師傅悉心打造，確保產品的耐用性與美觀兼具。',
      '實用設計理念： 我們不僅追求視覺美學，更重視錢包的實用功能。從多層卡位、獨立鈔票夾層、隱藏式口袋，到部分款式整合 RFID 防盜技術，我們反覆考量使用者的日常需求，力求在輕巧與容量之間取得完美平衡，讓您的財物井然有序，安全無憂。',
    ],
  },
  {
    id: 3,
    image: aboutImage3,
    alt: 'about us',
    title: '我們的承諾',
    content: [
      '品質保證： 我們對每一款產品的品質負責，提供一年的非人為損壞保固服務。',
      '貼心服務： 從您瀏覽網站到收到商品，我們都提供完善的客戶服務，解答您的疑問，確保您有愉快的購物體驗。',
      '永續發展： 我們也關注環境永續，部分產品可能採用環保材料或參與碳中和計畫，讓您的品味選擇也能為地球盡一份心力。',
    ],
  },
]
</script>
