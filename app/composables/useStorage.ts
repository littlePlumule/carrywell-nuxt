export function useStorage<T>(key: string, defaultValue: T) {
  const data = useState<T>(key, () => defaultValue)

  if (import.meta.client) {
    onMounted(() => {
      try {
        const saved = localStorage.getItem(key)
        if (saved) {
          data.value = JSON.parse(saved)
        }
      } catch (err) {
        console.warn(`Failed to parse localStorage key: ${key}`)
      }

      watch(
        data,
        (val) => {
          localStorage.setItem(key, JSON.stringify(val))
        },
        { deep: true },
      )
    })
  }

  return data
}
