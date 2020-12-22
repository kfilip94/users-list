import React from "react";
import AccountUsersComponent from "./components/AccountUsers/AccountUsers";
import { createGlobalStyle } from "styled-components";
import GlobalFonts from "./fonts/GlobalFonts";
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes.js";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  button, input {
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
    font-size: 14px;
  }
`;

const AppStyled = styled.div`
  text-align: center;
  margin: auto;
`;

export default function App() {
  return (
    <AppStyled>
      <GlobalFonts />
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <AccountUsersComponent />
      </ThemeProvider>
    </AppStyled>
  );
}
