<template>
  <div>
    <TheHeader />
    <main>
      <TheBanner :title="bannerTitle">
        <template v-if="route.path === '/'" #default>
          <div>
            <section class="main-banner">
              <div class="main-banner__slogan">
                <h2 class="main-banner__slogan-title hl2">
                  品味隨行，質感從錢包開始
                </h2>
                <p class="main-banner__slogan-text hl4">
                  Less is More，你的極簡錢包。
                </p>
                <NuxtLink
                  class="main-banner__slogan-button secondary-button hl4"
                  to="/product"
                >
                  Shop Now
                </NuxtLink>
              </div>
            </section>
          </div>
        </template>
      </TheBanner>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '~/components/shared/TheHeader.vue'
import TheBanner from '~/components/shared/TheBanner.vue'
import TheFooter from '~/components/shared/TheFooter.vue'

const route = useRoute()
const error = useError()

const bannerTitle = computed(() => {
  if (error.value) {
    return 'Not Found'
  }

  const title = route.meta.bannerTitle
  return typeof title === 'string' ? title : 'Banner'
})
</script>
