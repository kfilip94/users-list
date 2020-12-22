import React, { useContext, useMemo } from "react";
import List from "../List/List";
import styled from "styled-components";
import ListHeader from "./ListHeader";
import Header from "./Header";
import ListActions from "./ListActions";
import { device } from "../../styles/breakpoints";

import { UserContext } from "../../contexts/UserContext";

import { SORT_TYPE } from "../../utils";
import useUsers from "../../hooks/useUsers";

const AccountUsers = styled.div`
  background-color: #edf2f7;
  display: flex;
  flex-direction: column;
  padding: 32px 8px;
  max-width: 790px;
  height: 720px;
  margin: auto;

  /* @media ${device.laptop} {
    padding: 32px;
  } */
`;

const ListContainer = styled.div`
  background-color: white;
  padding: 10px 16px;
  border-radius: 8px;
  padding: 32px;
`;

const AccountUsersComponent = () => {
  const [search, setSearch] = React.useState("");
  const [sortOrder, setSortOrder] = React.useState(SORT_TYPE.ASC);

  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage
  } = useUsers({ search, sortByPermission: sortOrder });

  const items = useMemo(
    () => (data ? data.pages.map((page) => page.users).flat(1) : []),
    [data]
  );

  const listRef = React.useRef();
  const { selectedUsers, selectedUsersCount, toggleSelection } = useContext(
    UserContext
  );

  const handleToggleSortOrder = () => {
    if (sortOrder === SORT_TYPE.ASC) {
      setSortOrder(SORT_TYPE.DESC);
    } else {
      setSortOrder(SORT_TYPE.ASC);
    }
  };

  const usersCount = useMemo(() => {
    if (!selectedUsers.ALL_SELECTED) {
      return selectedUsersCount;
    }
    const deselectedUsers = Object.keys(selectedUsers).filter(
      (key) => !selectedUsers[key] && key !== "ALL_SELECTED"
    ).length;
    return items.length >= deselectedUsers ? items.length - deselectedUsers : 0;
  }, [selectedUsers, items, selectedUsersCount]);

  return (
    <AccountUsers>
      <Header
        title="Account users"
        searchPlaceholder="Search"
        handleOnSearchChange={(value) => setSearch(value)}
      />
      <ListContainer>
        <ListActions selectedUsersCount={usersCount} />
        <ListHeader
          checked={selectedUsers.ALL_SELECTED}
          handleOnAllSelectedChange={() => toggleSelection("ALL_SELECTED")}
          sortOrder={sortOrder}
          handleToggleSortOrder={handleToggleSortOrder}
        />
        <List
          parentRef={listRef}
          items={items}
          fetchMore={fetchNextPage}
          hasNextPage={hasNextPage}
        />
      </ListContainer>
    </AccountUsers>
  );
};

export default AccountUsersComponent;
