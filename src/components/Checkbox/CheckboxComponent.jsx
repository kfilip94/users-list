import React from "react";
import styled from "styled-components";
import { ReactComponent as CheckboxIcon } from "../../assets/icons/checkmark-icon.svg";

const NativeCheckbox = styled.input.attrs({ type: "checkbox" })`
  // Hide checkbox visually but remain accessible to screen readers.
  border: 0;
  /* clip: rect(0 0 0 0);
  clippath: inset(50%); */
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Checkbox = styled.div`
  border: 1px solid #cbd5e0;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background-color: ${({ checked, theme }) =>
    checked ? theme.themeColor : "white"};
  /* border-radius: 4px; */
  margin-right: 14px;
  transition: all 150ms;
  cursor: pointer;
  ${NativeCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
`;

const CheckboxContainer = styled.label`
  cursor: pointer;
  /* padding: 8px; */
`;

const CheckboxComponent = ({ checked, onChange }) => {
  return (
    <CheckboxContainer>
      <Checkbox checked={checked}>
        <CheckboxIcon />
      </Checkbox>
      <NativeCheckbox checked={checked} onChange={onChange} />
    </CheckboxContainer>
  );
};

export default CheckboxComponent;
