<template>
  <main class="register container">
    <div class="register__wrap">
      <h2 class="register__title hl4">註冊</h2>
      <Form :validation-schema="registerSchema" class="form" @submit="onSubmit">
        <TheInput type="text" name="name" label="姓名" />
        <TheInput type="text" name="email" label="電子郵件" />
        <TheInput type="password" name="password" label="密碼" />
        <TheInput type="password" name="confirmPassword" label="確認密碼" />
        <button class="form__submit primary-button hl5" type="submit">
          註冊
        </button>
      </Form>
      <NuxtLink class="register__login-button secondary-button hl5" to="/login">
        登入
      </NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import TheInput from '~/components/shared/TheInput.vue'
import { Form } from 'vee-validate'
import { registerSchema } from '~/utils/validate'

definePageMeta({
  bannerTitle: 'Register',
})

const router = useRouter()

function onSubmit() {
  router.push('/')
}
</script>

<style lang="scss" scoped>
.register.container {
  margin-block: var(--xxl);
}

.register__wrap {
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

.register__title {
  margin-bottom: 40px;
  font-weight: var(--semi-bold);
  color: var(--regal-blue);
}

.register__login-button {
  padding: 8px 0;
  width: 100%;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
}
</style>
