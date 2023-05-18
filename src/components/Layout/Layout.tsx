import { Outlet } from "react-router-dom"
import { BrowserView, MobileView } from "react-device-detect"
import { MobileBottomNavigation } from "../MobileBottomNavigation/MobileBottomNavigation"
import { FC } from "react"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { Container } from "@mui/material/"


export const Layout: FC = () => {
    return (
        <>
            <Header/>

            <main style={{ overflow: "hidden" }}>
                <Container>
                    <Outlet/>
                </Container>
            </main>

            <BrowserView>
                <Footer/>
            </BrowserView>

            <MobileView>
                <MobileBottomNavigation/>
            </MobileView>
        </>
    )
}