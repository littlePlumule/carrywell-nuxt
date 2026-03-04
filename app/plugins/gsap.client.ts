import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)

    gsap.defaults({
      duration: 0.6,
      ease: 'expo.out',
    })
  }

  return {
    provide: {
      gsap,
      tl: () => gsap.timeline(),
    },
  }
})
