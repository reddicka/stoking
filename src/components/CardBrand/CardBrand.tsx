import { FC } from "react"
import { Box, Paper } from "@mui/material"


type PropsType = {
    img: string
    title: string
}
export const CardBrand: FC<PropsType> = ({ img, title }) => {
    return (
        <Box sx={{ p: "8px" }}>
            <Paper
                elevation={12}
                sx={{
                    boxSizing: "border-box",
                    width: "100%",
                    height: "100%",
                    padding: "5px"
                }}
            >
                <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain"
                    }}
                />
            </Paper>
        </Box>
    )
}