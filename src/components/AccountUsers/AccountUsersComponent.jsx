import React, { useContext } from "react";
import List from "../List/List";
import styled from "styled-components";
import SearchField from "../SearchField/SearchField";
import CheckboxComponent from "../Checkbox/CheckboxComponent";
import { ReactComponent as EditIcon } from "../../assets/icons/pencil.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/trash.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-down.svg";

import Button from "../Button/Button";
import { UserContext } from "../../contexts/UserContext";
import { UsersContext } from "../../contexts/UsersContext";

import { SORT_TYPE } from "../../utils";

const AccountUsers = styled.div`
  background-color: #edf2f7;
  display: flex;
  flex-direction: column;
  padding: 32px;
  max-width: 790px;
  margin: auto;
`;

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

const ListContainer = styled.div`
  background-color: white;
  padding: 10px 16px;
  border-radius: 8px;
  padding: 32px;
`;

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

const User = styled.div`
  display: flex;
  flex: 3;
`;

const SortOrderButton = styled(Button)`
  border: 0;
`;

const SortOrderIcon = styled(ArrowIcon)`
  margin-left: 4px;
  transform: ${(props) =>
    props.sortOrder === SORT_TYPE.ASC ? "none" : `rotate(180deg)`};
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

const ButtonText = styled.div`
  margin-left: 8px;
`;

const AccountUsersComponent = () => {
  const listRef = React.useRef();

  const { updateQueryParams, queryParams } = useContext(UsersContext);
  const { selectedUsers, selectedUsersCount, toggleSelection } = useContext(
    UserContext
  );

  const handleSortToggle = () => {
    if (queryParams.sortByPermission === SORT_TYPE.ASC) {
      updateQueryParams({ sortByPermission: SORT_TYPE.DESC });
    } else {
      updateQueryParams({ sortByPermission: SORT_TYPE.ASC });
    }
  };

  return (
    <AccountUsers>
      <Header>
        <Title>Account users</Title>
        <SearchField
          placeholder="Search"
          onChange={(value) => updateQueryParams({ search: value })}
        ></SearchField>
        <ConnectUsersButton>Connect Users</ConnectUsersButton>
      </Header>
      <ListContainer>
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
        <ListHeader>
          <User>
            <CheckboxComponent
              checked={selectedUsers.ALL_SELECTED}
              onChange={() => toggleSelection("ALL_SELECTED")}
            />
            <span>User</span>
          </User>
          <div>
            <SortOrderButton onClick={handleSortToggle}>
              <span>Permission</span>
              <SortOrderIcon sortOrder={queryParams.sortByPermission} />
            </SortOrderButton>
          </div>
        </ListHeader>
        <List
          // items={users}
          // rowVirtualizer={rowVirtualizer}
          parentRef={listRef}
          // setLoadingRef={setLoadingRef}
          // hasMorePages={hasMorePages}
        />
      </ListContainer>
    </AccountUsers>
  );
};

export default AccountUsersComponent;
