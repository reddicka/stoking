import { RootState } from "../store";

export const isAppInitializedSelector = (state: RootState) => state.app.initialized
export const getAppLanguageSelector = (state: RootState) => state.app.appLanguage
export const getGlobalErrorSelector = (state: RootState) => state.app.globalError