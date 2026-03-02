<template>
  <div class="footer-wrapper">
    <footer class="main-footer">
      <div class="container-large">
        <div class="main-footer__wrap">
          <nav class="main-footer__navbar">
            <ul class="main-footer__nav-list">
              <li class="main-footer__nav-item">
                <NuxtLink to="/#faq" class="main-footer__nav-link hl6">
                  常見問題
                </NuxtLink>
              </li>
              <li class="main-footer__nav-item">
                <NuxtLink class="main-footer__nav-link hl6" to="/about">
                  品牌介紹
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <nav class="main-footer__terms">
            <ul class="main-footer__terms-list">
              <li class="main-footer__terms-item">
                <NuxtLink to="/" class="main-footer__terms-link hl6">
                  隱私權政策
                </NuxtLink>
              </li>
              <li class="main-footer__terms-item">
                <NuxtLink to="/" class="main-footer__terms-link hl6">
                  免責政策
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
        <div class="main-footer__wrap main-footer__wrap--down">
          <small class="main-footer__copyright hl7"
            >&copy; 2025 CarryWell. All rights reserved.</small
          >
          <ul class="main-footer__follow-list">
            <li class="main-footer__follow-item">
              <a
                href="https://github.com/littlePlumule/carrywell-vue"
                class="main-footer__follow-link"
                target="_blank"
              >
                <TheIcon name="github" class="main-footer__icon hl5" />
              </a>
            </li>
            <li class="main-footer__follow-item">
              <NuxtLink to="/" class="main-footer__follow-link">
                <TheIcon name="instagram" class="main-footer__icon hl5" />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import TheIcon from './TheIcon.vue'
</script>
