import { FC } from "react"
import styles from "./AboutStoking.module.css"
import { FormattedMessage } from "react-intl"
import { Box, Typography } from "@mui/material"
import phone from "../../assets/img/main_phone.png"


export const AboutStoking: FC = () => {
    return (
        <Box
            sx={{
                display: "grid",
                gap: "2",
                p: "20px 0",
                mx: "-24px",
                gridTemplateColumns: { xs: "1fr", md: "65% 1fr" },
                gridTemplateRows: { xs: "1fr", md: "repeat(3, auto)" }
            }}
        >
            <Box gridColumn="1 / 2" gridRow="2 / -2">
                <Box sx={{ p: { xs: "40px 15px", md: "45px 75px" } }} className={styles.textBox}>
                    <Typography variant="body1">
                        <span className={styles.textBold}>Stoking</span> — <FormattedMessage id="partnership_about_stoking_1"/>
                    </Typography>

                    <Typography variant="body1">
                        <FormattedMessage id="partnership_about_stoking_2"/>
                    </Typography>

                    <Typography variant="body1">
                        <FormattedMessage id="partnership_about_stoking_3"/>
                    </Typography>

                    <Typography variant="body1">
                        <FormattedMessage id="partnership_about_stoking_4"/>
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    display: { xs: "none", md: "block" },
                    gridColumn: "2 / -1",
                    gridRow: "1 / -1",
                    justifySelf: "center",
                    alignSelf: "center"
                }}
            >
                <img width="220" src={phone} alt="Stoking на телефоне" title="Stoking"/>
            </Box>

            <Box sx={{ gridColumn: "1 / -1", gridRow: "2 / -2", backgroundColor: "#F8F8F8", zIndex: -1 }}></Box>
        </Box>
    )
}