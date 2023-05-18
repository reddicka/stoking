import React, { FC } from "react"
import { Backdrop, CircularProgress } from "@mui/material"


type PropsType = {
    isOpen?: boolean
}

export const Loader: FC<PropsType> = ({ isOpen = true }) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={ isOpen }
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}