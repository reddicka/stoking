import React, { FC, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FormattedMessage } from "react-intl"
import {
    Button,
    Divider,
    Drawer,
    IconButton, Link as MaterialLink,
    List,
    ListItem,
    ListItemButton, ListItemText,
    Stack,
    Toolbar,
    Typography
} from "@mui/material"
import { LogoButton } from "../LogoButton/LogoButton"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { AsyncSearchInput } from "../AsyncSearchInput/AsyncSearchInput"


export const MobileHeader: FC = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false)

    const navigate = useNavigate()

    const closeBurgerHandler = () => {
        setIsBurgerOpen(false)
    }

    const openBurgerHandler = () => {
        setIsBurgerOpen(true)
    }

    const onClickBurgerItemHandler = (path: string) => {
        setIsBurgerOpen(false)
        navigate(path)
    }

    const mobileMenuLinks = {
        st_page: { id: 5, path: "/st", label: "st_page" },
        stats_page: { id: 7, path: "/stats", label: "stats_page" },
        partnership_page: { id: 10, path: "/partnership", label: "partnership_page" },
        delivery_page: { id: 11, path: "/delivery", label: "delivery_page" },
        payment_page: { id: 12, path: "/payment", label: "payment_page" },
        contacts_page: { id: 13, path: "/contacts", label: "contacts_page" },
        offer_page: { id: 14, path: "/offer", label: "offer_page" },
        privacy_page: { id: 15, path: "/privacy", label: "privacy_page" }
    }

    return (
        <>
            <Toolbar sx={{ flexDirection: "column", justifyContent: "center", position: "relative" }}>
                <LogoButton/>

                <IconButton
                    onClick={openBurgerHandler}
                    size="large"
                    edge="end"
                    sx={{ ml: 1, position: "absolute", right: 0 }}
                >
                    <MenuIcon/>
                </IconButton>

                <Drawer
                    anchor="right"
                    sx={{
                        width: "80%",
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: "80%",
                            boxSizing: "border-box"
                        }
                    }}
                    open={isBurgerOpen}
                >
                    <Stack justifyContent="space-between" sx={{ flexGrow: 1 }}>
                        <Stack direction="row" justifyContent="space-between">
                            <Button
                                sx={{ whiteSpace: "nowrap" }}
                                href="tel: +78005009052"
                            >
                                <Typography variant="body2" sx={{ marginLeft: "5px", color: "#838383" }}>
                                    8 (800) 500-90-52
                                </Typography>
                            </Button>

                            <IconButton sx={{ p: "20px", mr: "10px", width: "50px" }} onClick={closeBurgerHandler} >
                                <CloseIcon/>
                            </IconButton>
                        </Stack>

                        <Divider/>

                        <List sx={{ flexGrow: 1 }}>
                            {
                                Object.values(mobileMenuLinks).map(({ id, path, label }) => (
                                    <ListItem key={id} disablePadding onClick={() => onClickBurgerItemHandler(path)}>
                                        <ListItemButton>
                                            <ListItemText sx={{ textTransform: "uppercase" }} primary={
                                                <FormattedMessage id={label}/>
                                            }/>
                                        </ListItemButton>
                                    </ListItem>
                                ))
                            }
                        </List>

                        <Divider/>

                        <Typography
                            color="text.primary"
                            align="center"
                            sx={{ fontSize: "12px", lineHeight: "16px", py: "15px" }}
                        >
                            <MaterialLink
                                href="https://heatinvest.com"
                                variant="inherit"
                            >ООО «Хитинвест»</MaterialLink>

                            &ensp;by Spaceport 2022
                        </Typography>
                    </Stack>
                </Drawer>
            </Toolbar>

            <Toolbar>
                <AsyncSearchInput/>
            </Toolbar>
        </>
    )
}