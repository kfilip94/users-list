import React, { useState } from "react";
import List from "../List/List";
import { useVirtual } from "react-virtual";
import { fakeFetchUsers } from "../../api/fakeApi";
import styled from "styled-components";

const TextField = styled.input.attrs({ type: "text" })`
  flex: 1;
  margin: 0 12px;
  background: #ffffff;
  /* default/gray/30 */

  border: 1px solid #e2e8f0;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 12px 12px 30px;
  height: 100%;
`;

const TextFieldComponent = ({ placeholder, value, onChange }) => {
  return (
    <TextField
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></TextField>
  );
};

export default TextFieldComponent;
