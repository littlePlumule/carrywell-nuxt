export interface ProductColorOption {
  id: string
  image: string
  color: string
}

export interface ProductDescription {
  material: string
  designStyle: string
  cardSlot: number
  banknoteMezzanine: number
  coinBag: string
  size: string
  weight: string
  applicableObjects: string
  colorSelection: ProductColorOption[]
  maintenanceMethod: string
  Origin: string
}

export type ProductCategory =
  | 'short-wallet'
  | 'long-wallet'
  | 'mid-wallet'
  | 'coin-purse'

export interface Product {
  id: string
  category: ProductCategory
  title: string
  price: number
  image: string
  color: string
  description: ProductDescription
}
