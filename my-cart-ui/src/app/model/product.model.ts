export declare class ProductModel {
    id: number
    watch?: Product[]
    headphones?: Product[]
}

export declare class Product {
    id: number
    name: string
    cost: string
    description: string
    qty?: number
}