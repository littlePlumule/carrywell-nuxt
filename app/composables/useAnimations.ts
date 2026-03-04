import { gsap } from 'gsap'

export const useAnimations = () => {
  const pageIn = (el: Element, done: () => void) => {
    const tl = gsap.timeline({ onComplete: done })
    tl.fromTo(
      el,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' },
    )
  }

  const pageOut = (el: Element, done: () => void) => {
    gsap.to(el, { opacity: 0, x: -20, duration: 0.4, onComplete: done })
  }

  const createTimeline = () =>
    gsap.timeline({
      defaults: {
        ease: 'power3.out',
      },
    })

  const playHomeBanner = (
    title: HTMLElement,
    text: HTMLElement,
    button: HTMLElement,
  ) => {
    const tl = createTimeline()

    tl.from(title, {
      y: -60,
      opacity: 0,
      duration: 0.8,
    })
      .from(
        text,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
        },
        '-=0.5',
      )
      .from(
        button,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
        },
        '-=0.4',
      )

    return tl
  }

  const playSidebar = (el: HTMLElement) => {
    return gsap.from(el, {
      x: -30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    })
  }

  return {
    playHomeBanner,
    playSidebar,
    pageIn,
    pageOut,
  }
}
