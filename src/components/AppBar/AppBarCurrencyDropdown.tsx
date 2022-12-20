import { useRef, useState } from "react";

import { styled } from "@mui/material/styles";
import Grow from "@mui/material/Grow";
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import { ReactComponent as CaretDownIcon } from "../icons/caretDown.svg";
import {
  CurrencyList,
  useGlobalCurrencyState,
} from "../CurrencyList/CurrencyList";
import { currencyMap } from "../../utils/currencyUtils";
import { StyledList, StyledPaper } from "./styles";

export const IconWrapper = styled("span", {
  shouldForwardProp(propName: PropertyKey): boolean {
    return propName !== "rotate";
  },
})<{ rotate?: boolean }>(({ rotate }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  "& svg": {
    color: "inherit",
    transform: rotate ? `rotate(180deg)` : "unset",
  },
}));

const StyledButton = styled(Button, {
  shouldForwardProp(propName: PropertyKey): boolean {
    return propName !== "open";
  },
})<{ open?: boolean }>(({ open, theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 6,
  fontSize: "14px",
  color: open ? theme.palette.colors.yellowGold : "#fff",
}));

export const AppBarCurrencyDropdown = () => {
  const currentCurrency = useGlobalCurrencyState();
  const anchorRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const CurrencyIcon = currencyMap[currentCurrency.get()].icon;
  const currencyLabel = currencyMap[currentCurrency.get()].label;

  const handleDropdownToggle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setDropdownOpen((prevState) => !prevState);
  };

  const handleClose = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <StyledButton
        ref={anchorRef}
        aria-controls="currency-switcher"
        aria-haspopup="true"
        onClick={handleDropdownToggle}
        open={dropdownOpen}
        disableRipple
      >
        <CurrencyIcon />
        {currencyLabel}
        <IconWrapper rotate={dropdownOpen}>
          <CaretDownIcon />
        </IconWrapper>
      </StyledButton>

      <Popper
        open={dropdownOpen}
        anchorEl={anchorRef.current}
        transition
        placement={"bottom"}
        sx={{ zIndex: 1201 }}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} timeout={350}>
            <StyledPaper>
              <ClickAwayListener onClickAway={handleClose}>
                <StyledList onClick={handleClose}>
                  <CurrencyList useInPopper />
                </StyledList>
              </ClickAwayListener>
            </StyledPaper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
