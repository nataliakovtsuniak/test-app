import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  minWidth: 105,
  backgroundColor: theme.palette.colors.blueDark,
}));

export const StyledList = styled(List)(({ theme }) => ({
  padding: theme.spacing(1, 0),
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  position: "relative",

  fontSize: "14px",
  lineHeight: 1.2,
  color: "#fff",
  textTransform: "unset",

  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.colors.yellowGold,
  },

  "&.active-item": {
    color: theme.palette.colors.yellowGold,
    "&:after": {
      content: '" "',
      width: 24,
      height: 1.5,

      position: "absolute",
      bottom: 0,
      left: 0,
      background: theme.palette.colors.yellowGold,
      margin: theme.spacing(0.25, 1),
    },
  },

  "&.MuiButton-contained": {
    padding: theme.spacing(1, 3),
    lineHeight: 1.5,
    color: theme.palette.text.primary,

    "&:hover": {
      backgroundColor: theme.palette.colors.yellowGoldLight,
    },

    [theme.breakpoints.down("md")]: { padding: theme.spacing(0.8, 2) },
  },
  "&.MuiButton-outlined": {
    padding: theme.spacing(1, 3),
    lineHeight: 1.5,
    color: theme.palette.colors.greyLight,
    borderColor: theme.palette.colors.greyLight,

    [theme.breakpoints.down("md")]: { padding: theme.spacing(0.7, 1.6) },
  },
})) as typeof Button;
