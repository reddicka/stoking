import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppDispatch } from "../store"
import { productAPI } from "../../api/api"
import { BrandCardType } from "../../types/brandCard"


const initialState = {
    brands: [] as BrandCardType[],
    isLoading: false,
    error: null as string | null
}
type CoopState = typeof initialState

export const coopSlice = createSlice({
    name: "coop",
    initialState,
    reducers: {
        brandsFetching(state: CoopState) {
            state.isLoading = true
        },
        brandsFetchingSuccess(state: CoopState, action: PayloadAction<BrandCardType[]>) {
            state.isLoading = false
            state.error = null
            state.brands = action.payload
        },
        brandsFetchingError(state: CoopState, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

// экспорт actions (если надо)
export const {} = coopSlice.actions

export default coopSlice.reducer


/// ====== THUNK-CREATORS ======

// запросить список брендов
export const fetchBrands = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(coopSlice.actions.brandsFetching())
        const response = await productAPI.brandsCards()

        const { items, _links, _meta } = response

        dispatch(coopSlice.actions.brandsFetchingSuccess(items))
    } catch (e: any) {
        dispatch(coopSlice.actions.brandsFetchingError(e.message))
    }
}
