import React from "react";
import styled from "styled-components";
import SearchField from "../SearchField/SearchField";

const Header = styled.div`
  display: flex;
  margin-bottom: 18px;
  height: 40px;
`;

const Title = styled.span`
  color: #1a202c;
  font-size: 18px;
  line-height: 27px;
  flex: 3;
  text-align: left;
`;

const ConnectUsersButton = styled.button`
  /* flex: 1; */
  padding: 10px 12px;
  background-color: #475de5;
  border: 0;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  font-size: 14px;
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
