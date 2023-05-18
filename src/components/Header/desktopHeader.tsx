import React, { FC, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Box, Button, ListItemText, Menu, MenuItem, Stack, Toolbar, Typography, useMediaQuery } from "@mui/material"
import { LogoButton } from "../LogoButton/LogoButton"
import { AsyncSearchInput } from "../AsyncSearchInput/AsyncSearchInput"
import { BasketIcon, BookmarkIcon, BurgerIcon, PhoneIcon, ProfileIcon, StatsIcon, StIcon } from "../icons"
import { FormattedMessage } from "react-intl"


const appButtonsLinks = {
    st: {
        link: "/st",
        icon: <StIcon/>
    },
    profile: {
        link: "/profile",
        icon: <ProfileIcon/>
    },
    stats: {
        link: "/stats",
        icon: <StatsIcon/>
    },
    favorites: {
        link: "/favorites",
        icon: <BookmarkIcon/>
    },
    basket: {
        link: "/basket",
        icon: <BasketIcon/>
    }
}

export const DesktopHeader: FC = () => {
    const [catalogIsOpen, setCatalogIsOpen] = useState(false)

    const isMaxWidth900 = useMediaQuery("(max-width:900px)")
    const catalogButtonRef = useRef(null)

    const toggleCatalogHandler = () => {
        setCatalogIsOpen(prevState => !prevState)
    }

    const catalogItemClickHandler = (target: string) => {
        console.log("ВЫБРАНО: " + target)
        setCatalogIsOpen(false)
    }

    return (
        <>
            <Toolbar>
                <Stack
                    sx={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%", position: "relative",
                        gap: { xs: 1, md: 2 }
                    }}
                >
                    <Box sx={{ ml: "-8px" }}>
                        <LogoButton/>
                    </Box>

                    <Button
                        ref={catalogButtonRef}
                        variant="contained"
                        disableElevation
                        startIcon={<BurgerIcon/>}
                        onClick={toggleCatalogHandler}
                        size={isMaxWidth900 ? "small" : undefined}
                    >
                        <FormattedMessage id="button_catalog" />
                    </Button>

                    <Menu
                        anchorEl={catalogButtonRef.current}
                        open={catalogIsOpen}
                        onClose={toggleCatalogHandler}
                    >
                        <MenuItem onClick={() => catalogItemClickHandler("Сапоги")}>
                            <ListItemText>Сапоги</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => catalogItemClickHandler("Носки")}>
                            <ListItemText>Носки</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => catalogItemClickHandler("Шапка")}>
                            <ListItemText>Шапка</ListItemText>
                        </MenuItem>
                    </Menu>

                    <Box flexGrow="1">
                        <AsyncSearchInput/>
                    </Box>

                    <Button
                        sx={{ whiteSpace: "nowrap" }}
                        href="tel: +78005009052"
                    >
                        {isMaxWidth900 || <PhoneIcon/>}
                        <Typography variant="body2" sx={{ marginLeft: "5px", color: "#838383" }}>
                            8 (800) 500-90-52
                        </Typography>
                    </Button>

                    <Stack direction="row">
                        {
                            Object.values(appButtonsLinks).map(({ link, icon }) => (
                                <Button
                                    key={link}
                                    sx={{ p: 0, minWidth: 0 }}
                                >
                                    <Link
                                        to={link}
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            padding: isMaxWidth900 ? "5px" : "12px"
                                        }}
                                    >
                                        {icon}
                                    </Link>
                                </Button>
                            ))
                        }
                    </Stack>
                </Stack>
            </Toolbar>
        </>
    )
}