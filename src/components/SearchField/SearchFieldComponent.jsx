import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/loupe.svg";

import styled from "styled-components";

const SearchField = styled.label`
  margin: 0 12px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 12px 10px 12px;

  > *:first-child {
    margin-right: 10px;
  }
`;

const SearchInput = styled.input.attrs({ type: "text" })`
  border: none;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 21px;
  height: 100%;
`;

const SearchFieldComponent = ({ placeholder, onChange }) => {
  let timeout = null;

  const handleOnKeyUp = (e) => {
    const value = e.target.value;
    clearTimeout(timeout);

    timeout = setTimeout(function () {
      onChange(value);
    }, 500);
  };

  return (
    <SearchField>
      <SearchIcon />
      <SearchInput
        placeholder={placeholder}
        onKeyUp={handleOnKeyUp}
      ></SearchInput>
    </SearchField>
  );
};

export default SearchFieldComponent;
