export const sortOption = ['最新上架', '價格低到高', '價格高到低'] as const
export type SortOption = (typeof sortOption)[number]
