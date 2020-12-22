import React, { useContext, useMemo } from "react";
import List from "../List/List";
import styled from "styled-components";
import ListHeader from "./ListHeader";
import Header from "./Header";
import ListActions from "./ListActions";
import { device } from "../../styles/breakpoints";

import { ListSelectionContext } from "../../contexts/ListSelectionContextProvider";

import { SORT_TYPE } from "../../utils";
import useUsers from "../../hooks/useUsers";

const AccountUsers = styled.div`
  background-color: #edf2f7;
  display: flex;
  flex-direction: column;
  padding: 32px;
  max-width: 790px;
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

  const { status, data, fetchNextPage, hasNextPage } = useUsers({
    search,
    sortByPermission: sortOrder
  });

  const items = useMemo(
    () => (data ? data.pages.map((page) => page.users).flat(1) : []),
    [data]
  );

  const {
    selectedItems,
    getSelectedItemsCount,
    toggleItemSelection
  } = useContext(ListSelectionContext);

  const handleToggleSortOrder = () => {
    if (sortOrder === SORT_TYPE.ASC) {
      setSortOrder(SORT_TYPE.DESC);
    } else {
      setSortOrder(SORT_TYPE.ASC);
    }
  };

  return (
    <AccountUsers>
      <Header
        title="Account users"
        searchPlaceholder="Search"
        handleOnSearchChange={(value) => setSearch(value)}
      />
      <ListContainer>
        <ListActions selectedUsersCount={getSelectedItemsCount(items)} />
        <ListHeader
          checked={selectedItems.ALL_SELECTED}
          handleOnAllSelectedChange={() => toggleItemSelection("ALL_SELECTED")}
          sortOrder={sortOrder}
          handleToggleSortOrder={handleToggleSortOrder}
        />
        <List
          items={items}
          fetchMore={fetchNextPage}
          hasNextPage={hasNextPage}
          status={status}
        />
      </ListContainer>
    </AccountUsers>
  );
};

export default AccountUsersComponent;
