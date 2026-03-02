export const LayoutType = {
  Default: 'default',
  Empty: 'empty',
  Product: 'product',
} as const

export type LayoutType = (typeof LayoutType)[keyof typeof LayoutType]
