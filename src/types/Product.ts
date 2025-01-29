export interface Attribute {
    name: string
    value: string
    visible: boolean
    global: boolean
  }
  
  export interface Product{
    _id: string
    productId: number
    type: string
    sku: string
    name: string
    published: boolean
    isFeatured: boolean
    visibilityInCatalog: "visible" | "catalog" | "search" | "hidden"
    shortDescription: string
    description: string
    dateOnSaleTo: Date | null
    dateOnSaleFrom: Date | null
    taxStatus: "taxable" | "shipping" | "none"
    taxClass: string
    inStock: boolean
    stock: number
    lowStockAmount: number | null
    backordersAllowed: boolean
    soldIndividually: boolean
    weight: number | null
    dimensions: {
      length: number | null
      width: number | null
      height: number | null
    }
    allowCustomerReviews: boolean
    purchaseNote: string
    salePrice: number | null
    regularPrice: number
    categories: string[]
    tags: string[]
    images: string[]
    attributes: Attribute[]
  }