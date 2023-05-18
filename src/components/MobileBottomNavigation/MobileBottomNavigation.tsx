import { FC, SyntheticEvent, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FormattedMessage } from "react-intl"
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material"
import { BasketIcon2, HeartIcon, HomeIcon, MenuIcon, Profile2Icon } from "../icons"


export const MobileBottomNavigation: FC = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const [selectedPage, setSelectedPage] = useState(location.pathname)

    useEffect(() => {
        navigate(selectedPage)
    }, [selectedPage])

    useEffect(() => {
        setSelectedPage(location.pathname)
    }, [location.pathname])

    const changeHandler = (event: SyntheticEvent, newPath: string) => {
        setSelectedPage(newPath)
    }

    const mobileMenu = [
        { id: 1, path: "/", label: "main_page", icon: HomeIcon },
        { id: 2, path: "/catalog", label: "catalog_page", icon: MenuIcon },
        { id: 3, path: "/basket", label: "basket_page", icon: BasketIcon2 },
        { id: 4, path: "/favorites", label: "favorites_page", icon: HeartIcon },
        { id: 5, path: "/profile", label: "profile_page", icon: Profile2Icon }
    ]

    return (
        <nav style={{ height: "100px" }}>
            <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 2 }} elevation={12}>
                <BottomNavigation
                    showLabels
                    value={selectedPage}
                    onChange={changeHandler}
                >
                    {
                        mobileMenu
                            .map(({ id, path, label, icon }) => (
                                <BottomNavigationAction
                                    key={id}
                                    label={
                                        <FormattedMessage id={label}/>
                                    }
                                    icon={icon()}
                                    value={path}
                                />
                            ))
                    }
                </BottomNavigation>
            </Paper>
        </nav>
    )
}
