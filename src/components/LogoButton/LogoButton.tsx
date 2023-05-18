import React, { FC } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/img/logo.png"
import { Button } from "@mui/material"


export const LogoButton: FC = () => {
    return (
        <Button>
            <Link to="/" style={{ display: "flex", justifyContent: "center" }}>
                <img width={82} src={logo} alt="Stoking"/>
            </Link>
        </Button>
    )
}