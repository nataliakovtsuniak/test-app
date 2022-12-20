import clsx from "clsx";
import { hookstate, State, useHookstate } from "@hookstate/core";
import { currencyMap } from "../../utils/currencyUtils";
import { StyledListItemButton } from "./styles";

export const currencies = ["usd", "eur", "gbr", "aud", "cad"];

const globalCurrencyState = hookstate("usd");
const wrapState = (s: State<string>) => ({
  get: () => s.value,
});

export const useGlobalCurrencyState = () =>
  wrapState(useHookstate(globalCurrencyState));

export const CurrencyList = ({ useInPopper = false }) => {
  const currentCurrencyState = useHookstate(globalCurrencyState);

  return (
    <>
      {currencies.map((currency, index) => {
        const Icon = currencyMap[currency].icon;
        const label = currencyMap[currency].label;

        return (
          <StyledListItemButton
            key={index}
            selected={
              currentCurrencyState.get() === currencyMap[currency].value
            }
            onClick={() => globalCurrencyState.set(currencyMap[currency].value)}
            className={clsx(useInPopper && "popper-item")}
          >
            <Icon width={16} height={16} />
            {label}
          </StyledListItemButton>
        );
      })}
    </>
  );
};
