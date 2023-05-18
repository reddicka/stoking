import { FC } from "react"
import { useLocation, Link } from "react-router-dom"
import { Stack, Breadcrumbs as MUIBreadcrumbs, Typography } from "@mui/material"
import { BreadCrumbsMainIcon } from "../icons"
import { useIntl } from "react-intl"


export const Breadcrumbs: FC = () => {
    const intl = useIntl()
    const { pathname } = useLocation()

    const pathsArr = pathname.split("/").filter(x => x)

    return (
        <Stack spacing={2}>
            <MUIBreadcrumbs separator="—" aria-label="breadcrumb" color="black">
                {
                    pathsArr.length > 0
                        ? (
                            <Link to="/">
                                <BreadCrumbsMainIcon/>
                            </Link>
                        )
                        : <BreadCrumbsMainIcon/>
                }

                {
                    pathsArr.map((name, index) => {
                        // отображаемое название страницы с переводом
                        const intlName = intl.formatMessage({ id: `${name}_page` })
                        // путь для каждой крошки
                        const routeTo = `/${pathsArr.slice(0, index + 1).join("/")}`
                        const isLast = index === pathsArr.length - 1
                        return (
                            isLast
                                ? (
                                    <Typography
                                        key={name}
                                        variant="body2"
                                        color="text.secondary"
                                    >{intlName}</Typography>
                                )
                                : (
                                    <Link to={routeTo} key={name} style={{ textDecoration: "none" }}>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >{intlName}</Typography>
                                    </Link>
                                )
                        )
                    })
                }
            </MUIBreadcrumbs>
        </Stack>
    )
}
