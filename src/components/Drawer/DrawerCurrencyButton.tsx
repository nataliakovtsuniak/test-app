import { useState } from "react";
import { Collapse } from "@mui/material";

import {
  CurrencyList,
  useGlobalCurrencyState,
} from "../CurrencyList/CurrencyList";
import { currencyMap } from "../../utils/currencyUtils";
import { StyledListItemText } from "./styles";
import { StyledListItemButton } from "components/CurrencyList/styles";
import { ReactComponent as CaretDownIcon } from "../icons/caretDown.svg";
import { IconWrapper } from "../AppBar/AppBarCurrencyDropdown";

export const DrawerCurrencyButton = () => {
  const currentCurrency = useGlobalCurrencyState();
  const [isListOpen, setIsListOpen] = useState(false);

  const CurrencyIcon = currencyMap[currentCurrency.get()].icon;
  const currencyLabel = currencyMap[currentCurrency.get()].label;

  return (
    <>
      <StyledListItemButton
        onClick={(e) => {
          e.stopPropagation();
          setIsListOpen((open) => !open);
        }}
      >
        <CurrencyIcon />
        <StyledListItemText>{currencyLabel}</StyledListItemText>
        <IconWrapper rotate={isListOpen}>
          <CaretDownIcon />
        </IconWrapper>
      </StyledListItemButton>
      <Collapse in={isListOpen}>
        <div>
          <CurrencyList />
        </div>
      </Collapse>
    </>
  );
};
