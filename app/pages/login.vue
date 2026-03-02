<template>
  <main class="login container">
    <div class="login__wrap">
      <h2 class="login__title hl4">登入</h2>
      <Form class="form" :validation-schema="loginSchema" @submit="onSubmit">
        <TheInput name="email" type="text" label="電子郵件" />
        <TheInput name="password" type="password" label="密碼" />
        <NuxtLink class="form__forget-password hl7" to="/forget-password"
          >忘記密碼
        </NuxtLink>
        <button class="form__submit primary-button hl5" type="submit">
          登入
        </button>
      </Form>
      <NuxtLink
        class="login__register-button secondary-button hl5"
        to="/register"
        >註冊</NuxtLink
      >
    </div>
  </main>
</template>

<script setup lang="ts">
import TheInput from '~/components/shared/TheInput.vue'
import { Form } from 'vee-validate'
import { loginSchema } from '~/utils/validate'

definePageMeta({
  bannerTitle: 'Login',
})

const router = useRouter()

function onSubmit() {
  router.push('/')
}
</script>

<style lang="scss" scoped>
.login.container {
  margin-block: var(--xxl);
}

.login__wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
  min-width: 300px;
  margin: 0 auto;
  padding: 40px 60px;
  background-color: var(--white);
}

.login__title {
  margin-bottom: 40px;
  font-weight: var(--semi-bold);
  color: var(--regal-blue);
}

.login__wrap .form__wrap:last-of-type {
  margin: unset;
}

.login__register-button {
  padding: 8px 0;
  width: 100%;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
}
</style>
