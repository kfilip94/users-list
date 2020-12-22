import React from "react";
import styled from "styled-components";
import SearchField from "../SearchField/SearchField";

const Header = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
  margin-bottom: 18px;
`;

const Title = styled.span`
  color: ${({ theme }) => theme.textColor.primary};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  font-size: ${({ theme }) => theme.fontSize.large};
  line-height: 27px;
  flex: 3;
  text-align: left;
`;

const ConnectUsersButton = styled.button`
  padding: 10px 12px;
  background-color: ${({ theme }) => theme.themeColor};
  border: 0;
  border-radius: 4px;
  color: ${({ theme }) => theme.textColor.buttonDark};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  font-size: ${({ theme }) => theme.fontSize};
  line-height: 21px;
`;

const HeaderComponent = ({
  title,
  searchPlaceholder,
  handleOnSearchChange
}) => {
  return (
    <Header>
      <Title>{title}</Title>
      <SearchField
        placeholder={searchPlaceholder}
        onChange={handleOnSearchChange}
      ></SearchField>
      <ConnectUsersButton>Connect Users</ConnectUsersButton>
    </Header>
  );
};

export default HeaderComponent;
