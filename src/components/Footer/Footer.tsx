import { FC } from "react"
import { useIntl } from "react-intl"
import { Link } from "react-router-dom"
import { Button, Stack, Typography, Link as MaterialLink, Container, Box } from "@mui/material"


export const Footer: FC = () => {
    const intl = useIntl()

    const desktopMenu = [
        {
            key: "partnership",
            path: "/partnership",
            label: intl.formatMessage({ id: "partnership_page"})
        },
        {
            key: "delivery_page",
            path: "/delivery",
            label: intl.formatMessage({ id: "delivery_page"})
        },
        {
            key: "payment_page",
            path: "/payment",
            label: intl.formatMessage({ id: "payment_page"})
        },
        {
            key: "contacts_page",
            path: "/contacts",
            label: intl.formatMessage({ id: "contacts_page"})
        },
        {
            key: "offer_page",
            path: "/offer",
            label: intl.formatMessage({ id: "offer_page"})
        },
        {
            key: "privacy_page",
            path: "/privacy",
            label: intl.formatMessage({ id: "privacy_page"})
        }
    ]

    return (
        <footer style={{ borderTop: "1px solid #BFBCBC", marginTop: "100px", padding: "30px 0 40px" }}>
            <Container>
                <Box sx={{ px: { xs: "0", md: "135px" } }}>
                    <Stack
                        sx={{
                            marginBottom: "20px",
                            flexDirection: { xs: "column", md: "row" },
                            justifyContent: { xs: "flex-start", md: "space-between"},
                        }}
                    >
                        {
                            desktopMenu.map(link => (
                                <Link
                                    to={link.path}
                                    key={link.key}
                                >
                                    <Button>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "#909090", lineHeight: "150%" }}
                                        >
                                            {link.label}
                                        </Typography>
                                    </Button>
                                </Link>
                            ))
                        }
                    </Stack>

                    <Typography
                        color="text.primary"
                        align="center"
                        sx={{ fontSize: "12px", lineHeight: "16px" }}
                    >
                        <MaterialLink
                            href="https://heatinvest.com"
                            variant="inherit"
                        >ООО «Хитинвест»</MaterialLink>

                        &ensp;by Spaceport 2022
                    </Typography>
                </Box>
            </Container>
        </footer>
    )
}