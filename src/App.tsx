import React, { FC, Suspense, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "./hooks/redux"
import { globalErrorHandler, initializeApp } from "./store/reducers/appSlice"
import {
    getAppLanguageSelector,
    getGlobalErrorSelector,
    isAppInitializedSelector
} from "./store/selectors/appSelector"
import { Loader } from "./components/Loader/Loader"
import { Layout } from "./components/Layout/Layout"
// локализация
import { IntlProvider } from "react-intl"
import { messages } from "./languages/messages"
import { LOCALES } from "./languages/locales"

// ленивые загрузки
const AuthorizationPage = React.lazy(() => import("./pages/Authorization/Authorization"))
const MainPage = React.lazy(() => import("./pages/Main/Main"))
const PartnershipPage = React.lazy(() => import("./pages/Partnership/Partnership"))
const CatalogPage = React.lazy(() => import("./pages/Catalog/Catalog"))
const BasketPage = React.lazy(() => import("./pages/Basket/Basket"))
const FavoritesPage = React.lazy(() => import("./pages/Favorites/Favorites"))
const ProfilePage = React.lazy(() => import("./pages/Profile/Profile"))
const NotFoundPage = React.lazy(() => import("./pages/NotFound/NotFound"))


export const App: FC = () => {
    let initialized = useAppSelector(isAppInitializedSelector)
    let globalError = useAppSelector(getGlobalErrorSelector)
    let locale = useAppSelector(getAppLanguageSelector)

    const dispatch = useAppDispatch()

    const catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        dispatch(globalErrorHandler(e))
    }

    useEffect(() => {
        dispatch(initializeApp())
        // отловить все не отловленные ошибки
        window.addEventListener("unhandledrejection", catchAllUnhandledErrors)
        return window.removeEventListener("unhandledrejection", catchAllUnhandledErrors)
    }, [])


    if (globalError) return <p>ПРОИЗОШЛА ОШИБКА</p>
    if (!initialized) return <Loader/>
    if (!locale) return <p>ЯЗЫК СЛОМАЛСЯ((</p>

    return (
        <IntlProvider
            messages={messages[locale]}
            locale={locale}
            defaultLocale={LOCALES.RUSSIAN}
        >
            <Suspense
                fallback={<Loader/>}
            >
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<MainPage/>}/>

                        <Route path="auth" element={<AuthorizationPage/>}/>
                        <Route path="partnership" element={<PartnershipPage/>}/>
                        <Route path="catalog" element={<CatalogPage/>}/>
                        <Route path="basket" element={<BasketPage/>}/>
                        <Route path="favorites" element={<FavoritesPage/>}/>
                        <Route path="profile" element={<ProfilePage/>}/>

                        <Route path="*" element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </IntlProvider>
    )
}
