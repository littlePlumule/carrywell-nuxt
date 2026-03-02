export const categories = [
  { label: '熱門商品', path: 'hot' },
  { label: '皮夾 / 短夾', path: 'short-wallet' },
  { label: '皮夾 / 中夾', path: 'mid-wallet' },
  { label: '皮夾 / 長夾', path: 'long-wallet' },
  { label: '零錢包', path: 'coin-purse' },
] as const
export type CategoryPath = (typeof categories)[number]['path']
