import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import NavBar from "../components/navBar/navBar";
import Routes from "../components/routes/routes";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#041e42",
    },
    secondary: {
      main: "#cb2c90",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <NavBar />
        <div className="root">
          <Routes />
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
