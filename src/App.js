import React, { useState } from "react";
import "./styles.css";
import UserContextProvider from "./contexts/UserContext";
import AccountUsersComponent from "./components/AccountUsers/AccountUsers";
import { createGlobalStyle } from "styled-components";

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
    font-family: sans-serif;
  }
`;

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <UserContextProvider>
        <AccountUsersComponent />
      </UserContextProvider>
    </div>
  );
}
