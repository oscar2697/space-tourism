export interface Destination {
    name: string
    images: {
        png: string
        webp: string
    }
    description: string
    distance: string
    travel: string
}

export interface DataType {
    destinations: Destination[]
} 