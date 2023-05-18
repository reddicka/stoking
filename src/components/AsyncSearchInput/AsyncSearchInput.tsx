import React, { FC, SyntheticEvent, useEffect, useState } from "react"
import { useIntl } from "react-intl"
import { Autocomplete, IconButton, InputAdornment, TextField } from "@mui/material"
import { FindIcon } from "../icons"



const allGoods = [
    "Шапка",
    "Носки",
    "Валенки",
    "Варежки",
    "Куртка",
]

export const AsyncSearchInput: FC = () => {
    const [autocompleteIsOpen, setAutocompleteIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [autocompleteValues, setAutocompleteValues] = useState<string[]>([]);

    const intl = useIntl()

    useEffect(() => {
        const filteredGoods = searchTerm
            ? allGoods.filter(item => item.toLowerCase().includes(searchTerm))
            : allGoods

        setAutocompleteValues(filteredGoods)
    }, [searchTerm])


    const fetchingHandler = (e: SyntheticEvent, value: string) => {
        setSearchTerm(value.toLowerCase())
    }

    return (
        <Autocomplete
            inputValue={searchTerm}
            onInputChange={fetchingHandler}
            freeSolo
            filterOptions={(x) => x}


            sx={{ width: "100%" }}
            open={autocompleteIsOpen}
            onOpen={() => {
                setAutocompleteIsOpen(true);
            }}
            onClose={() => {
                setAutocompleteIsOpen(false);
            }}

            isOptionEqualToValue={(option, value) => option === value}
            options={autocompleteValues}
            renderInput={(params) => (
                <TextField
                    {...params}
                    size="small"
                    variant="outlined"
                    placeholder={intl.formatMessage({ id: "input_placeholder_product_search" })}
                    InputProps={{
                        ...params.InputProps,

                        endAdornment: (
                            <InputAdornment position="end">
                                 <IconButton type="button" sx={{ p: '10px' }}>
                                    <FindIcon/>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            )}
        />
    )
}
