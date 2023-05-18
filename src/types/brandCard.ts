export type BrandCardType = {
    id: number
    name: string // ЗиП ПТО
    slug: string // zip-pto
    thumbnail: ThumbnailCardType
}

type ThumbnailCardType = {
    id: number
    date_create: string
    path: string
    name: string
    sizes: {
        item: ThumbnailSizeType[]
    }
}

type SizesType = {
    thumbnail: 150
    medium: 300
    large: 1024
}

type SizesKeysType = keyof SizesType

type ThumbnailSizeType<T extends SizesKeysType = "thumbnail"> = {
    height: SizesType[T]
    width: SizesType[T]
    name: T
    path: string
}

// пример работы
// const asd: ThumbnailSizeType<"medium"> = {
//     height: 300,
//     width: 300,
//     name: "medium",
//     path: "qsdaws"
// }