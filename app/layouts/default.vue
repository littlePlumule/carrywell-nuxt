<template>
  <div>
    <TheHeader />
    <main>
      <TheBanner :title="bannerTitle">
        <div v-if="isHome">
          <section class="main-banner">
            <div class="main-banner__slogan">
              <h2 ref="sloganTitle" class="main-banner__slogan-title hl2">
                品味隨行，質感從錢包開始
              </h2>
              <p ref="sloganText" class="main-banner__slogan-text hl4">
                Less is More，你的極簡錢包。
              </p>
              <NuxtLink to="/product">
                <span
                  ref="sloganButton"
                  class="main-banner__slogan-button secondary-button hl4"
                  >Shop Now</span
                >
              </NuxtLink>
            </div>
          </section>
        </div>
      </TheBanner>
      <div :class="{ 'product-container container': showSidebar }">
        <div v-if="showSidebar" class="sidebar-wrapper" ref="sidebarEl">
          <ProductSidebar />
        </div>
        <slot />
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '~/components/shared/TheHeader.vue'
import TheBanner from '~/components/shared/TheBanner.vue'
import TheFooter from '~/components/shared/TheFooter.vue'
import ProductSidebar from '~/components/product/ProductSidebar.vue'
import { useAnimations } from '~/composables/useAnimations'

const route = useRoute()
const error = useError()
const { playHomeBanner, playSidebar } = useAnimations()

const bannerTitle = computed(() => {
  if (error.value) {
    return 'Not Found'
  }

  const title = route.meta.bannerTitle
  return typeof title === 'string' ? title : 'Banner'
})

const isHome = computed(() => route.path === '/')

const showSidebar = computed(() => !!route.meta.sidebar)

const sidebarEl = ref<HTMLElement | null>(null)

const sloganTitle = ref<HTMLElement | null>(null)
const sloganText = ref<HTMLElement | null>(null)
const sloganButton = ref<HTMLElement | null>(null)

watch(
  showSidebar,
  async (val) => {
    if (!val) return
    await nextTick()
    if (!sidebarEl.value) return
    playSidebar(sidebarEl.value)
  },
  { immediate: true },
)

watch(
  isHome,
  async (val) => {
    if (!val) return
    await nextTick()
    if (!sloganTitle.value || !sloganText.value || !sloganButton.value) return

    playHomeBanner(sloganTitle.value, sloganText.value, sloganButton.value)
  },
  { immediate: true },
)

onMounted(async () => {
  await nextTick()

  if (
    isHome.value &&
    sloganTitle.value &&
    sloganText.value &&
    sloganButton.value
  ) {
    playHomeBanner(sloganTitle.value, sloganText.value, sloganButton.value)
  }

  if (showSidebar.value && sidebarEl.value) {
    playSidebar(sidebarEl.value)
  }
})
</script>

<style lang="scss">
.product-container {
  display: flex;
  justify-content: space-between;
  margin-block: var(--xxl);
  position: relative;
  gap: 20px;
}

.sidebar-wrapper {
  flex: 1;
  flex-basis: 200px;
}

@media screen and (max-width: 768px) {
  .product-container {
    flex-direction: column;
    margin: unset;
    margin-bottom: var(--xxl);
  }
}
</style>
