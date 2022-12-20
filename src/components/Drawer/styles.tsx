import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const DRAWER_WIDTH = 269;
const HEADER_HEIGHT = 80;

export const StyledDrawer = styled(MuiDrawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    top: HEADER_HEIGHT,
    width: DRAWER_WIDTH,
    boxSizing: "border-box",
    backgroundColor: theme.palette.colors.blueDark,
  },
}));

export const StyledList = styled(List)(({ theme }) => ({
  padding: theme.spacing(0.5, 2),
}));

export const StyledListItemText = styled(ListItemText)({
  textAlign: "start",
  margin: 0,
  color: "inherit",
});

export const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.colors.grey,
  opacity: 0.3,
}));
