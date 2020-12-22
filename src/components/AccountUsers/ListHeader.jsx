import React from "react";
import styled from "styled-components";

import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-down.svg";
import { SORT_TYPE } from "../../utils";

const User = styled.div`
  display: flex;
  flex: 3;
`;

const ColumnLabel = styled.div`
  color: ${({ theme }) => theme.textColor.secondary};
  font-family: ${({ theme }) => theme.fontFamilyBold};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const SortOrderButton = styled(Button)`
  border: 0;
  box-shadow: none;
`;

const SortOrderIcon = styled.div`
  margin-left: 4px;
  transform: ${(props) =>
    props.sortOrder === SORT_TYPE.DESC ? "none" : `rotate(180deg)`};
`;

const ListHeader = styled.div`
  display: flex;
  margin: 0 24px 0 16px;

  > *:first-child {
    flex: 3;
  }

  > *:last-child {
    flex: 2;
  }
`;

const ListHeaderComponent = ({
  checked,
  handleOnAllSelectedChange,
  sortOrder,
  handleToggleSortOrder
}) => {
  return (
    <ListHeader>
      <User>
        <Checkbox checked={checked} onChange={handleOnAllSelectedChange} />
        <ColumnLabel>User</ColumnLabel>
      </User>
      <div>
        <SortOrderButton onClick={handleToggleSortOrder}>
          <ColumnLabel>Permission</ColumnLabel>
          <SortOrderIcon sortOrder={sortOrder}>
            <ArrowIcon />
          </SortOrderIcon>
        </SortOrderButton>
      </div>
    </ListHeader>
  );
};

export default ListHeaderComponent;
