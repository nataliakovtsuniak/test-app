import Box from "@mui/material/Box";

import { AppBarCurrencyDropdown } from "./AppBarCurrencyDropdown";
import { StyledButton } from "./styles";

export const AppBarActions = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "contents" },
          flexDirection: "column",
        }}
      >
        <AppBarCurrencyDropdown />
        <StyledButton sx={{ whiteSpace: "nowrap" }}>Sign Up</StyledButton>
      </Box>

      <StyledButton variant="contained" sx={{ whiteSpace: "nowrap" }}>
        Log In
      </StyledButton>
    </Box>
  );
};
