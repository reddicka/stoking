import React, { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { getAppLanguageSelector } from "../../store/selectors/appSelector"
import { setAppLanguageByUser } from "../../store/reducers/appSlice"
import { FormattedMessage } from "react-intl"
import { LOCALES } from "../../languages/locales"
import { MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material"
import flag_ru from "../../assets/img/flag_ru.png"
import flag_en from "../../assets/img/flag_en.png"


export const LanguageSelector: FC = () => {
    const dispatch = useAppDispatch()

    const appLanguage = useAppSelector(getAppLanguageSelector)
    const languages = [
        { name: "Русский", code: LOCALES.RUSSIAN, icon: flag_ru },
        { name: "English", code: LOCALES.ENGLISH, icon: flag_en }
    ]

    const changeLanguageHandler = (e: SelectChangeEvent) => {
        dispatch(setAppLanguageByUser(e.target.value))
    }

    return (
        <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
            <Typography sx={{ marginRight: "25px", display: { xs: "none", md: "block" } }}>
                <FormattedMessage id={"choose_language"} />:
            </Typography>

            <Select
                onChange={changeLanguageHandler}
                value={appLanguage || "ru"}
                variant="standard"
            >
                {
                    languages.map(({ name, code, icon }) => (
                        <MenuItem key={code} value={code}>
                            <img
                                src={icon}
                                alt={name}
                                style={{
                                    marginRight: "10px",
                                }}
                            />
                            <Typography variant="body1" component="span">{name}</Typography>
                        </MenuItem>
                    ))
                }
            </Select>
        </Stack>
    )
}