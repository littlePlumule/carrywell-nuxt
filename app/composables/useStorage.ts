export function useStorage<T>(key: string, defaultValue: T) {
  const data = useState<T>(key, () => defaultValue)

  if (import.meta.client) {
    const saved = localStorage.getItem(key)
    if (saved) {
      data.value = JSON.parse(saved)
    }

    watch(
      data,
      (val) => {
        localStorage.setItem(key, JSON.stringify(val))
      },
      { deep: true },
    )
  }

  return data
}
