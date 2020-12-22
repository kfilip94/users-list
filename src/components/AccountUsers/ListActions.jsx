import React from "react";
import styled from "styled-components";

import Button from "../Button/Button";
import { ReactComponent as EditIcon } from "../../assets/icons/pencil.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/trash.svg";

const ListActions = styled.div`
  display: flex;
  align-items: center;
  margin: 0 16px;
  margin-bottom: 24px;

  > button {
    margin-right: 8px;
  }
`;

const SelectedUsers = styled.div`
  display: flex;
  color: ${({ theme }) => theme.textColor.primary};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  margin-right: 32px;
`;

const ButtonText = styled.div`
  margin: 0 6px 0 8px;
`;

const ListACtionsComponent = ({ selectedUsersCount }) => {
  const selectedUsersText = `${selectedUsersCount} ${
    selectedUsersCount === 1 ? "user" : "users"
  } selected`;

  return (
    <ListActions>
      <SelectedUsers>{selectedUsersText}</SelectedUsers>
      <Button>
        <EditIcon />
        <ButtonText>Edit</ButtonText>
      </Button>
      <Button>
        <DeleteIcon />
        <ButtonText>Delete</ButtonText>
      </Button>
    </ListActions>
  );
};

export default ListACtionsComponent;
