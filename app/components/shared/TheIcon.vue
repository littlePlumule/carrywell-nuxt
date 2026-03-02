<template>
  <Icon :name="realIconName" />
</template>

<script setup lang="ts">
const iconMap = {
  topArrow: 'mingcute:top-line',
  downArrow: 'mingcute:down-line',
  leftArrow: 'mingcute:left-line',
  rightArrow: 'mingcute:right-line',
  github: 'jam:github',
  instagram: 'jam:instagram',
  menu: 'material-symbols:menu',
  favoriteOutline: 'mdi:heart-outline',
  favorite: 'mdi:heart',
  bag: 'uil:cart',
  cart: 'mdi:cart',
  profile: 'gg:profile',
  remove: 'mdi:remove',
} as const

type IconName = keyof typeof iconMap

const props = defineProps<{
  name: IconName | string
}>()

const realIconName = computed(() => {
  return iconMap[props.name as IconName] || props.name
})
</script>
