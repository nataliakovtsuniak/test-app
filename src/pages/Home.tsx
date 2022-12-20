import { useState } from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import { Drawer } from "../components/Drawer/Drawer";
import { AppBar } from "../components/AppBar/AppBar";
import { Calculator } from "../components/Calculator";

export const navItems = [
  "OSRS Gold",
  "RS3 Gold",
  "Sell RS Gold",
  "OSRS Items",
  "OSRS Accounts",
  "Reward Chests",
];

export const Home = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar onClick={handleDrawerToggle} isDrawerOpen={isDrawerOpen} />
      <Box component="nav">
        <Drawer open={isDrawerOpen} onClick={handleDrawerToggle} />
      </Box>
      <Box
        sx={{
          height: "100%",
          paddingTop: 14,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Calculator />
      </Box>
    </div>
  );
};

export default Home;
