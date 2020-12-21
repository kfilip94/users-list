import React from "react";
import styled from "styled-components";

import CheckboxComponent from "../Checkbox/CheckboxComponent";
import Button from "../Button/Button";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-down.svg";
import { SORT_TYPE } from "../../utils";

const User = styled.div`
  display: flex;
  flex: 3;
`;

const SortOrderButton = styled(Button)`
  border: 0;
  box-shadow: none;
`;

const SortOrderIcon = styled(ArrowIcon)`
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
        <CheckboxComponent
          checked={checked}
          onChange={handleOnAllSelectedChange}
        />
        <span>User</span>
      </User>
      <div>
        <SortOrderButton onClick={handleToggleSortOrder}>
          <span>Permission</span>
          <SortOrderIcon sortOrder={sortOrder} />
        </SortOrderButton>
      </div>
    </ListHeader>
  );
};

export default ListHeaderComponent;
