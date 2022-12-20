import { Fragment } from "react";
import Box from "@mui/material/Box";

import { StyledListItemButton } from "components/CurrencyList/styles";

import { navItems } from "../../pages/Home";
import { DrawerCurrencyButton } from "./DrawerCurrencyButton";
import { DrawerAuthButtons } from "./DrawerAuthButtons";
import {
  StyledDivider,
  StyledDrawer,
  StyledList,
  StyledListItemText,
} from "./styles";

export const Drawer = ({ open, onClick }) => {
  return (
    <StyledDrawer
      variant="temporary"
      open={open}
      onClose={onClick}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{ display: { sm: "block", md: "none" } }}
    >
      <Box onClick={onClick} sx={{ textAlign: "center" }}>
        <StyledList dense>
          {navItems.map((item, index) => (
            <Fragment key={index}>
              <StyledListItemButton>
                <StyledListItemText primary={item} />
              </StyledListItemButton>
              <StyledDivider />
            </Fragment>
          ))}

          <DrawerCurrencyButton />
          <StyledDivider />

          <DrawerAuthButtons />
        </StyledList>
      </Box>
    </StyledDrawer>
  );
};
