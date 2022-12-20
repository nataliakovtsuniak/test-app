import { createTheme } from "@mui/material/styles";

const Questrial = "Questrial";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#E9B109",
    },
    text: {
      primary: "#142241",
    },
    colors: {
      blueLight: "#2C3E67",
      blueDark: "#142241",
      yellowGold: "#E9B109",
      yellowGoldLight: "#E9B109",
      grey: "#dee2e6",
      greyLight: "#FAFAFA",
    },
  },

  typography: {
    htmlFontSize: 14,
    fontFamily: Questrial,
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightMedium: 600,

    button: {
      fontSize: "14px",
      letterSpacing: "0.8px",
    },
  },
});

theme.components = {
  MuiButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        fontSize: "16px",
        fontWeight: 400,
      },
    },
  },
  MuiListItemButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        fontSize: "16px",
        fontWeight: 400,
      },
    },
  },
  MuiListItemText: {
    styleOverrides: {
      root: {
        fontSize: "16px",
        fontWeight: 400,
      },
    },
  },
};
