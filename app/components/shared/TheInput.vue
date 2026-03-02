<template>
  <div class="form__wrap">
    <input
      :id="name"
      :type="type"
      :name="name"
      :class="['form__input', { 'not-empty': value }]"
      :value="value"
      v-on="events"
    />
    <label :for="name" class="form__title hl6">{{ label }}</label>
    <span
      class="form__error hl7"
      :style="{ visibility: invalid ? 'visible' : 'hidden' }"
      >{{ errorMessage }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'

export interface Props {
  type?: string
  name: string
  label: string
}
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
})

const { value, meta, errorMessage, handleChange, handleBlur } = useField(
  props.name,
)

const events = {
  change: handleChange,
  input: (e: Event) => handleChange(e, false),
  blur: (e: Event) => handleBlur(e, true),
}

const invalid = computed(() => meta?.touched && !meta?.valid)
</script>
