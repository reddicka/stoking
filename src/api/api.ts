import axios from "axios"
import { BrandCardType } from "../types/brandCard"


export const instance = axios.create({
    baseURL: "https://api.stoking.ru/v1",
})

export type ApiResponseType<I> = {
    items: I
    _links: {
        self: ResponseApiLinkType
        first?: ResponseApiLinkType
        last?: ResponseApiLinkType
        next?: ResponseApiLinkType
        prev?: ResponseApiLinkType
    }
    _meta: {
        currentPage: number
        pageCount: number
        perPage: number
        totalCount: number
    }
}
type ResponseApiLinkType = { href: string }


export const productAPI = {
    brandsCards() {
        return instance
            .get<ApiResponseType<BrandCardType[]>>("/brands", {
                params: {
                    "selection[filter]": "[{\"id\":\"used\",\"value\":1}]",
                    expand: "thumbnail.sizes",
                    fields: "id,name,slug,thumbnail.*",
                    "per-page": 36,
                    page: 1,
                    sort: "-countDeal"
                }
            })
            .then(res => res.data)
    }
}


