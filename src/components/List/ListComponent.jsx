import React from "react";
import ListItem from "../ListItem/ListItem";
import Loading from "../Loading/Loading";
import styled from "styled-components";

const List = styled.ul`
  box-sizing: border-box;
  height: 620px;
  overflow-y: scroll;
  padding: 0;
  position: relative;
  margin: auto;
  width: 100%;

  /* hide scrollbar */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ListComponent = ({
  items,
  rowVirtualizer,
  parentRef,
  setLoadingRef,
  hasNextPage
}) => {
  return (
    <List ref={parentRef}>
      <li style={{ height: rowVirtualizer.totalSize }} />
      {rowVirtualizer.virtualItems.map(({ index, size, start }) => {
        const item = items[index];
        return (
          <ListItem
            key={item.id}
            item={item}
            size={size}
            start={start}
            parentRef={parentRef}
          />
        );
      })}
      {hasNextPage && <Loading loadingRef={setLoadingRef}></Loading>}
    </List>
  );
};

export default ListComponent;
