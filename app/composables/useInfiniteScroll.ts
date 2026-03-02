import { onMounted, onBeforeUnmount, watch, type Ref } from 'vue'

interface UseInfiniteScrollOptions {
  sentinel: Ref<HTMLElement | null>
  canLoadMore: Ref<boolean>
  onLoadMore: () => void
  rootMargin?: string
  threshold?: number
  enabled?: Ref<boolean>
}

export function useInfiniteScroll({
  sentinel,
  canLoadMore,
  onLoadMore,
  rootMargin = '0px',
  threshold = 0.1,
  enabled,
}: UseInfiniteScrollOptions) {
  let observer: IntersectionObserver | null = null

  const createObserver = () => {
    if (!sentinel.value) return

    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]

        if (
          entry?.isIntersecting &&
          canLoadMore.value &&
          (enabled ? enabled.value : true)
        ) {
          onLoadMore()
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      },
    )

    observer.observe(sentinel.value)
  }

  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  onMounted(createObserver)
  onBeforeUnmount(cleanup)

  watch(sentinel, () => {
    cleanup()
    createObserver()
  })
}
