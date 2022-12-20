import { styled } from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";
import { alpha } from "@mui/material";

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  textAlign: "start",
  padding: theme.spacing(1.25, 0),
  gap: 8,
  color: theme.palette.colors.greyLight,

  "&:hover, &.Mui-selected, &.Mui-selected:hover": {
    color: theme.palette.colors.yellowGold,
    backgroundColor: "transparent",
  },

  "&.Mui-selected:before": {
    content: '" "',
    width: 2,
    height: "100%",

    position: "absolute",
    left: -16,
    background: theme.palette.colors.yellowGold,
  },

  "&.popper-item": {
    padding: theme.spacing(0.85, 1, 0.7, 1),
    fontSize: "14px",

    "&:hover, &.Mui-selected, &.Mui-selected:hover": {
      backgroundColor: alpha(theme.palette.colors.blueLight, 0.2),
    },

    "&.Mui-selected:before": {
      content: '" "',
      width: 2,
      height: "100%",

      position: "absolute",
      left: "unset",
      right: 0,
      background: theme.palette.colors.yellowGold,
    },
  },
}));
