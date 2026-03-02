<template>
  <main class="register container">
    <div class="register__wrap">
      <h2 class="register__title hl4">忘記密碼</h2>
      <Form
        :validation-schema="forgetPasswordSchema"
        class="form"
        @submit="onSubmit"
      >
        <TheInput type="text" name="email" label="電子郵件" />
        <button class="form__submit primary-button hl5" type="submit">
          傳送驗證碼
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
import { forgetPasswordSchema } from '~/utils/validate'

definePageMeta({
  bannerTitle: 'Forget Password',
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
