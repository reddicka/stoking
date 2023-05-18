import { FC } from "react"
import { Link } from "react-router-dom"
import { FormattedMessage } from "react-intl"
import { Box, Button, Stack, Typography } from "@mui/material"
import banner from "../../assets/img/main_banner.png"


export const OfferTitle: FC = () => {
    return (
        <Stack alignItems="center" sx={{ padding: "20px 0" }}>
            <Typography align="center" variant="h1" sx={{ fontWeight: "600", fontSize: "26px", marginBottom: "20px" }}>
                <FormattedMessage id="offer_title"/>
            </Typography>

            <Typography align="center" sx={{ fontWeight: "500" }}>
                <FormattedMessage id="offer_question"/>
            </Typography>

            <Typography align="center" sx={{ fontWeight: "500", marginBottom: "20px" }}>
                <FormattedMessage id="offer_call"/>
            </Typography>

            <Box sx={{ order: { xs: 1, md: 0 } }}>
                <Link to="/auth">
                    <Button
                        sx={{ marginBottom: { xs: "30px", md: "30px" } }}
                        variant="contained"
                        disableElevation
                    >
                        <FormattedMessage id="button_become_a_seller"/>
                    </Button>
                </Link>
            </Box>


            <Box sx={{ maxWidth: "740px", mb: { xs: "25px", md: "40px" } }}>
                <img width="100%" src={banner} alt="Баннер Stoking" title="Stoking"/>
            </Box>
        </Stack>
    )
}