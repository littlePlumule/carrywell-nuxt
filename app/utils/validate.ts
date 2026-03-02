import * as yup from 'yup'

function validEmail() {
  return yup.string().required('必填欄位').email('Email 格式錯誤')
}
function validPassword() {
  return yup.string().required('必填欄位').min(8, '密碼至少 8 個字')
}
function validSame(name: string) {
  return yup
    .string()
    .required('必填欄位')
    .oneOf([yup.ref(name)], '密碼不一致')
}

export const loginSchema = yup.object({
  email: validEmail(),
  password: validPassword(),
})

export const registerSchema = yup.object({
  name: yup.string().required('必填欄位').max(20, '必須在40字以內'),
  email: validEmail(),
  password: validPassword(),
  confirmPassword: validSame('password'),
})

export const forgetPasswordSchema = yup.object({
  email: validEmail(),
})
