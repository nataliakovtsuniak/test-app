import clsx from "clsx";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import { StyledButton } from "./styles";
import logo from "../icons/logo.png";
import { navItems } from "../../pages/Home";

const StyledLink = styled(Link)(({ theme }) => ({
  maxWidth: 110,
  maxHeight: 40,
  margin: theme.spacing(0, 2, 0, 0),
}));

export const AppBarNav = () => {
  return (
    <Box
      sx={{
        display: { xs: "contents", md: "flex" },
        gap: 2,
        alignItems: "center",
      }}
    >
      <StyledLink href="/">
        <img alt="logo" src={logo} width="100%" height="auto" />
      </StyledLink>

      <Box sx={{ display: { xs: "none", md: "contents" } }}>
        {navItems.map((item, index) => (
          <StyledButton
            component="a"
            href="#"
            key={index}
            className={clsx(index === 0 && "active-item")}
          >
            {item}
          </StyledButton>
        ))}
      </Box>
    </Box>
  );
};
