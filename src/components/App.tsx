import { ThemeProvider } from "@mui/material/styles";

import Layout from "./Layout";
import routes from "../routes";
import { AppContextProvider } from "../hooks/useAppContext";

import { theme } from "../theme";

const App = (): JSX.Element => {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <Layout>{routes}</Layout>
      </ThemeProvider>
    </AppContextProvider>
  );
};

export default App;
