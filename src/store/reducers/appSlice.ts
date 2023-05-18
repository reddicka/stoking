import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LOCALES } from "../../languages/locales"
import { AppDispatch } from "../store"


const initialState = {
    initialized: false,
    appLanguage: null as string | null,
    globalError: null as string | null
}
type AppState = typeof initialState

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setInitializedSuccess(state: AppState) {
            state.initialized = true
        },
        setAppLanguage(state: AppState, action: PayloadAction<string>) {
            state.appLanguage = action.payload
        },
        setGlobalError(state: AppState, action: PayloadAction<string | null>) {
            state.globalError = action.payload
        }
    }
})

// экспорт actions (если надо)
export const {} = appSlice.actions

export default appSlice.reducer


/// ====== THUNK-CREATORS ======

// начальная инициализация приложения
export const initializeApp = () => (dispatch: AppDispatch) => {
    dispatch(setAppLanguageOnInit())

    try {
        dispatch(appSlice.actions.setInitializedSuccess())
    } catch (e: unknown) {
        if (e instanceof Error) {
            dispatch(appSlice.actions.setGlobalError(e.message))
        }
    }
}

// установка языка приложения пользователем вручную
export const setAppLanguageByUser = (language: string) => (dispatch: AppDispatch) => {
    dispatch(appSlice.actions.setAppLanguage(language))
    localStorage.setItem("language", language)
}

// установка языка приложения при инициализации
const setAppLanguageOnInit = () => (dispatch: AppDispatch) => {
    /*
        Если язык есть в LocalStorage, то его и устанавливаем в стейт.
        Если в LocalStorage нет записи, то берем язык из браузера.
        Если приложение не поддерживает такой язык, то устанавливаем английский
    */
    let language: string

    if (localStorage.getItem("language")) {
        language = localStorage.getItem("language") as string
    } else {
        language = window.navigator.language.slice(0, 2).toLowerCase()

        if (!Object.values(LOCALES).includes(language)) {
            language = "en"
        }

        localStorage.setItem("language", language)
    }

    dispatch(appSlice.actions.setAppLanguage(language))
}

// установка глобальной ошибки и запуск таймера для ее очистки
export const globalErrorHandler = (error: any) => (dispatch: AppDispatch) => {
    // установка поля ошибки
    dispatch(appSlice.actions.setGlobalError(error.reason.message))
    // очистка поля ошибки
    setTimeout(() => {
        dispatch(appSlice.actions.setGlobalError(null))
    }, 2000)
}
