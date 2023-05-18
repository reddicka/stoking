import React, { FC } from "react"
import { AppBar, Toolbar, Container, Stack } from "@mui/material"
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs"
import { LanguageSelector } from "../LanguageSelector/LanguageSelector"
import { BrowserView, MobileView } from "react-device-detect"
import { MobileHeader } from "./mobileHeader"
import { DesktopHeader } from "./desktopHeader"


export const Header: FC = () => {
    return (
        <>
            <AppBar position="static">
                <Container>
                    <BrowserView renderWithFragment>
                        <DesktopHeader/>
                    </BrowserView>

                    <MobileView renderWithFragment>
                        <MobileHeader/>
                    </MobileView>

                    <Toolbar>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                            sx={{ width: "100%" }}
                        >
                            <Breadcrumbs/>

                            <LanguageSelector/>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}