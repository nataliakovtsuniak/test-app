import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import { ReactComponent as MenuIcon } from "components/icons/menu.svg";
import { ReactComponent as CloseIcon } from "components/icons/close.svg";

import { theme } from "../../theme";
import { AppBarActions } from "./AppBarActions";
import { AppBarNav } from "./AppBarNav";

export const AppBar = ({ onClick, isDrawerOpen }) => {
  return (
    <MuiAppBar component="nav" sx={{ zIndex: 1201 }}>
      <Toolbar
        sx={{
          height: 80,
          gap: 4,
          justifyContent: "space-between",
          paddingLeft: { xs: 2, lg: 8.5 },
          paddingRight: { xs: 2, lg: 8.5 },
          backgroundColor: theme.palette.colors.blueDark,
          borderBottom: `1px solid rgba(233, 177, 9, 0.75)`,
          boxShadow: `0px 4px 3px rgba(23, 34, 39, 0.25)`,
        }}
      >
        <IconButton
          aria-label="open drawer"
          onClick={onClick}
          sx={{ padding: 0, display: { md: "none" }, color: "#fff" }}
        >
          {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        <AppBarNav />
        <AppBarActions />
      </Toolbar>
    </MuiAppBar>
  );
};
