import { FC } from "react"
import { FormattedMessage, useIntl } from "react-intl"
import { Typography } from "@mui/material"
import { CustomizedStepper } from "../CustomizedStepper/CustomizedStepper"


export const WorkStages: FC = () => {
    const intl = useIntl()
    const steps = [
        {
            label: `${intl.formatMessage({ id: "partnership_step" })} 1`,
            title: intl.formatMessage({ id: "partnership_step_1_title" }),
            text: intl.formatMessage({ id: "partnership_step_1_text" })
        },
        {
            label: `${intl.formatMessage({id: "partnership_step"})} 2`,
            title: intl.formatMessage({ id: "partnership_step_2_title" }),
            text: intl.formatMessage({ id: "partnership_step_2_text" })
        },
        {
            label: `${intl.formatMessage({id: "partnership_step"})} 3`,
            title: intl.formatMessage({ id: "partnership_step_3_title" }),
            text: intl.formatMessage({ id: "partnership_step_3_text" })
        }
    ]


    return (
        <div style={{ padding: "20px 0" }}>
            <Typography
                variant="h2"
                align="center"
                sx={{ fontWeight: "500", fontSize: "26px", marginBottom: "40px" }}
            >
                <FormattedMessage id="partnership_steps_title"/>
            </Typography>

            <CustomizedStepper steps={steps}/>
        </div>
    )
}