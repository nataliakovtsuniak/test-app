import { useMemo, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useGlobalCurrencyState } from "./CurrencyList/CurrencyList";
import { currencyMap } from "../utils/currencyUtils";

export const Calculator = () => {
  const currentCurrency = useGlobalCurrencyState();
  const [amount, setAmount] = useState<number>(100);

  const priceValue = useMemo(() => {
    return Number(
      (amount * currencyMap[currentCurrency.get()].rate).toFixed(2)
    );
  }, [amount, currentCurrency]);

  return (
    <Box sx={{ margin: "0 auto" }}>
      <TextField
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        placeholder="Amount"
        label="Amount"
        value={amount}
        onChange={(e) => {
          setAmount(isNaN(Number(e.target.value)) ? 0 : Number(e.target.value));
        }}
      />

      <Typography sx={{ margin: "8px 0" }}>
        {currencyMap[currentCurrency.get()].label}
      </Typography>

      <TextField
        disabled
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        placeholder="Price"
        label="Price"
        value={priceValue}
      />
    </Box>
  );
};
