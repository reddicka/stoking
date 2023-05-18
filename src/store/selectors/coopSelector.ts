import { RootState } from "../store"

export const getBrandsSelector = (state: RootState) => state.coop.brands
export const getLoadingStatusSelector = (state: RootState) => state.coop.isLoading
export const getErrorSelector = (state: RootState) => state.coop.error