"use client";

import { createTheme } from "@mui/material";

export const theme = createTheme({
    colorSchemes: {
        dark: {
            palette: {
                primary: {
                    main: "rgb(250, 250, 250)",
                    contrastText: "rgb(25, 25, 25)",
                },
            },
        },
        light: {
            palette: {
                primary: {
                    main: "rgb(250, 250, 250)",
                    contrastText: "rgb(25, 25, 25)",
                },
            },
        },
    },
    typography: {
        fontFamily: "var(--font-overpass)",
        fontWeightRegular: 500,
        fontWeightLight: 500,
        fontWeightMedium: 500,
        fontWeightBold: 500,
        fontSize: 18,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            },
            defaultProps: {
                variant: "outlined",
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {},
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    color: "rgb(250, 250, 250)",
                    "& .MuiAutocomplete-input": {
                        color: "rgb(250, 250, 250)",
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: "0px 0px 10px 0px var(--white)",
                },
            },
        },
    },
});
