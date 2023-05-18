import { createTheme } from "@mui/material"


export const theme = createTheme({
    palette: {
        primary: {
            main: "#ED7117",
        },
        text: {
            primary: "#3A3A3A",
            secondary: "#9C9C9C",
        }
    },
    typography: {
        fontFamily: "'Nunito', sans-serif",
        button: {
            textTransform: "none"
        },
        body1: {
            fontSize: 16,
        },
        body2: {
            fontSize: 14
        }
    },
    shape: {
        borderRadius: 8
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ffffff",
                    boxShadow: "none"
                },
            },
        },
        MuiLink: {
            defaultProps: {
                color: "#939393"
            }
        },
        MuiToolbar: {
            defaultProps: {
                disableGutters: true
            }
        },
        MuiTypography: {
            defaultProps: {
                color: "#3A3A3A",
                lineHeight: "1.5",
            }
        },
        MuiBottomNavigationAction : {
            styleOverrides: {
                label: {
                    fontFamily: "'Montserrat', serif",
                },
            }
        }
    },
})
