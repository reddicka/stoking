import { FC } from "react"
import { CardContent, CardMedia, Stack, Typography } from "@mui/material"
import { FormattedMessage } from "react-intl"
import styles from "./CardItem.module.css"


type PropsType = {
    img: string
    itemName: string
    code: string
    price: string
}
export const CardItem: FC<PropsType> = (
    {
        img,
        itemName,
        code,
        price
    }
) => {
    return (
        <>
            <CardMedia
                component="img"
                image={img}
                alt={itemName}
                sx={{ height: "120px", padding: "5px", objectFit: "contain", boxSizing: "border-box" }}
            />

            <CardContent sx={{ padding: "0 15px 20px" }}>
                <Typography
                    variant="body1"
                    className={styles.itemName}
                    sx={{
                        fontSize: "13px",
                        lineHeight: "1.25",
                        marginBottom: "12px",
                }}>
                    {itemName}
                </Typography>

                <Stack flexDirection="row" gap={1} sx={{ marginBottom: "16px" }}>
                    <div >
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            noWrap
                            sx={{
                                fontSize: "12px"
                            }}>
                            <FormattedMessage id="vendor_code"/>:
                        </Typography>
                    </div>


                    <Typography
                        variant="body2"
                        color="text.primary"
                        noWrap sx={{ fontSize: "12px" }}>
                        {code}
                    </Typography>
                </Stack>

                <Typography
                    variant="body2"
                    color="primary.main"
                    sx={{ fontSize: "20px", fontWeight: "700", lineHeight: "27px" }}
                >{`${price} ₽`}</Typography>
            </CardContent>
        </>
    )
}