import { FC } from "react"
import { styled } from "@mui/material/styles"

import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector"

import { Box, CircularProgress, Step, StepLabel, Stepper, Typography, useMediaQuery } from "@mui/material"
import styles from "./CustomizedStepper.module.css"


const Connector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: "26px",
        left: "calc(-50% + 90px - 40px)",
        right: "calc(50% + 90px)"
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderTop: "3px dashed #ED7117"
    }
}))


type StepIconPropsType = {
    label: string
    progress?: number
}
const StepIcon: FC<StepIconPropsType> = ({ label = "", progress = 100 }) => {
    return (
        <Box className={styles.stepCircleContainer}>
            <CircularProgress
                variant="determinate"
                size={57}
                thickness={4}
                value={progress}
            />

            <Typography
                variant="caption"
                component="div"
                align="center"
                color="primary.main"
                className={styles.stepCircleText}
            >
                {label}
            </Typography>
        </Box>
    )
}


type StepType = {
    label: string
    title: string
    text: string
}
type PropsType = {
    steps: StepType[]
}
export const CustomizedStepper: FC<PropsType> = ({ steps }) => {
    const isMaxWidth900 = useMediaQuery("(max-width:900px)")

    return (
        <Stepper sx={{ gap: 5, alignItems: "stretch" }}
            alternativeLabel
            orientation={isMaxWidth900 ? "vertical" : "horizontal"}
            connector={isMaxWidth900 ? null : <Connector/>}
            activeStep={steps.length - 1}
        >
            {
                steps.map((step, index, array) => (
                    <Step key={step.label}>
                        <StepLabel
                            sx={{ cursor: "default" }}
                            StepIconComponent={() => StepIcon({
                                label: step.label,
                                progress: Math.ceil(100 / array.length * (index + 1))
                            })}
                        >
                            <Typography
                                variant="body1"
                                component="h3"
                                align="center"
                                sx={{ fontWeight: 600 }}
                            >
                                {step.title}
                            </Typography>

                            <Typography variant="body2" align="center">
                                {step.text}
                            </Typography>
                        </StepLabel>
                    </Step>
                ))
            }
        </Stepper>
    )
}