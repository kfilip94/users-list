import React from "react";
import styled from "styled-components";

import Button from "../Button/Button";
import { ReactComponent as EditIcon } from "../../assets/icons/pencil.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/trash.svg";

const ListActions = styled.div`
  display: flex;
  align-items: center;
  > button {
    margin-left: 8px;
  }
  margin: 0 16px;
  margin-bottom: 24px;
`;

const SelectedUsers = styled.div`
  display: flex;
  margin-right: 24px;
`;

const ButtonText = styled.div`
  margin-left: 8px;
`;

const ListACtionsComponent = ({ selectedUsersCount }) => {
  return (
    <ListActions>
      <SelectedUsers>{selectedUsersCount} users selected</SelectedUsers>
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
