import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/loupe.svg";

import styled from "styled-components";

const SearchField = styled.label`
  align-items: center;
  background: ${({ theme }) => theme.backgroundColor};
  border: ${({ theme }) => theme.borderLight};
  box-sizing: border-box;
  border-radius: 4px;
  margin: 0 12px;
  padding: 12px 12px 10px 12px;
  display: flex;

  > *:first-child {
    margin-right: 10px;
  }
`;

const SearchInput = styled.input.attrs({ type: "text" })`
  border: none;
  box-sizing: border-box;
  line-height: 21px;
  height: 100%;

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.textColor.placeholder};
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.textColor.placeholder};
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.textColor.placeholder};
  }
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
