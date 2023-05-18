import { FC } from "react"
import { Box, Button, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"


type PropsType = {
    icon?: JSX.Element
    title: string
    subtitle?: string
    buttonText?: string
    buttonLink?: string
    children: JSX.Element
}
export const ContainerWithDescription: FC<PropsType> = (
    {
        icon,
        title,
        subtitle,
        buttonText,
        buttonLink,
        children
    }
) => {
    return (
        <Stack
            sx={{
                p: "20px 0",
                marginBottom: "30px",
                mx: { xs: "-24px", md: "0" },
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: { xs: "20px", md: "0" }
            }}
        >
            <Stack
                sx={{
                    boxSizing: "border-box",
                    alignItems: { xs: "center", md: "start" },
                    width: { xs: "100%", md: "45%" },
                    px: { xs: "24px", md: "0" }
                }}
            >
                <Stack direction="row" alignItems="center" gap={1}>
                    {icon}

                    <Typography
                        variant="h2"
                        color="primary.main"
                        sx={{
                            fontSize: "24px",
                            fontWeight: "700"
                        }}
                    >
                        {title}
                    </Typography>
                </Stack>

                <Typography variant="body2" sx={{ marginBottom: "20px" }}>
                    {subtitle}
                </Typography>

                {
                    buttonText && buttonLink && (
                        <Box sx={{ alignSelf: { xs: "stretch", md: "flex-start" } }}>
                            <Link to={ buttonLink }>
                                <Button variant="contained" disableElevation fullWidth>
                                    { buttonText }
                                </Button>
                            </Link>
                        </Box>
                    )
                }
            </Stack>

            <Box sx={{ width: { xs: "100%", md: "55%" }, margin: 0 }}>
                {children}
            </Box>
        </Stack>
    )
}