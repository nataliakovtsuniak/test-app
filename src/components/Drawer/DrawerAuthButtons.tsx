import Box from "@mui/material/Box";
import { StyledButton } from "../AppBar/styles";

export const DrawerAuthButtons = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
      <StyledButton variant="outlined" sx={{ whiteSpace: "nowrap" }}>
        Sign Up
      </StyledButton>
      <StyledButton variant="contained" sx={{ whiteSpace: "nowrap" }}>
        Log In
      </StyledButton>
    </Box>
  );
};
