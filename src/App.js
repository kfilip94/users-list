import React, { useState } from "react";
import UserContextProvider from "./contexts/UserContext";
import AccountUsersComponent from "./components/AccountUsers/AccountUsers";
import { createGlobalStyle } from "styled-components";
import GlobalFonts from "./fonts/GlobalFonts";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes.js";

const GlobalStyle = createGlobalStyle`
  button, input {
    /* border: none; */
    user-select: none;
    outline: none;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  * {
    font-family: 'SF Pro Text Regular';
  }
`;

export default function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <GlobalStyle />

      <ThemeProvider theme={defaultTheme}>
        <AccountUsersComponent />
      </ThemeProvider>
    </div>
  );
}
